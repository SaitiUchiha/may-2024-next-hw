import React from "react";
import {postService} from "@/services/api.services";
import PostComponent from "@/components/PostComponent";
import {IPost} from "../../../models/type";


const PostsPage = async () => {
    const allPosts = await postService.getAllPosts();


    return (
        <div>
            <ul>
                {
                    allPosts.map((post:IPost) => (<li key={post.id}>
                        <PostComponent post={post}/>
                    </li>))
                }
            </ul>

        </div>

    )
}

export default PostsPage;