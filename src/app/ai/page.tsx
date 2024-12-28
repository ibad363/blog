import BlogCard from "../components/BlogCard"

function WebDev() {
  return (
    <div className="mx-auto max-w-[1000px] mt-10 px-3">
      {/* Heading */}
      <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">Artificial Intelligence</h1>
    
      {/* All Blogs */}
      <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 md:justify-start justify-center gap-4 lg:gap-8">
      <BlogCard 
            name="Javascript TDD with VITE and NextJS"
            tags={["javascript","nextjs","stripe"]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis."
            author="Ibad ur Rehman"
            uploadDate="12 July 2022"
            category="A.I"
            />

      </div>
    </div>
  )
}

export default WebDev