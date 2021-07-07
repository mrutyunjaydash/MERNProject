import React,{useState,useEffect} from 'react';

const Home = () => {
    
    const [userName,setUserName] = useState({name:""});

    const [show,setShow] = useState(false);
    
    const callHome = async() => {
        try{
            const res = await fetch("/getData",{
            method : "GET",
            headers : {
                'Content-Type': 'application/json',
            }
            });

            const data = await res.json();
            console.log(data);
            setUserName({...userName, name: data.name});
            setShow(true);
            
            if(!res.status === 200 && !data ){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
        }
    }

    useEffect (() => {
        callHome();
    },[]);

    return (
       <section className="home">
           <div className="container">
                <div className="align-items-center">
                    <div className="h1 center">Hi  {userName.name}</div>
                    <div className="h2 center">
                       { show ? "Glad to see you back!" : "WELCOME TO HOME PAGE" }
                    </div>
                </div>
           </div>
       </section>
    );
};

export default Home;