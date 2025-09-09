'use server'

import User from '@/database/user.model'
import { connectToDatabase } from '../mongoose'
import { CreateUserParams, UpdateUserParams } from './shared.types'
import { revalidatePath } from "next/cache";

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

export async function createUser(userData: CreateUserParams){
  try {
    await connectToDatabase() // ✅ make sure DB is connected

   const newUser = await User.create(userData);
   return newUser;

  } catch (error) {
    console.error('Error in getUserById:', error)
    throw error
  }
}
export async function updateUser(params: UpdateUserParams){
  try {
    await connectToDatabase() // ✅ make sure DB is connected
    const { clerkId,updateData, path} = params;

  await User.findOneAndUpdate({clerkId}, updateData, {
    new: true,
  })
   revalidatePath(path);

  } catch (error) {
    console.error('Error in getUserById:', error)
    throw error
  }
}