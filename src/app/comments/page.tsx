import React from "react";
import {commentService} from "@/services/api.services";
import CommentComponent from "@/components/CommentComponent";
import {IComment} from "../../../models/type";


const CommentsPage = async () => {
    const allComments = await commentService.getAllComments();


    return (
        <div>
            <ul>
                {
                    allComments.map((comment:IComment) => (<li key={comment.id}>
                        <CommentComponent comment={comment}/>
                    </li>))
                }
            </ul>

        </div>

    )
}

export default CommentsPage;