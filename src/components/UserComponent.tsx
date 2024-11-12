import React, {FC} from "react";
import {IUser} from "../../models/type";
import Link from "next/link";

interface IProps {
    user: IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <Link href={`/users/${user.id}`}>ID: {user.id} - {user.name}</Link>
        </div>

    )
}

export default UserComponent;