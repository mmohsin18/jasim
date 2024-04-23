import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";

async function Jasim() {

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
*[_type == "JasimImg"] {
  _id,
  _createdAt,
  title,
  "image": image.asset->url,
  "image2": image2.asset->url


} | order(_createdAt asc)`;

const posts = await client.fetch(query);
const jasimimg = await client.fetch(query2);

  return (
    <div>
      <div>
        <div>
          <div className="py-4">
            <Image src={posts[0].image} width={160} className="rounded-lg" height={400} alt={""} />
            <h2 className="text-sky-950 font-bold text-2xl py-1">{posts[0].title}</h2>
            <h2 className="text-[1rem]">{posts[0].post}</h2>
          </div>
          <div className="flex gap-5">
            <div className="w-[100%] lg:w-[60%]">
              <h3 className="text-justify">
                Dr Jasim is a globally recognised extensive research portfolio in
                the areas of RF & Microwave Engineering, Electromagnetics, and
                Metamaterials. He applies his expertise to a diverse range of
                practical applications, including healthcare, defence & space
                technologies, energy harvesting, and wireless communication. Dr.
                Jasim holds the prestigious position of a senior member in IEEE and
                also an active member of IET. He is also recognized and honored as a
                distinguished Fellow of advanced HE. He has been endorsed as a
                leader by UK Royal Academy of Engineering (RAE). Throughout his
                career, Dr. Jasim has overseen numerous international projects in
                collaboration with various institutions from Australia, Malaysia,
                Canada, and Bangladesh in diverse disciplines including
                metamaterials, radio frequency (RF), and microwaves. Currently, he
                serves as the Program Director in Electronics and Computer Systems
                Engineering (ECSE) and Robotics Engineering (RE). He actively
                contributes to the academic community as a member of the
                accreditation panel committee for Cardiff School of Technologies
                (CST). Dr. Jasim serves as an External Examiner for the MEng program
                at Lancaster University. Dr. Jasim`&apos;`s expertise is further recognized
                through his role as a special issue editor in the Symmetry journal,
                specifically in the area of `&apos;`Advancements in Energy Harvesting,
                Metamaterials, and their Integrated Multifunctional Systems`&apos;`. His
                involvement in numerous IEEE international conferences is evident as
                he holds positions of great responsibility, including technical
                program committee (TPC) chair, organizing committee chair, and
                session chair. Dr. Jasim`&apos;`s remarkable contributions are clearly
                demonstrated by his authorship or co-authorship of over 50
                publications, which have received prominent recognition in esteemed
                journals, conferences, and book chapters.
              </h3>
            </div>
            <div className="pl-6">
              <Image src={jasimimg[0].image} width={500} height={400} alt={""} />
              <Image src={jasimimg[0].image2} className="mt-12" width={500} height={400} alt={""} />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Jasim;
