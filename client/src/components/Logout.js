import React,{ useEffect  } from 'react';
import { useHistory } from 'react-router';

const Logout = ()  => {

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