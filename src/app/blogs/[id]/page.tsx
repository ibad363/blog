import Image from "next/image"
import { Clock ,UserPen} from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NewsLetter from "@/app/components/NewsLetter";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import CommentSection from "@/app/components/CommentSection";
import BlogCard from "@/app/components/BlogCard";



async function Blog({params} : {params: {id: string}}) {
    const blog = await fetchBlog(params.id)

  if (!blog) {
    return <div className="text-center mt-6 text-2xl">Loading...</div>;
  }

  return (
    <div className="max-w-[1000px] mx-auto px-3">
        {/* Main Image */}
        <div className="max-w-[1000px] h-[300px] mx-auto mt-[60px]">
            <Image src={urlFor(blog.mainImage).url()} alt="" width={950} height={300} className="object-fill w-full h-full rounded"></Image>
        </div>

        {/* Description*/}
        <div className="max-w-[600px] mx-auto">
            {/* Heading */}
            <h1 className="font-bold text-[28px] md:text-[32px] text-center md:text-left mt-7">{blog.title}</h1>

            {/* tags etc */}
            <div className="flex items-center flex-col sm:flex-row gap-3 justify-between mt-4">
                {/* Tags */}
                <div className="flex items-center gap-2 mt-2">
                    <p className="text-[#9BB848]">#{blog.tags[0]}</p>
                    <p className="text-[#48B8AA]">#{blog.tags[1]}</p>
                    <p className="text-[#B89F48]">#{blog.tags[2]}</p>
                </div>

                <div className="flex gap-2">
                    <div className='flex items-center gap-2'>
                        <UserPen />
                        <span>{blog.authorName}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Clock />
                        <span>{blog.uploadDate}</span>
                    </div>

                </div>
            </div>

              <p className="mt-6 text-justify">As a developer, you want to write code that is not only functional, but also easy to maintain and extend. This is where TypeScript comes in. While JavaScript is the most popular programming language in the world, TypeScript offers several advantages that make it a better choice for many projects. <br /><br />

                  First and foremost, TypeScript is a typed language, which means that variables have a specific type (such as string, number, or boolean) and the compiler will check for type errors at compile time. This makes it easier to catch errors early on and prevents runtime exceptions, saving you time and frustration.<br /><br />

                  In addition, TypeScript has a rich type system that allows you to define interfaces, classes, and other advanced types that make your code more organized and self-documenting. This not only improves the readability of your code, but also makes it easier for other developers to understand and work with.<br /><br />

                  Another advantage of TypeScript is that it is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. This means that you can gradually introduce TypeScript into your existing JavaScript codebase, and take advantage of its features as needed. You can also use the TypeScript compiler to convert your TypeScript code into plain JavaScript that can run in any modern browser or runtime.<br /><br />

                  In conclusion, while JavaScript will always have its place in the world of programming, TypeScript offers many compelling benefits that make it a better choice for large and complex projects. With its strong typing, advanced type system, and seamless integration with JavaScript, TypeScript can help you write more maintainable and scalable code. If you're not already using TypeScript, it's definitely worth considering for your next project.<br /><br />

                  Here's an example of how TypeScript can provide benefits over JavaScript:</p>

              <Image src={"/2.png"} alt="" width={620} height={300} className="object-fill w-full h-full rounded mt-3"></Image>

              <p className="mt-6 text-justify">In the TypeScript version of the code, we've defined the types of the a and b arguments as number, which means that the TypeScript compiler will only allow values of the number type to be passed to the sum function. If we try to pass a string value like in the JavaScript code, the compiler will throw an error and prevent us from running the code. This type-checking can help us catch errors early on and prevent runtime exceptions. <br /><br />

                In addition, the TypeScript version of the code is easier to read and understand, thanks to the type annotations. Other developers can quickly see what type of values the sum function expects, and use that information to avoid making mistakes when calling the function. <br /><br />

                Overall, TypeScript can provide better type-safety and improved readability compared to JavaScript.</p>

                <Image src={"/2.png"} alt="" width={620} height={300} className="object-fill w-full h-full rounded mt-3"></Image>

              <p>In the above JavaScript code, the sum function accepts two arguments and returns their sum. However, the function is not type-safe, which means that it will allow you to pass arguments of any type. In this case, we're passing a number and a string, which results in the concatenation of the two values. <br />
                  This can be a common source of errors, especially in larger codebases.
                  <br /><br />
                  Here's the same code written in TypeScript:</p>

                <Image src={"/2.png"} alt="" width={620} height={300} className="object-fill w-full h-full rounded mt-3"></Image>

              <p>In the TypeScript version of the code, we've defined the types of the a and b arguments as number, which means that the TypeScript compiler will only allow values of the number type to be passed to the sum function. If we try to pass a string value like in the JavaScript code, the compiler will throw an error and prevent us from running the code. This type-checking can help us catch errors early on and prevent runtime exceptions. <br /><br />
                  In addition, the TypeScript version of the code is easier to read and understand, thanks to the type annotations. Other developers can quickly see what type of values the sum function expects, and use that information to avoid making mistakes when calling the function.
                   <br /><br />
                  Overall, TypeScript can provide better type-safety and improved readability compared to JavaScript.</p>

                  <CommentSection/>
        </div>

        {/* Similar Posts */}
        <div className="max-w-[1000px] mx-auto px-3">
            {/* Heading */}
            <h1 className="font-bold mt-24 text-4xl md:text-5xl text-center md:text-left">SIMILAR POSTS</h1>

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
                author="Ibad ur Rehman"
                uploadDate="12 July 2022"
                category="A.I"
                />
                 */}

            </div>
        </div>

        <NewsLetter/>
    </div>
  )
}

export async function generateStaticParams() {
    const blogs = await client.fetch(`*[_type == "blog"]{_id}`)
    return blogs.map((blog: any) => {
        id: blog._id
    })
}

export async function fetchBlog(id:string){
    const blog = await client.fetch(`*[_type == "blog" && _id == $id]`, {id})
    console.log("Fetched Blog:", blog);
    return blog[0]
}

export default Blog