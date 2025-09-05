import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import RenderTag from './RenderTag'

interface Tag {
    _id: number;
    name: string;
    totalQues: number;
  }

const hotQues = [
    {_id:1,title: 'How are you doing??How are you doing??'},
    {_id:2,title: 'How are you doing??'},
    {_id:3,title: 'How are you doing??'},
    {_id:4,title: 'How are you doing??'},
    {_id:5,title: 'How are you doing??'},
    {_id:6,title: 'How are you doing??'},
];

const popularTags: Tag[] = [
    {_id:1,name: 'javascript',totalQues: 5},
    {_id:2,name: 'javascript',totalQues: 5},
    {_id:3,name: 'javascript',totalQues: 5},
    {_id:4,name: 'javascript',totalQues: 5},
    {_id:5,name: 'javascript',totalQues: 5},
]

const RightSidebar = () => {
  
  return (
    <section
    className='background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-24 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[300px]'>
        <div>
            <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
            <div className='mt-7 flex w-full flex-col gap-[30px]'>
                {hotQues.map((question)=>(
                    <Link
                    href={`/questions/${question._id}`}
                        key={question._id}
                        className='flex cursor-pointer items-center justify-between gap-7'>
                            <p className='body-medium text-dark500_light700'>{question.title}</p>
                            <Image 
                            src='/assets/icons/chevron-right.svg'
                            alt='chevron right'
                            width={20}
                            height={20}
                            className="invert-colors"
                            />
                    </Link>
                ))}

            </div>
        </div>
        <div className='mt-10'>
            <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
            <div className='mt-7 flex flex-col gap-4'>
                {popularTags.map((tag)=>(
                    <RenderTag 
                    key={tag._id}
                    
                    showCount
                    name = {tag.name}
                    _id={tag._id}
                    totalQues = {tag.totalQues}
                    />
                    
                ))}
            </div>
        </div>
        </section>
  )
}

export default RightSidebar
