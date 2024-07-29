import React from "react";
import UserContext from "./userContext";

const UserContextProvider = ({childern}) =>{
    const [user,setUser] = React.useState(null)
 return(
    <UserContext.Provider value={{user , setUser}}>
      {childern}
    </UserContext.Provider>
 )
}

export default UserContextProvider 