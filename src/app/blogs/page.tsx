import { Button } from "@/components/ui/button";
import BlogCard from "../components/BlogCard"
import {  urlFor as sanityUrlFor  } from '@/sanity/lib/image';
import Link from "next/link";


const Blogs = () => {
  return (
    <div className="mx-auto max-w-[1000px] mt-10 px-3">
      {/* A.I */}
      <div>
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">Artficial Intelligence</h1>
          <Link href={"/blogs/ai"}><Button variant={"link"} className='text-white mt-4 sm:mt-0 text-xl'>Show All Related Blogs</Button></Link>
        </div>
        
        {/* Multiple Blogs */}
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 md:justify-start justify-center gap-4 lg:gap-8">

        </div>
      </div>

      {/* Web Dev */}
      <div>
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">Web Developement</h1>
          <Link href={"/blogs/web-dev"}><Button variant={"link"} className='text-white mt-4 sm:mt-0 text-xl'>Show All Related Blogs</Button></Link>
        </div>
        
        {/* Multiple Blogs */}
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 md:justify-start justify-center gap-4 lg:gap-8">
          
        </div>
      </div>

      {/* App Dev */}
      <div>
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">App Developement</h1>
          <Link href={"/blogs/app-dev"}><Button variant={"link"} className='text-white mt-4 sm:mt-0 text-xl'>Show All Related Blogs</Button></Link>
        </div>
        
        {/* Multiple Blogs */}
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 md:justify-start justify-center gap-4 lg:gap-8">
          
        </div>
      </div>
    </div>
  )
}

export default Blogs