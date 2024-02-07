import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React from "react";

const query = groq`
  *[_type == "Publication"] {
    title,
    description,
    _createdAt,
    place,
    date,
  } | order(_createdAt desc)
`;

interface Post {
  title: string;
  description: string;
  _createdAt: string;
  place: string;
  date: string;
}

export default async function page() {
  const posts: Post[] = await client.fetch(query);

  return (
    <div className="flex flex-col gap-3">
      {posts.map((post, index) => (
        <div
          className="py-5 px-4 border-2 border-slate-400 rounded-xl"
          key={index}
        >
          <h6 className="font-semibold">{post.description}</h6>
          <h5>{post.title}</h5>
          <h6>{post.place}</h6>
          <h6>{post.date}</h6>
        </div>
      ))}
    </div>
  );
}

export const revalidate = 10;
