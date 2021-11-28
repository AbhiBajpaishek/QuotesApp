import React,{useRef} from "react";
import styles from './Login.module.css';
import Card from "../UI/card";
import Button from '../UI/Button';
import useFirebase from "../../hooks/use-firebase";
import { NavLink } from "react-router-dom";

const Login = () => {
    const emailRef= useRef();
    const passwordRef = useRef();
    const {signIn} = useFirebase();
    const loginHandler = (e) =>{
        e.preventDefault();
        signIn(emailRef.current.value,passwordRef.current.value);
    }

    return <Card>
        <form className = {styles['login-form']} onSubmit = {loginHandler}>
            <label htmlFor="email" > Enter your Email ID </label>
            <input type ="text" id = "email" ref = {emailRef}/>
            {<label htmlFor = "email"></label>}
            <label htmlFor="password"> Enter your Password </label>
            <input type ="password" id = "password" ref = {passwordRef}/>
            <Button type = "submit" className = {styles["login-btn"]} >Log In</Button>
        </form>

        <NavLink to="/signup"><p className = {styles["signup"]}>Are you a new user? SignUp!</p></NavLink>
    </Card>
}

export default Login;