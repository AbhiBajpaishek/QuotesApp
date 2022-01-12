import React from "react";
import { useRef } from "react";
import Button from "../UI/Button";

const CreateRole = () =>{

    const roleNameRef = useRef();


    const addRoleHandler = async () => {

        const response = await fetch('https://localhost:5001/api/roles/Create',
            {
                headers: {
                    "content-type" : "application/json"
                },
                method: "Post",
                body: JSON.stringify({
                    RoleName : roleNameRef.current.value
                })
            }
        );

        const data = await response.json();
        console.log(data);
        
    }



    return <div>
         <label htmlFor = "roleName"> Role Name </label>
            <input type = "text" id= "roleName" ref={ roleNameRef} ></input>
            
            <Button type = "button" onClick = {addRoleHandler}>Create Role</Button>
    </div>
}

export default CreateRole;