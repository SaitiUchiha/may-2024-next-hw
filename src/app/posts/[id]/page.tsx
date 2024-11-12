import React from "react";
import {postService} from "@/services/api.services";
import {IPost} from "../../../../models/type";


export type Params ={
    params:{id:string};
}

const  PostPage= async ({params}:Params) => {
  const post:IPost|null = await postService.getPostById(params.id);
    return (
        <div>
            <h3>User Id {post?.userId}</h3>
            <h2>{post?.id} {post?.title}</h2>
            <p>{post?.body}</p>
        </div>

    )
}

export default PostPage;