import Image from 'next/image'
import { Clock ,UserPen} from 'lucide-react';

function BlogCard({name,tags,desc,author,uploadDate,category}:{name: string, tags: string[], desc: string,author:string, uploadDate: string, category: string}) {
    return (
    <div className="max-w-[310px] w-full p-1 flex flex-col items-center md:items-start hover:scale-105 duration-300 transition-all">
        <Image src={"/1.png"} alt="Blog Image" width={300} height={300} className="object-cover w-full h-[200px] rounded-[8px]"></Image>
        <h5 className="text-lg mt-2">{name}</h5>
        <div className="flex items-center gap-2 mt-[6px]">
            <p className="text-[#9BB848]">#{tags[0]}</p>
            <p className="text-[#48B8AA]">#{tags[1]}</p>
            <p className="text-[#B89F48]">#{tags[2]}</p>
        </div>
        <p className="mt-1 text-center md:text-left leading-relaxed">{desc}</p>

        <div className='flex items-center gap-2 -ml-1 mt-2'>
            <UserPen />
            <span>{author}</span>
        </div>
        <div className="flex items-center justify-between mt-4 gap-3">
            <span>{category}</span>
            <div className='flex items-center justify-between ml-3'>
                <Clock className='mr-1'/>
                <p>{uploadDate}</p>
            </div>
        </div>
    </div>
    )
}

export default BlogCard