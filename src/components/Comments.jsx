import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMessage } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Comments () {
    let [comment, setComment] = useState("");
    let [submittedComment, setSubmittedComment] = useState([]);

    const handleSubmit = () => {
        if(comment.trim() === ""){
            return;
        }else setSubmittedComment([comment, ...submittedComment]);
        setComment("");
    }

    return(
        <div className="h-screen max-w-[1720px] px-[54px] bg-[#EEFFF7] items-start py-[24px]">
            <h1 className="text-[40px] text-[#1AC2EA] pb-[24px]"><FontAwesomeIcon icon={faMessage} className="pr-[12px]" />Comments</h1>
            <div className="bg-white rounded-[20px] w-[640px] p-[36px] shadow-md shadow-[#AAA5A5]">
                
                <textarea  className="bg-white w-full h-24 p-2 border rounded-lg focus:outline-none shadow-md border-[#AAA5A5]"
                placeholder="Share your thoughts..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <button className="mt-2 px-[50px] cursor-pointer py-[8px] bg-[#00BF63] text-white rounded-[30px] text-[24px] font-semibold"
                onClick={handleSubmit}>Post</button>
                
                </div>
                <div className="mt-6 space-y-3 ">
                    {submittedComment.map((c, index) => (
                    <div key={index} className="break-words p-3 bg-white rounded-[20px] shadow-md shadow-[#AAA5A5]">
                        <p>{c}</p>
                    </div>
                    ))}
                
            </div>
        </div>
    )
}