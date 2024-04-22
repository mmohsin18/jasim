import Image from 'next/image'
import React from 'react'
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

async function People() {

  const query = groq`
  *[_type == "Peopleleft"] {
    _id,
    _createdAt,
    title,
    post,
    "image": image.asset->url,
    direct
  
} | order(_createdAt asc)`;

const query2 = groq`
    *[_type == "Peopleright"] {
    _id,
    _createdAt,
    direct,
    title,
    post,
    "image": image.asset->url
  
} | order(_createdAt asc)
`;

const posts = await client.fetch(query);
const posts2 = await client.fetch(query2);
  
  return (
    <div>
      <div className='w-full pr-[14rem] flex justify-center gap-8'>
        <div className='flex-col gap-5 w-fit flex justify-end'>
        {posts.map((people: any, index: React.Key | null | undefined) => (
        <div className='' key={index}>
          <div className='flex-col text-right py-4'>
              <div className='w-fill flex justify-end'>
                  {people.image && (
                    <Image
                      src={people.image}
                      width={100}
                      height={100}
                      className='rounded-md'
                      alt={people.name}
                    />
                  )}
              </div>
              <a href={people.direct} className="font-bold text-2xl text-sky-950"><h3>{people.title}</h3></a>
              <h5 className="text-sm">{people.post}</h5>
          </div>
        </div>
        ))}         
        </div>
        <div className='bg-black w-[0.3%]'></div>
        <div className='flex-col'>
        {posts2.map((people: any, index: React.Key | null | undefined) => (
        <div className='' key={index}>
          <div className='flex-col w-fit py-4'>
          {people.image && (
            <Image
              src={people.image}
              width={100}
              height={100}
              className='rounded-md'
              alt={people.name}
            />
          )}

              <Link className="font-bold text-2xl text-sky-950" href={people.direct}><h3>{people.title}</h3></Link>
              <h5 className="text-sm">{people.post}</h5>
          </div>
        </div>
        ))}         
        </div>
      </div>
    </div>
  )
}

export const revalidate = 30;

export default People