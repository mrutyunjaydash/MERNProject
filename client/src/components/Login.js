import React,{useContext, useState} from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../App';

const Login = () => {

const {state,dispatch} = useContext(UserContext);

const  history = useHistory();

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const loginUser = async(e) => {
    e.preventDefault();

    const res = await fetch("/signin",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({ email,password })  
    });

    const data = await res.json();
    console.log(data);
    if(data.status === 400 || data.error || !data){
        window.alert(data.error);
    }
    else{
        dispatch({type:"USER",payload:true});
        window.alert("Login Successfull");
        history.push("/");    
    }
}

    return (
        <div className="login">
           <div className="container">
               <div className="row justify-content-md-center">
                   <div className="col col-lg-3">
                   <form method="POST" className="center">
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Enter Email" aria-label="Email" 
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                ></input>
                                </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Enter Password" aria-label="password" 
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                </div>
                        </div>
                        <button type="submit" class="btn btn-success" 
                        onClick={loginUser}
                        >Login</button>
                   </form>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Login;