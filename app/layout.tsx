import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr Jasim Uddin",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-200 py-6">
        <nav className="mb-4 px-7">
            {/* <div className="pb-4">
                <img className="h-64 w-screen object-cover" src="https://i.postimg.cc/ZRVnC9qS/research.png" alt="" />
            </div> */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold pb-5 text-center text-sky-950">EM-RFMIC Engineering Research Group</h1>
              <h2 className="text-xl md:text-2xl font-bold">Cardiff Metropolitan University</h2>
              <h3 className="md:text-xl font-semibold">Cardiff School of Technologies</h3>
              <i>Delivering Wales leadership in the areas of RF, Microwave and Electromagnetics Engineering to drive innovation in Healthcare and Space Systems</i>
            </div>
        </nav>
        <div className='w-screen flex flex-col md:flex-row justify-start'>
          <div className='w-full mb-3 py-3 items-center h-16 md:h-fit md:w-[20%] gap-5 overflow-x-auto flex md:flex-col px-7'>
            <a href='/' className=' w-fit h-fit font-semibold px-7 hover:scale-110 transition-all ease-in-out py-3 border-2 border-slate-950 rounded-full'>Home</a>
            <a href='/about' className='w-fit h-fit whitespace-nowrap font-semibold px-7 hover:scale-110 transition-all ease-in-out py-3 border-2 border-slate-950 rounded-full'>About Us</a>
            <a href='/people' className=' w-fit h-fit font-semibold px-7 hover:scale-110 transition-all ease-in-out py-3 border-2 border-slate-950 rounded-full'>People</a>
            <a href='/publications' className=' w-fit h-fit font-semibold px-7 hover:scale-110 transition-all ease-in-out py-3 border-2 border-slate-950 rounded-full'>Publications</a>
            <a href='/openings' className=' w-fit h-fit font-semibold px-7 hover:scale-110 transition-all ease-in-out py-3 border-2 border-slate-950 rounded-full'>Openings</a>
          </div>
          <div className=' md:w-[70%] mx-7'>{children}</div>
      </div>
      </body>
    </html>
  );
}
