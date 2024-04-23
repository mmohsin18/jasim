import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <div>
        <h2 className="font-bold text-xl py-5">Welcome to EM-RFMic Engineering Research Group at Cardiff Metropolitan University</h2>
        <p className="font-regular">
          The Electromagnetics, RF and Microwaves Engineering Research Group at
          Cardiff Metropolitan University is internationally recognized for its
          leadership in the research field. The aim of the Electromagnetics, RF
          and Microwave (EM-RFMIC) Engineering Research Group at Cardiff
          Metropolitan University is to engage in high-quality research fields,
          with the purpose of advancing knowledge, fostering innovation,
          promoting collaboration, and developing practical applications. The
          group focuses on conducting cutting-edge research that pushes the
          boundaries of Electromagnetics, RF, and Microwave Engineering. In
          addition, the group strives to foster innovation by developing novel
          solutions and technologies. Actively seeking to create practical
          applications based on the research findings, enabling advancements in
          health care, wireless communication systems, and Space technologies.
        </p>
      </div>
      <div className="pb-11">
        <h3 className="font-bold text-xl flex items-center justify-center py-6">
          Collaboration Partners
        </h3>
        <div className=" flex items-center justify-evenly">
          <Image
            className="h-5 md:h-11"
            src="https://i.postimg.cc/ZnJmbk0W/logo-svg.png"
            alt=""
          />
          <Image
            className="h-5 md:h-16"
            src="https://i.postimg.cc/D0Tt1mJC/logo-svg-2.png"
            alt=""
          />
          <Image
            className="h-5 md:h-16"
            src="https://i.postimg.cc/G2P05cd4/queenmary-removebg-preview.png"
            alt=""
          />
          <Image
            className="h-5 md:h-16 px-7"
            src="https://i.postimg.cc/tgt207nG/greenlogo.png"
            alt=""
          />
          <Image
            className="h-5 md:h-11"
            src="https://i.postimg.cc/vT1rmmTB/uthm.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default page;
