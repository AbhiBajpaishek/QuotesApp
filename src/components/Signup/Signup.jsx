import React,{useRef} from "react";
import { NavLink } from "react-router-dom";
import styles from './Signup.module.css';
import Card from "../UI/card";
import Button from '../UI/Button';
import useFirebase from "../../hooks/use-firebase";

const Signup = () => {

    const emailRef= useRef();
    const passwordRef = useRef();
    const {signUp} = useFirebase();
    const signupHandler = (e) =>{
        e.preventDefault();
        signUp(emailRef.current.value,passwordRef.current.value);
    }
    

    return <Card>
        <form className = {styles['signup-form']} onSubmit = {signupHandler}>
            <label htmlFor="email" > Enter your Email ID </label>
            <input type ="text" id = "email" ref = {emailRef}/>
            <label htmlFor="password"> Enter your Password </label>
            <input type ="password" id = "password" ref = {passwordRef}/>
            <Button type = "submit" className = {styles["signup-btn"]} >Sign Up</Button>
        </form>
        <NavLink to="/login"><p className = {styles["login"]}>Already a User? Click to Login!</p></NavLink>
    </Card>
}

export default Signup;