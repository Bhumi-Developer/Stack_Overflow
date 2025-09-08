'use server'

import User from '@/database/user.model'
import { connectToDatabase } from '../mongoose'

interface GetUserByIdParams {
  userId: string
}

export async function getUserById({ userId }: GetUserByIdParams) {
  try {
    await connectToDatabase() // ✅ make sure DB is connected

    const user = await User.findOne({ clerkId: userId })

    return user
  } catch (error) {
    console.error('Error in getUserById:', error)
    throw error
  }
}
