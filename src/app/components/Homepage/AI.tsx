import Image from "next/image"
import { Clock, UserPen } from 'lucide-react';
import BlogCard from "../BlogCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AI = () => {
  return (
    <div className="mx-auto max-w-[1000px] mt-20 px-3">
        {/* Heading */}
        <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">ARTIFICIAL INTELLIGENCE</h1>

        {/* Big Box */}
        <div className="mt-12 flex flex-col md:flex-row gap-5 lg:gap-14">
            {/* Blog Description */}
            <div className="px-2 md:px-0 flex flex-col items-center md:items-start">
              <h3 className="text-3xl text-center md:text-start">How I created a chess subscription
              application.</h3>
              <p className="mt-2">12 July 2022</p>
              {/* Tags */}
              <div className="flex items-center gap-2 mt-2">
                <p className="text-[#9BB848]">#javascript</p>
                <p className="text-[#48B8AA]">#nextjs</p>
                <p className="text-[#B89F48]">#stripe</p>
              </div>
              <p className="mt-6 text-center md:text-left leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis.Nunc pharetra orci tellus. Nulla facilisi.</p>
              <div className="flex items-center gap-6 mt-4">
                <div className='flex items-center gap-3'>
                  <UserPen />
                  <span>{"author"}</span>
                </div>
                <span className='pr-4'>{"WeB dev"}</span>
              </div>
              <Link href={"/web-dev/b1"}><Button variant={"link"} className='text-white text-lg p-0 mt-4'>Read More</Button></Link>
            </div>
            {/* Blog Image */}
            <div className="md:min-w-[400px] max-w-[500px] h-auto lg:h-[370px] mx-auto w-full hover:scale-105 duration-300 transition-all">
                <Image src={"/1.png"} alt="Blog Image" width={500} height={500} className="object-cover w-full h-full rounded-xl"></Image>
            </div>
        </div>

        {/* Multiple Boxes */}
        <div className="mt-14 flex flex-wrap md:flex-nowrap md:justify-start justify-center gap-4 lg:gap-12">
          {/* <BlogCard 
            name="Javascript TDD with VITE and NextJS"
            tags={["javascript","nextjs","stripe"]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis."
            uploadDate="12 July 2022"
            category="A.I"
            />
                      <BlogCard 
            name="Javascript TDD with VITE and NextJS"
            tags={["javascript","nextjs","stripe"]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis."
            uploadDate="12 July 2022"
            category="A.I"
            />
                      <BlogCard 
            name="Javascript TDD with VITE and NextJS"
            tags={["javascript","nextjs","stripe"]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis."
            uploadDate="12 July 2022"
            category="A.I"
            />   */}
        </div>
    </div>
  )
}

export default AI