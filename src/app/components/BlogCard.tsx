import Image from 'next/image'
import { Clock } from 'lucide-react';

function BlogCard({name,tags,desc,uploadDate,readTime}:any) {
    return (
    <div className="max-w-[289px] w-full p-1 flex flex-col items-center md:items-start">
        <Image src={"/1.png"} alt="Blog Image" width={300} height={300} className="object-cover w-full h-[200px] rounded-[8px]"></Image>
        <h5 className="text-lg mt-2">{name}</h5>
        <div className="flex items-center gap-2 mt-[6px]">
            <p className="text-[#9BB848]">#{tags[0]}</p>
            <p className="text-[#48B8AA]">#{tags[1]}</p>
            <p className="text-[#B89F48]">#{tags[2]}</p>
        </div>
        <p className="mt-1 text-center md:text-left">{desc}</p>

        <div className="flex items-center justify-between text-xs mt-6">
            <div className="flex items-center justify-between gap-3 mr-3">
                <Clock />
                <span className="font-bold">{readTime}</span>
            </div>
            <p>{uploadDate}</p>
        </div>
    </div>
    )
}

export default BlogCard