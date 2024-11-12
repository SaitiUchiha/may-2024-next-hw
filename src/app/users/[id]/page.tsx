import React from "react";

type Params ={
    params:{id:string};
}

const  UserPage= ({params}:Params) => {
  return (
      <div>
          UserPage {params.id}
      </div>

  )
}

export default UserPage;