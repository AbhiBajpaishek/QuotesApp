import React,{useEffect,useState} from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const Roles = () =>{

    const [roles,setRoles] = useState([]);
    const roleIdRef = useRef();
    const nav = useNavigate();

    useEffect(()=>{
        const getRoles = async () =>{
            return fetch('https://localhost:5001/api/roles/');    
        }

        getRoles().then(response => response.json()).then(data => setRoles(data));
        
    },[]);

    const editRoleHandler = () =>{
        nav(`../showRoles/${roleIdRef.current.value}`);
    }

    return <div>
        <h2>Roles available: </h2>
        {   
            roles && roles.map((role)=>{
                return <div key ={role.id}>
                    <h4 ref={roleIdRef}>Role Id: {role.id}</h4>
                    <h5>RoleName: {role.name}</h5>
                <Button type = "button" onClick = {editRoleHandler} >Edit Role</Button>
                </div>

            })
        }
    </div>
}

export default Roles;