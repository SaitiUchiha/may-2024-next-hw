import React, {FC} from "react";
import {IPost} from "../../models/type";
import Link from "next/link";

interface IProps {
    post: IPost;
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <Link href={`/posts/${post.id}`}>ID: {post.id} - {post.title}</Link>
        </div>

    )
}

export default PostComponent;