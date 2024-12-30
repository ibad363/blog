import Image from "next/image"
import BlogCard from "../components/BlogCard"
import NewsLetter from "../components/NewsLetter"

function About() {
  return (
    <div className=" mt-[60px] mb-[100px]">
    {/* About Section */}
    <div className="max-w-[600px] mx-auto px-3">
      {/* Heading */}
      <h1 className="font-bold text-4xl md:text-5xl text-center">ABOUT ME</h1>

      {/* Paragraph*/}
      <p className="mt-12 text-center sm:text-start">
        Hi there! I'm the brains behind this technical programming blog, where I share my passion for all things JavaScript.
        Whether you're a seasoned veteran or a total beginner, you'll find something to love on my blog.
        I cover a wide range of topics, from the latest language features and frameworks, to tips and tricks for writing clean
        and efficient code. <br /><br />

        When I'm not coding, you can find me tinkering with new technologies, reading up on the latest trends,
        or hiking in the great outdoors. I'm always on the lookout for new challenges and opportunities to learn and grow,
        and I can't wait to share my journey with you. So come on in, grab a cup of coffee, and let's dive into the world of
        JavaScript together! <br /><br />

        Also, that’s how the AI sees me.
      </p>

      {/* Image */}
      <Image src={"/ibad.png"} alt="Blog Image" width={300} height={300} className="object-cover mx-auto h-[306px] rounded-xl mt-12"></Image>

      <h1 className="font-bold text-4xl md:text-5xl text-center mt-20">THINGS I LIKE</h1>
      <div className="flex flex-wrap justify-center max-w-[321px] mx-auto gap-5 mt-4">
        <p className="text-[#E85A5A]">#typescript</p>
        <p className="text-[#E8D95A]">#javascript</p>
        <p className="text-[#E8AF5A]">#nextjs</p>
        <p className="text-[#7FE85A]">#reactjs</p>
        <p className="text-[#5AE8CE]">#sanity</p>
        <p className="text-[#CB5AE8]">#tailwind css</p>
      </div>

      <p className="mt-9 text-center sm:text-start">As a full-stack developer, I was always on the lookout for the latest and greatest tools to help me build killer web apps. After hours of research and countless experiments, I finally settled on using React, TypeScript, and NextJS in my projects.With React, I was able to whip up user interfaces faster than a rat in a maze. TypeScript, on the other hand, kept my code clean and error-free, like a freshly-mopped floor. <br /> <br />

      NextJS, meanwhile, allowed me to build blazing fast web apps that were as scalable as a rubber band. It was like having a superpower that let me conquer any project that came my way. <br /> <br />

      Overall, using React, TypeScript, and NextJS in my development projects made me feel like a superhero, ready to take on any challenge and build the most amazing web apps the world has ever seen.</p>
    </div>

    {/* Blogs Section*/}
    <div className="max-w-[1000px] mx-auto mt-20">
      <h1 className="font-bold text-4xl md:text-5xl text-center md:text-start">FROM THE BLOG</h1>
      
      <div className="mt-10 mb-20 flex flex-wrap md:flex-nowrap md:justify-start justify-center gap-4 lg:gap-12">
          {/* <BlogCard 
            name="Javascript TDD with VITE and NextJS"
            tags={["javascript","nextjs","stripe"]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis."
            author="Ibad ur Rehman"
            uploadDate="12 July 2022"
            category="A.I"
            />
                      <BlogCard 
            name="Javascript TDD with VITE and NextJS"
            tags={["javascript","nextjs","stripe"]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis."
            author="Ibad ur Rehman"
            uploadDate="12 July 2022"
            category="Web Dev"
            />
                      <BlogCard 
            name="Javascript TDD with VITE and NextJS"
            tags={["javascript","nextjs","stripe"]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis."
            author="Ibad ur Rehman"
            uploadDate="12 July 2022"
            category="App Dev"
            />   */}
      </div>

      <NewsLetter/>
      
    </div>
    </div>
  )
}

export default About