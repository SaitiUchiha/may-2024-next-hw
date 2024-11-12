import {IComment, IPost, IUser} from "../../models/type";


const base: string = 'https://jsonplaceholder.typicode.com';
const urlBuilder = {
    userBaseUrl: '/users',
    allUsers: () => base + urlBuilder.userBaseUrl,
    singleUser: (id: string | number) => base + urlBuilder.userBaseUrl + '/' + id,
    postBaseUrl: '/posts',
    allPosts: () => base + urlBuilder.postBaseUrl,
    singlePost: (id: string | number) => base + urlBuilder.postBaseUrl + '/' + id,
    commentBaseUrl: '/comments',
    allComments: () => base + urlBuilder.commentBaseUrl,
    singleComment: (id: string | number) => base + urlBuilder.commentBaseUrl + '/' + id,
}

export const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const users = await fetch(urlBuilder.allUsers())
            .then(value => value.json())
        // console.log(users)
        return users;
    },
    getUserById: async (id: string | number): Promise<IUser | null> => {
        const user: IUser = await fetch(urlBuilder.singleUser(id))
            .then(value => value.json())
        // console.log(user)
        return user;
    },
};

export const postService = {
    getAllPosts: async (): Promise<IPost[]> => {
        const posts = await fetch(urlBuilder.allPosts())
            .then(value => value.json())
        return posts;
    },
    getPostById: async (id: string | number): Promise<IPost | null> => {
        const post: IPost = await fetch(urlBuilder.singlePost(id))
            .then(value => value.json())
        return post;
    },
};

export const commentService = {
    getAllComments: async (): Promise<IComment[]> => {
        const comments = await fetch(urlBuilder.allComments())
            .then(value => value.json())
        return comments;
    },
    getCommentById: async (id: string | number): Promise<IComment | null> => {
        const comment: IComment = await fetch(urlBuilder.singleComment(id))
            .then(value => value.json())
        return comment;
    },
};