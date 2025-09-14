import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest, NextResponse } from 'next/server'
import { createUser, updateUser,deleteUser } from '@/lib/actions/user.action'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    const { id } = evt.data
    const eventType = evt.type

    let mongoUser = null

    if (eventType === 'user.created') {
      const { id, email_addresses, image_url, username, first_name, last_name } = evt.data

      mongoUser = await createUser({
        clerkId: id,
        name: `${first_name} ${last_name || ''}`.trim(),
        username: username!,
        email: email_addresses[0].email_address,
        picture: image_url,
      })
       return new Response(
      JSON.stringify({
        message: 'Webhook received',
        eventType,
        mongoUser,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
    }
     if (eventType === 'user.updated') {
      const { id, email_addresses, image_url, username, first_name, last_name } = evt.data

      mongoUser = await updateUser({
        clerkId: id,
        updateData: {
          name: `${first_name} ${last_name || ''}`.trim(),
          username: username!,
          email: email_addresses[0].email_address,
          picture: image_url,
        },
        path: `/profile/${id}`
      })
       return new Response(
      JSON.stringify({
        message: 'Webhook received',
        eventType,
        mongoUser,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

   
  }
  if (eventType === 'user.deleted') {
      const { id} = evt.data

      const deletedUser = await deleteUser({ clerkId: id ?? "" });

       return NextResponse.json({
        message: 'Ok',
       user: deletedUser
      })}
      return new Response(JSON.stringify({ status: 200} ))
    }
     catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response(
      JSON.stringify({ error: 'Error verifying webhook' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }


}

