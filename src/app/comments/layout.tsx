import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata:Metadata = {
    title: "CommentsLayout metadata",
}

type Props = {
    children: ReactNode
}

const  CommentsLayout= ({children}:Props) => {
  return (
      <div>
          {children}
      </div>
  )
};

export default CommentsLayout;