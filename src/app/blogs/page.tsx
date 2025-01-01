import { Button } from "@/components/ui/button";
import BlogCard from "../components/BlogCard"
import {  urlFor } from '@/sanity/lib/image';
import Link from "next/link";
import { client } from "@/sanity/lib/client";


const Blogs = async () => {
  const webDevBlogs = await client.fetch(`*[_type == "blog" && category == "web-dev"] | order(uploadDate desc)[0...3] {
    title,
    shortDescription,
    mainImage,
    tags,
    authorName,
    uploadDate,
    category,
    _id
  }`,{},{cache: "no-store"})
  const appDevBlogs = await client.fetch(`*[_type == "blog" && category == "app-dev"] | order(uploadDate desc)[0...3] {
    title,
    shortDescription,
    mainImage,
    tags,
    authorName,
    uploadDate,
    category,
    _id
  }`,{},{cache: "no-store"})
  const aiBlogs = await client.fetch(`*[_type == "blog" && category == "ai"] | order(uploadDate desc)[0...3]  {
    title,
    shortDescription,
    mainImage,
    tags,
    authorName,
    uploadDate,
    category,
    _id
  }`,{},{cache: "no-store"})
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
          {aiBlogs.map((blog: any) => (
            <BlogCard
              key={blog._id}
              title={blog.title}
              image={blog.mainImage}
              shortDesc={blog.shortDesc}
              author={blog.authorName}
              uploadDate={blog.uploadDate}
              tags={blog.tags}
              category={blog.category}
              id={blog._id}
            />
          ))}
        </div>
      </div>

      {/* Web Dev */}
      <div>
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-10">
          <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">Web Developement</h1>
          <Link href={"/blogs/web-dev"}><Button variant={"link"} className='text-white mt-4 sm:mt-0 text-xl'>Show All Related Blogs</Button></Link>
        </div>
        
        {/* Multiple Blogs */}
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 md:justify-start justify-center gap-4 lg:gap-8">
        {webDevBlogs.map((blog: any) => (
            <BlogCard
              key={blog._id}
              title={blog.title}
              image={blog.mainImage}
              shortDesc={blog.shortDesc}
              author={blog.authorName}
              uploadDate={blog.uploadDate}
              tags={blog.tags}
              category={blog.category}
              id={blog._id}
            />
          ))}
        </div>
      </div>

      {/* App Dev */}
      <div>
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-10">
          <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">App Developement</h1>
          <Link href={"/blogs/app-dev"}><Button variant={"link"} className='text-white mt-4 sm:mt-0 text-xl'>Show All Related Blogs</Button></Link>
        </div>
        
        {/* Multiple Blogs */}
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 md:justify-start justify-center gap-4 lg:gap-8">
        {appDevBlogs.map((blog: any) => (
            <BlogCard
              key={blog._id}
              title={blog.title}
              image={blog.mainImage}
              shortDesc={blog.shortDesc}
              author={blog.authorName}
              uploadDate={blog.uploadDate}
              tags={blog.tags}
              category={blog.category}
              id={blog._id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs