import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image'
import React from 'react'

const query = groq`
  *[_type == "Highlight"] {
    title,
    description,
    _createdAt,
    "image": image.asset->url,
    date,
  } | order(_createdAt desc)
`;

interface Post {
  title: string;
  description: string;
  _createdAt: string;
  date: string;
  image: string;
}

async function Updates() {

  const posts: Post[] = await client.fetch(query);
  return (
    <div>
      <div>
        <h1 className='font-bold text-4xl text-center text-sky-950'>Group News</h1>
        <div className='w-full py-12 flex justify-between'>
          <div className='w-[45%] h-64 bg-slate-500'></div>
          <div className='w-[45%] h-64 bg-slate-500'></div>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-4xl pb-6 text-center text-sky-950'>Research Highlights</h1>
        <div className='flex-col'>
        {posts.map((post, index) => (
            <div className='border-2 mb-6 border-sky-950 gap-5 flex p-5 rounded-lg' key={index}>
              <div>
                <Image width={160} className='rounded-lg' height={50} src={post.image} alt={''}/>
              </div>
              <div className='flex-col'>
                <h1 className='font-semibold text-2xl'>{post.title}</h1>
                <h3>{post.description}</h3>
                <h3 className='text-gray-600'>{new Date(post._createdAt).toLocaleDateString("en-Us", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}</h3>
              </div>
            </div>
        ))}
        </div>

        
      </div>
    </div>
  )
}

export default Updates