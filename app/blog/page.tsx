import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const query = groq`
  *[_type == "Blog"] {
    title,
    description,
    _createdAt,
    slug,
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
  slug: string;
}


async function page() {
  const posts: Post[] = await client.fetch(query);
  return (
    <div>
        <div>
        <h1 className='font-bold text-4xl pb-6 text-center text-sky-950'>Blogs</h1>
        <div className='flex-col'>
        {posts.map((post, index) => (
            <Link href={post.slug} className='border-2 mb-6 border-sky-950 gap-5 flex p-5 rounded-lg' key={index}>
              <div>
                <Image width={160} className='rounded-lg' height={50} src={post.image} alt={''}/>
              </div>
              <div className='flex-col w-full'>
                <h1 className='font-semibold text-[1.5rem]'>{post.title}</h1>
                <h3 className='text-ellipsis whitespace-nowrap overflow-hidden w-full pr-7'>{post.description}</h3>
                <h3 className='text-gray-600'>{new Date(post._createdAt).toLocaleDateString("en-Us", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}</h3>
              </div>
            </Link>
        ))}
        </div>

        
      </div>
    </div>
  )
}

export default page