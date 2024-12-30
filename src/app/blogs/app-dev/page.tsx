import { client } from "@/sanity/lib/client"
import BlogCard from "../../components/BlogCard"

async function AppDev() {
  const blogs = await client.fetch(`*[_type == "blog" && category == "app-dev"] {
    title,
    shortDescription,
    mainImage,
    tags,
    authorName,
    uploadDate,
    category,
    comments,
    _id
  }`,{},{cache: "no-store"})

  return (
    <div className="mx-auto max-w-[1000px] mt-10 px-3">
      {/* Heading */}
      <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">App Developement</h1>
    
      {/* All Blogs */}
      <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 md:justify-start justify-center gap-4 lg:gap-8">
      {blogs.map((blog:any)=>(
          <BlogCard
          key={blog._id}
          image={blog.mainImage}
          title={blog.title}
          tags={blog.tags}
          shortDesc={blog.shortDescription}
          author={blog.authorName}
          uploadDate={blog.uploadDate}
          category={blog.category}
          id={blog._id}
          />
        ))}

      </div>
    </div>
  )
}

export default AppDev