import React,{useRef,useEffect,useState} from "react";
import Button from "../UI/Button";

const RolesMaster = (id) =>{

    const roleNameRef = useRef();
    const [role,setRole] = useState();

    useEffect(()=>{
        const getRole = () =>{
        fetch(`https://localhost:5001/api/roles/GetRoleById/${id}`)
            .then(response => response.json())
            .then(data => setRole(data));
        }
        getRole();
    },[id]);

    return <div>
        <div>
            <h3>Role id: {role.id}</h3>
            <input type="text" value={role.name} ref={roleNameRef}/>
            <Button type="button">Save Role</Button>
        </div>

        <div>
            Users assigned under this Roles:
            <ul>
            {   
                role.Users.map(user =>{
                    return <li>UserName: {user.Name}</li>
                })
            }
            </ul>
        </div>
    </div>
}   

export default RolesMaster;