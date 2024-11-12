import React, {ReactNode} from "react";
import {Metadata} from "next";
import {Params} from "@/app/(users)/users/[id]/page";
import {userService} from "@/services/api.services";

export const generateMetadata = async ({params}:Params):Promise<Metadata> =>{
    const user = await userService.getUserById(params.id)
    return {title: user?.username}
}

type Props = {
    children: ReactNode
}

const UserLayout = ({children}:Props) => {
  return (
      <div>
          {children}
      </div>

  )
}

export default UserLayout;