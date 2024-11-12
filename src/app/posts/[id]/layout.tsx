import React, {ReactNode} from "react";
import {Metadata} from "next";
import {postService} from "@/services/api.services";
import {Params} from "@/app/posts/[id]/page";

export const generateMetadata = async ({params}:Params):Promise<Metadata> =>{
    const post = await postService.getPostById(params.id)
    return {title: post?.title}
}

type Props = {
    children: ReactNode
}

const PostLayout = ({children}:Props) => {
  return (
      <div>
          {children}
      </div>

  )
}

export default PostLayout;