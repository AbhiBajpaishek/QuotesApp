import {useCallback} from "react";
import {useDispatch} from "react-redux";
import { quotesActions } from "../store/quotesSlice";
import { commentsActions } from "../store/commentsSlice";
import { userActions } from "../store/userSlice";
import {useNavigate} from "react-router";

const URL = "https://quotes-app-b30d6-default-rtdb.firebaseio.com/";
const signupURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDyeT1Dx2MmD2dRoCNnsgzhajgc4xsize4";
const signinURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyeT1Dx2MmD2dRoCNnsgzhajgc4xsize4";

const useFirebase = () => {

    const navigate = useNavigate();
    const dispatchFn = useDispatch();

    const getQuotes = useCallback(async () => {
        const response = await fetch(`${URL}quotes.json`);
        const quotes = await response.json();
        const newQuotes = [];
        quotes && Object.keys(quotes).forEach((key) => {
            newQuotes.push({
                id:key,
                title:quotes[key].title,
                author:quotes[key].author,
                description:quotes[key].description 
            });
        });
        return newQuotes;
    },[]);
    
    const addQuote = (quote) => {
        fetch(`${URL}quotes.json`, {
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(quote),
        })
        .then((response) => response.json())
        .then((data) => {
            // dispatchFn({type:"ADD_QUOTE",quote:{id:data.name,...quote}});
            dispatchFn(quotesActions.addQuote({quotes:{id:data.name,...quote}}));
       });
    }

    const getComments = useCallback(async () => {

        const response = await fetch(`${URL}comments.json`);
        const comments = await response.json();
        const newComments = [];
        comments && Object.keys(comments).forEach((key) => {
            newComments.push({
                id:key,
                comment:{
                    quoteId:comments[key].quoteId,
                    comment:comments[key].comment
                }
            });
        });
        return newComments;
    },[]);

    const addComment = (comment) => {
        fetch(`${URL}comments.json`, {
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(comment),
        })
        .then((response) => response.json())
        .then((data) => {
            const commentObj = {
                id:data.name,
                comment:{...comment}
            }
            dispatchFn(commentsActions.addComment({comment:commentObj}));
       });
    }

    const signUp = (email,password) => {
        fetch(signupURL,{
            body: JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            }),
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response) => {
            if(response.ok){
                console.log("Signed Up!!!");
            }
            return response.json();
        }).then((data) => {
            if(data.error)
                alert(data.error.message);
            else{
                //dispatchFn(userActions.logout());
                navigate('login');
            }
        }).catch((err) => {
            alert(err);
        })
    }

    const signIn = (email,password) => {
        fetch(signinURL,{
            body: JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            }),
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response) => {
            if(response.ok){
                console.log("Signed in succesfully");
            }
            return response.json();
        }).then((data) => {
            if(data.error)
                alert(data.error.message);
            else{
                dispatchFn(userActions.login({token:data.idToken,expiresIn:data.expiresIn}));
                navigate('../quotes');
            }
        }).catch((err) => {
            console.log("Error: ",err);
        })
    }
    

    return {
        addQuote,
        getQuotes,
        getComments,
        addComment,
        signUp,
        signIn
    };
};

export default useFirebase;
