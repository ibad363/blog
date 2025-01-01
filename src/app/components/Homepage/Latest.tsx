import Image from "next/image"
import { UserPen } from 'lucide-react';
import BlogCard from "../BlogCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const Latest = async () => {
  const blogs = await client.fetch(`*[_type == "blog"] | order(uploadDate desc)[0...4] {
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
        {/* Heading */}
        <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">LATEST</h1>

        {/* Big Box */}
        {blogs.length > 0 && (
        <div className="mt-6 flex flex-col md:flex-row gap-5 lg:gap-14">
            {/* Blog Image */}
            <div className="md:min-w-[400px] max-w-[500px] h-auto lg:h-[370px] mx-auto w-full hover:scale-105 duration-300 transition-all">
                <Image src={urlFor(blogs[0].mainImage).url()} alt="Blog Image" width={500} height={500} className="object-center w-full h-full rounded-xl"></Image>
            </div>
            {/* Blog Description */}
            <div className="px-2 md:px-0 flex flex-col items-center md:items-start">
              <h3 className="text-3xl">{blogs[0].title}</h3>
              <p className="mt-2">{blogs[0].uploadDate}</p>
              {/* Tags */}
              <div className="flex items-center gap-2 mt-2">
                <p className="text-[#9BB848]">#{blogs[0].tags[0]}</p>
                <p className="text-[#48B8AA]">#{blogs[0].tags[1]}</p>
                <p className="text-[#B89F48]">#{blogs[0].tags[2]}</p>
              </div>
              <p className="mt-6 text-center md:text-left leading-loose">{blogs[0].shortDescription}</p>

              <div className="flex items-center gap-6 mt-4">
                <div className='flex items-center gap-3'>
                  <UserPen />
                  <span>{blogs[0].authorName}</span>
                </div>
                <span className='pr-4'>{blogs[0].category}</span>
              </div>
              <Link href={`/blogs/${blogs[0]._id}`}><Button variant={"link"} className='text-white text-lg p-0 mt-4'>Read More</Button></Link>
            </div>
        </div>
        )}

        {/* Multiple Boxes */}
        <div className="mt-14 flex flex-wrap md:flex-nowrap md:justify-start justify-center gap-4 lg:gap-12">
          {blogs.slice(1).map((blog:any)=>(
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
  )
}

export default Latest