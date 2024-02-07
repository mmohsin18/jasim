import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

function page() {
  return (
    <div>
      <div className="py-5">
        <h3 className="font-bold text-sky-950  text-2xl pb-5">Openings</h3>
        <p>
          At our group, we present a diverse selection of stimulating research
          topics that are ideal for student projects. These topics cater to
          various academic levels including BEng, MEng, MEng by research, and
          PhD study levels. Our aim is to tailor these projects to align with
          your individual background and interests, ensuring an engaging and
          fulfilling academic experience.
        </p>
      </div>
      <div className="py-5">
        <h3 className="font-bold text-sky-950 text-2xl pb-5">Contact us</h3>
        <p>
            If you are enthusiastic and motivated students and interested exploring Electromagnetics, RF and Microwave Engineering research, please contact to the Group leader, Dr Jasim Uddin.
        </p>
        <div className="pl-7 pt-6">
            <h2 className="font-bold text-[18px]">Dr Jasim Uddin</h2>
            <h4>EM-RFMic Group Leader</h4>
            <div className="flex items-center gap-3">
                <IoMailOutline className="text-xl" />
                <a href="mailto:juddin@cardiffmet.ac.uk">juddin@cardiffmet.ac.uk</a>
            </div>
        </div>
      </div>
      <div className=" pb-8">
          <h3 className="font-bold text-sky-950 text-2xl pb-5">Resources</h3>
            <div className="flex items-center justify-start gap-6 pl-28 pb-6">
                <FaCircle className="text-[10px]" />
                <a href="https://www.leverhulme.ac.uk/" className="text-xl font-semibold hover:tracking-wider border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:scale-110 transition-all ease-in-out">Leverhulme Trust</a>
            </div>
            <div className="flex items-center justify-start gap-6 pl-28 pb-6">
                <FaCircle className="text-[10px]" />
                <a href="https://royalsociety.org/grants-schemes-awards/grants/" className="text-xl font-semibold hover:tracking-wider border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:scale-110 transition-all ease-in-out">The Royal Society</a>
            </div>
            <div className="flex items-center justify-start gap-6 pl-28 pb-6">
                <FaCircle className="text-[10px]" />
                <a href="https://funding.cymru/" className="text-xl font-semibold hover:tracking-wider border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:scale-110 transition-all ease-in-out">Funding Wales</a>
            </div>
            <div className="flex items-center justify-start gap-6 pl-28 pb-6">
                <FaCircle className="text-[10px]" />
                <a href="https://www.britishcouncil.org/education/he-science/going-global-partnerships/funding-calls-opportunities" className="text-xl font-semibold hover:tracking-wider border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:scale-110 transition-all ease-in-out">British Council</a>
            </div>
            <div className="flex items-center justify-start gap-6 pl-28 pb-6">
                <FaCircle className="text-[10px]" />
                <a href="https://www.ukri.org/opportunity/" className="text-xl font-semibold hover:tracking-wider border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:scale-110 transition-all ease-in-out">UKRI</a>
            </div>
      </div>
    </div>
  );
}

export default page;
