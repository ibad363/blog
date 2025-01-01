"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { client } from '@/sanity/lib/client';
import {  Mail, MessageCircle, Trash, User } from "lucide-react"
import { useState,useEffect } from "react";
import { nanoid } from 'nanoid';

const CommentSection = ({blogId} : {blogId : string}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])

    useEffect(() => {
      if (blogId) {
        fetchComments();
      } else {
        console.error("Blog ID is undefined");
      }
    }, [blogId]);

    async function fetchComments() {
      try {
        const fetchedComments = await client.fetch(
            `*[_type == "blog" && _id == $id]{
            comments[]{
            _key,
            name,
            email,
            comment,
            date,
            }
            }`,
            { id: blogId } 
        );
        setComments(fetchedComments[0]?.comments || []);
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
    }

    const handleCommentSubmit = async (e: React.FormEvent)=>{
      e.preventDefault()

        if (!name || !email || !comment) {
          alert("Please fill all fields!");
          return;
        }

        try {
          await saveComment({ name, email, comment });
          setName("");
          setEmail("");
          setComment("");
          fetchComments();
        } catch (error) {
          console.error("Error submitting comment:", error);
        }
    }

    async function saveComment(commentData: {name: string,email:string,comment: string}){
        const {name,email,comment} = commentData
        
        const newComment = {
            _type: "commentObject",
            name,
            email,
            comment,
            date: new Date().toISOString(),
            blog: {_type: "reference" ,_ref : blogId},
            _key: nanoid()
        }

        try {
          await client
            .patch(blogId)
            .setIfMissing({ comments: [] }) // Ensure comments array exists
            .insert("after", "comments[-1]", [newComment]) // Add new comment
            .commit();
            await fetchComments();
        } catch (error) {
          console.error("Error saving comment:", error);
        }

    }

    // Delete comment function
    const handleDeleteComment = async (commentKey: string) => {
      try {
        await client
          .patch(blogId)
          .unset([`comments[_key == "${commentKey}"]`]) // Remove the comment with the specified key
          .commit();
        fetchComments(); // Refresh comments after deletion
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    };

  return (
    <div className="max-w-[600px] mx-auto">
      {/* Post Comment */}
      <h3 className="text-[26px] md:text-[32px] mt-6">Leave a comment</h3>
      <form onSubmit={handleCommentSubmit} className="mt-[25px]">
        <div className="flex">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent placeholder:text-white rounded-none oultine-none border-[#383FEF]"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent placeholder:text-white rounded-none oultine-none border-[#383FEF]"
          />
        </div>
        <Textarea
          className="rounded-none resize-none placeholder:text-white border-[#383FEF]"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></Textarea>
        <Button
          type="submit"
          variant={"destructive"}
          className="bg-[#383FEF] w-full hover:bg-[#2026ca] rounded-none"
        >
          SUBMIT
        </Button>
      </form>

      {/* All Comments */}
      <div className="mt-6">
        <h3 className="text-[26px] md:text-[32px] mt-6">Comments</h3>
        {/* Each Comment */}
        <div>
          {comments.map((comment:any , i : number) => (
            <div key={comment._key} className="mt-2 space-y-3 border-y border-[#383FEF] py-2">
                <div className="flex flex-row justify-between gap-2 sm:gap-6">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-1">
                      <span className="flex gap-1">
                          <User />
                          {comment.name}
                      </span>
                      <span className="flex gap-1">
                          <Mail />
                          {comment.email}
                      </span>
                    </div>

                    <div>
                      <Button 
                      onClick={()=> handleDeleteComment(comment._key)}
                      variant={"ghost"}><Trash /></Button>
                    </div>
                </div>
                <div className="flex gap-1">
                    <MessageCircle className="w-10" />
                    <p className=" text-wrap">
                        {comment.comment}
                    </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentSection