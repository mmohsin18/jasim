import React from "react";
import { FaCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function page() {
  return (
    <div>
      <h6>
        EM-RFMic research group was established by Dr. Jasim Uddin in mid 2023,
        and operates within the Centre for Engineering Research Intelligent
        Sensors and Systems (CeRISS). The group is primarily focuses in three
        key areas of research: Space Satellite Communication, healthcare
        technologies, and Terrestrial 5G technologies and Intelligent surface.
        The overall goal is to actively contribute to Wales advancement by
        positively impacting the community, leveraging expertise, and strive to
        deliver cutting-edge solutions that drive progress and enhance the
        quality of life and create a brighter future for everyone.
      </h6>
      <h5 className="py-4 font-bold text-xl mt-6">Research Themes:</h5>
      <div className="flex flex-col gap-5 px-3 md:px-28">
        <div className="flex items-center gap-4">
            <FaCircle className="text-[10px]" />
            <a href="/theme/Leo-Space" className="flex items-center gap-2 hover:scale-125 hover:pl-8 transition-all ease-in-out">
              <h6 className="font-regular hover:font-medium">LEO Space Satellite Communication </h6>
              <FaArrowRight className="text-sm" />
            </a>
        </div>
        <div className="flex items-center gap-4">
            <FaCircle className="text-[10px]" />
            <a href="/theme/healthcare" className="flex items-center gap-2 hover:scale-125 hover:pl-6 transition-all ease-in-out">
              <h6 className="font-regular hover:font-medium">Healthcare Technologies </h6>
              <FaArrowRight className="text-sm" />
            </a>
        </div>
        <div className="flex items-center gap-4">
            <FaCircle className="text-[10px]" />
            <a href="/theme/5g-technology" className="flex items-center gap-2 hover:scale-125 hover:pl-11 transition-all ease-in-out">
              <h6 className="font-regular hover:font-medium">Terrestrial 5G technologies and Intelligent surface </h6>
              <FaArrowRight className="text-sm" />
            </a>
        </div>
      </div>
    </div>
  );
}

export default page;
