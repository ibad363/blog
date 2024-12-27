import Image from "next/image"
import { Clock ,UserPen} from 'lucide-react';

function Blog() {
  return (
    <div className="max-w-[1000px] mx-auto px-3">
        {/* Main Image */}
        <div className="max-w-[1000px] h-[300px] mx-auto mt-[60px]">
            <Image src={"/web-dev1.jfif"} alt="" width={950} height={300} className="object-fill w-full h-full rounded"></Image>
        </div>

        {/* Description*/}
        <div className="max-w-[600px] mx-auto">
            {/* Heading */}
            <h1 className="font-bold text-[28px] md:text-[32px] text-center md:text-left mt-7">Why TypeScript is the Better Choice over JavaScript</h1>

            {/* tags etc */}
            <div className="flex items-center flex-col sm:flex-row gap-3 justify-between mt-4">
                {/* Tags */}
                <div className="flex items-center gap-2 mt-2">
                    <p className="text-[#9BB848]">#javascript</p>
                    <p className="text-[#48B8AA]">#nextjs</p>
                    <p className="text-[#B89F48]">#stripe</p>
                </div>

                <div className="flex gap-2">
                    <div className='flex items-center gap-2'>
                        <UserPen />
                        <span>{"Ibad ur Rehman"}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Clock />
                        <span>{"12 July 2022"}</span>
                    </div>

                </div>
            </div>

              <p className="mt-6 text-justify">As a developer, you want to write code that is not only functional, but also easy to maintain and extend. This is where TypeScript comes in. While JavaScript is the most popular programming language in the world, TypeScript offers several advantages that make it a better choice for many projects. <br /><br />

                  First and foremost, TypeScript is a typed language, which means that variables have a specific type (such as string, number, or boolean) and the compiler will check for type errors at compile time. This makes it easier to catch errors early on and prevents runtime exceptions, saving you time and frustration.<br /><br />

                  In addition, TypeScript has a rich type system that allows you to define interfaces, classes, and other advanced types that make your code more organized and self-documenting. This not only improves the readability of your code, but also makes it easier for other developers to understand and work with.<br /><br />

                  Another advantage of TypeScript is that it is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. This means that you can gradually introduce TypeScript into your existing JavaScript codebase, and take advantage of its features as needed. You can also use the TypeScript compiler to convert your TypeScript code into plain JavaScript that can run in any modern browser or runtime.<br /><br />

                  In conclusion, while JavaScript will always have its place in the world of programming, TypeScript offers many compelling benefits that make it a better choice for large and complex projects. With its strong typing, advanced type system, and seamless integration with JavaScript, TypeScript can help you write more maintainable and scalable code. If you're not already using TypeScript, it's definitely worth considering for your next project.<br /><br />

                  Here's an example of how TypeScript can provide benefits over JavaScript:</p>

              <Image src={"/2.png"} alt="" width={620} height={300} className="object-fill w-full h-full rounded"></Image>

              <p className="mt-6 text-justify">In the TypeScript version of the code, we've defined the types of the a and b arguments as number, which means that the TypeScript compiler will only allow values of the number type to be passed to the sum function. If we try to pass a string value like in the JavaScript code, the compiler will throw an error and prevent us from running the code. This type-checking can help us catch errors early on and prevent runtime exceptions. <br /><br />

                In addition, the TypeScript version of the code is easier to read and understand, thanks to the type annotations. Other developers can quickly see what type of values the sum function expects, and use that information to avoid making mistakes when calling the function. <br /><br />

                Overall, TypeScript can provide better type-safety and improved readability compared to JavaScript.</p>

            
        </div>
    </div>
  )
}

export default Blog