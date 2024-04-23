import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

async function LeoSpace() {
  const query2 = groq`
*[_type == "Themes"] {
  _id,
  _createdAt,
  number,
  content1,
  content2,
  content3,
  theme1,
  "image": image1.asset->url
} | order(number asc)
`;

  const theme = await client.fetch(query2);


  return (
    <div>
      <div>
        <div>
          <h5 className="font-semibold text-xl tracking-widest text-center">
            Theme {theme[0].number}
          </h5>
          <h2 className="font-bold text-3xl text-center">{theme[0].theme1}</h2>
        </div>
        <div className="flex-col gap-4 mt-8">
          <h4>
            {theme[0].content1}
          </h4>
          <div>
            <div className="themeContent py-8">
              <div className="w-[100%] lg:[50%]">
                <h4>
                  {theme[0].content2}
                </h4>
              </div>
              <div>
                <Image
                  src={theme[0].image}
                  alt=""
                  className="themeImage pl-0 lg:pl-5 pt-6"
                  height={400}
                  width={500}
                />
              </div>
            </div>
          </div>

          <h4>
            {theme[0].content3}
          </h4>
        </div>
        <div className="w-[100%] my-6 flex gap-5 justify-center">
          <Link
            href={"/about"}
            className=" flex hover:scale-105 hover:transition-all gap-8 items-center border-2 border-sky-950 px-7 py-3 rounded-full justify-between "
          >
            <FaArrowLeft />
            <h3 className="font-semibold">Back</h3>
          </Link>
          <Link
            href={"/theme/healthcare"}
            className="flex hover:scale-105 hover:transition-all gap-8 items-center border-2 border-sky-950 px-7 py-3 rounded-full justify-between "
          >
            <h3 className=" font-semibold">Theme 2</h3>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 10;

export default LeoSpace;
