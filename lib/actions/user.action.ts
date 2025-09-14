'use server'

import User from '@/database/user.model'
import { connectToDatabase } from '../mongoose'
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from './shared.types'
import { revalidatePath } from "next/cache";
import Question from '@/database/question.model'


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

const updatedUser = await User.findOneAndUpdate(
  { clerkId },
  updateData,
  { new: true }
);

revalidatePath(path);
return updatedUser;


  } catch (error) {
    console.error('Error in getUserById:', error)
    throw error
  }
}
export async function deleteUser(params: DeleteUserParams){
  try {
    await connectToDatabase() // ✅ make sure DB is connected
    const { clerkId} = params;

  const user = await User.findOneAndDelete({clerkId});
  if(!user){
    throw new Error('User not found')
  }

  // const userQuestionIds = await Question.find({author: user._id}).distinct('_id');

  await Question.deleteMany({author: user._id})

  const deletedUser = await User.findByIdAndDelete(user._id);
  return deletedUser;

  } catch (error) {
    console.error('Error in getUserById:', error)
    throw error
  }
}