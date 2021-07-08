import React,{useContext, useEffect  } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../App';

const Logout = ()  => {


    const {state,dispatch} = useContext(UserContext);

    const history = useHistory();

    const callLogout  = async() =>  {
        try{
            const res = await fetch('/signout',{
                method:'GET',
                headers:{
                    Accept : 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials : "include"
            });
            const data = await res.json();
            console.log(data);

            if(res.status === 200)
            {
                dispatch({type:"USER",payload:false});
                history.push('/login');
            }

        }catch(err){
            console.log(err);
        }

    }
    useEffect (() => {
        callLogout();
    });

    return(
        <h3>Logout</h3>
    );
};

export default Logout;