import Image from "next/image"
import { Clock } from 'lucide-react';
import BlogCard from "../BlogCard";

const Latest = () => {
  return (
    <div className="mx-auto max-w-[1000px] mt-10 text-white px-2">
        {/* Heading */}
        <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">LATEST</h1>

        {/* Big Box */}
        <div className="mt-6 flex flex-col md:flex-row gap-5 lg:gap-14">
            {/* Blog Image */}
            <div className="min-w-[300px] max-w-[500px] h-auto lg:h-[370px] mx-auto w-full">
                <Image src={"/1.png"} alt="Blog Image" width={500} height={500} className="object-cover w-full h-full rounded-xl"></Image>
            </div>
            {/* Blog Description */}
            <div className="px-2 flex flex-col items-center md:items-start">
              <h3 className="text-3xl">How I created a chess subscription
              application.</h3>
              <p className="mt-2">12 July 2022</p>
              {/* Tags */}
              <div className="flex items-center gap-2 mt-2">
                <p className="text-[#9BB848]">#javascript</p>
                <p className="text-[#48B8AA]">#nextjs</p>
                <p className="text-[#B89F48]">#stripe</p>
              </div>
              <p className="mt-6 text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis.Nunc pharetra orci tellus. Nulla facilisi.</p>
              <div className="flex items-center gap-3 mt-6 md:mt-12">
                <Clock />
                <span className="font-bold">5-7 minutes read</span>
              </div>
            </div>
        </div>

        {/* Multiple Boxes */}
        <div className="mt-14 flex flex-wrap justify-center gap-4 lg:gap-12">
          <BlogCard 
            name="Javascript TDD with VITE and NextJS"
            tags={["javascript","nextjs","stripe"]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis."
            uploadDate="12 July 2022"
            readTime="5-7 minutes read"
            />
                      <BlogCard 
            name="Javascript TDD with VITE and NextJS"
            tags={["javascript","nextjs","stripe"]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis."
            uploadDate="12 July 2022"
            readTime="5-7 minutes read"
            />
                      <BlogCard 
            name="Javascript TDD with VITE and NextJS"
            tags={["javascript","nextjs","stripe"]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis."
            uploadDate="12 July 2022"
            readTime="5-7 minutes read"
            />  
        </div>
    </div>
  )
}

export default Latest