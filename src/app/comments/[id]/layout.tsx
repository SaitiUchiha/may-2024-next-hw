import React, {ReactNode} from "react";
import {Metadata} from "next";
import {commentService} from "@/services/api.services";
import {Params} from "@/app/comments/[id]/page";

export const generateMetadata = async ({params}:Params):Promise<Metadata> =>{
    const comment = await commentService.getCommentById(params.id)
    return {title: comment?.name}
}

type Props = {
    children: ReactNode
}

const CommentLayout = ({children}:Props) => {
  return (
      <div>
          {children}
      </div>

  )
}

export default CommentLayout;