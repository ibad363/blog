import Image from 'next/image'
import { Clock ,UserPen} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';


function BlogCard({image,title,shortDesc,tags,author,uploadDate,category,id}:{image:any,title: string,shortDesc :string, tags: string[],author?:string, uploadDate: string, category: string,id:string}) {

    return (
    <div className="max-w-[310px] w-full p-1 flex flex-col hover:scale-105 duration-300 transition-all">
        <Image src={urlFor(image).url()} alt={title || "Blog Image"} width={300} height={300} className="object-center w-full h-[200px] rounded-[8px]"></Image>
        <h5 className="text-lg mt-2 text-center md:text-start">{title}</h5>
        <div className="flex items-center gap-2 mt-[6px] md:mx-0 mx-auto">
            <p className="text-[#9BB848]">#{tags[0]}</p>
            <p className="text-[#48B8AA]">#{tags[1]}</p>
            <p className="text-[#B89F48]">#{tags[2]}</p>
        </div>
        <p className="mt-1 text-center md:text-left leading-relaxed">{shortDesc}...</p>

        <div className='flex justify-between mt-2 text-[14px]'>
            {author && <div className='flex items-center gap-2'>
                <UserPen />
                <span>{author}</span>
            </div>}
            <span className='pr-2'>{category}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
            <div className='flex items-center gap-2'>
                <Clock/>
                <span>{uploadDate}</span>
            </div>
            <Link href={`/blogs/${id}`}><Button variant={"link"} className='text-white text-lg'>Read More</Button></Link>
        </div>
        
    </div>
    )
}

export default BlogCard