import React from "react";
import {commentService} from "@/services/api.services";
import {IComment} from "../../../../models/type";


export type Params ={
    params:{id:string};
}

const  CommentPage= async ({params}:Params) => {
  const comment:IComment|null = await commentService.getCommentById(params.id);
    return (
        <div>
            <h3>Pot Id: {comment?.postId}</h3>
            <h2>{comment?.id} {comment?.name}</h2>
            <h3>{comment?.email}</h3>
            <p>{comment?.body}</p>
        </div>

    )
}

export default CommentPage;