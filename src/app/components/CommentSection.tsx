"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, User } from "lucide-react"
import { useState,useEffect } from "react";

const CommentSection = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comments, setComments] = useState([])

    // const handleCommentSubmit = async (e: React.FocusEvent)=>{
    //     await saveComment({name,email,comment})
    // }
    
  return (
    <div className="max-w-[600px] mx-auto">
                    {/* Post Comment */}
                    <h3 className="text-[26px] md:text-[32px] mt-6">Leave a comment</h3>
            <form className="mt-[25px]">
                <div className="flex">
                    <Input type="text" placeholder="Name" className="bg-transparent placeholder:text-white rounded-none oultine-none border-[#383FEF]"/>
                    <Input type="email" placeholder="Email" className="bg-transparent placeholder:text-white rounded-none oultine-none border-[#383FEF]"/>
                </div>
                <Textarea className="rounded-none resize-none placeholder:text-white border-[#383FEF]" placeholder="Comment"></Textarea>
                <Button type="submit" variant={"destructive"} className="bg-[#383FEF] w-full hover:bg-[#2026ca] rounded-none">SUBMIT</Button>
            </form>

            {/* All Comments */}
            <div className="mt-6">
                <h3 className="text-[26px] md:text-[32px] mt-6">Comments</h3>
                {/* Each Comment */}
                <div className="mt-2 space-y-3 border-y border-[#383FEF] py-2">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                        <span className="flex gap-1"><User />Ibad Ur Rehman</span>
                        <span className="flex gap-1"><Mail />hafizibadurrehman363@gmail.com</span>
                    </div>
                    <p className="flex flex-wrap gap-1"><MessageCircle />Very Informative Blog i have been reading</p>
                </div>              
            </div>
    </div>
  )
}

export default CommentSection