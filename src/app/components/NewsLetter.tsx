import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const NewsLetter = () => {
    return (
    <div className="mx-auto max-w-[1000px] mt-10 px-2">
        {/* Heading */}
        <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">NEWSLETTER</h1>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-start gap-10 mt-4 ">
            {/* Paragragh Section */}
            <div className="max-w-[430px]">
                <p>Are you passionate about programming and always looking for ways to learn more and stay up-to-date with the latest developments in the field? 
                <br /><br />
                If so, our programming blog newsletter is the perfect fit for you!
                <br /><br />
                With our newsletter, you'll receive regular updates on the hottest topics in the world of programming, as well as exclusive access to content that you won't find anywhere else.
                </p>
            </div>

            {/* Registration Section */}
            <div className="max-w-[508px] space-y-5">
                <p>Plus, our team of expert writers and industry professionals curate each edition to ensure that you're only getting the most valuable and relevant information. <br /><br />
                Don't miss out - sign up for our newsletter today and take your programming knowledge to the next level!</p>

                <div className="flex">
                    <Input className="rounded-none placeholder:text-white border-2 border-[#4853B8]" placeholder="Enter author Email" type="email"></Input>
                    <Button className="max-w-[135px] w-full bg-[#383FEF] rounded-none hover:bg-[#272dec]">submit</Button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NewsLetter