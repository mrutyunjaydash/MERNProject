import React,{useEffect,useState} from 'react';

const Contact = () => {

    const [userData,setUserData] = useState({name:"",email:"",phone:"",message:""});
    
    const callContact = async() => {
        try{
            const res = await fetch("/getData",{
            method : "GET",
            headers : {
                'Content-Type': 'application/json',
            }
            });

            const data = await res.json();
            console.log(data);
            setUserData({...userData, name: data.name,email : data.email , phone : data.phone , message : data.message});
            
            if(!res.status === 200 && !data ){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        callContact();
    },[]);

    //saving values in states
    let name,value;

    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserData({...userData,[name] : value })
    }

    //send data to DB
    const contactForm = async(e) => {
        
        e.preventDefault();

        const {name,email,phone,message} = userData;
        const res = await fetch("/contact",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name,email,phone,message })
        });

        const data = await res.json();

        if(!data){
            console.log("Message not sent");
        }
        else{
            alert("Message sent");
            setUserData({...userData,message:""});
        }
    }

    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="contact_form p-5 mt-5 border">
                            <h2 className="pb-3">Get in Touch!</h2>
                            <form method="POST" id="contact_form" autoComplete="off">
                                <div className="contact_form_input d-flex justify-content-between align-items-center input-group ">
                                    <input type="text"
                                        id="contact_form_name" 
                                        className="form-control"
                                        placeholder="Your Name"
                                        name = "name"
                                        value = {userData.name}
                                        onChange = {handleChange}
                                        required="true">
                                    </input>

                                    <input type="email"
                                        id="contact_form_email" 
                                        className="form-control"
                                        placeholder="Your Email"
                                        name = "email"
                                        value = {userData.email}
                                        onChange = {handleChange}
                                        required="true">
                                    </input>

                                    <input type="number"
                                        id="contact_form_phone" 
                                        className="form-control"
                                        placeholder="Phone"
                                        name = "phone"
                                        value = {userData.phone}
                                        onChange = {handleChange}
                                        required="true">
                                    </input>
                                  
                                </div>

                                <div className="input-group mt-5">
                                    <textarea className="form-control"
                                    placeholder="message"
                                    name="message"
                                    value = {userData.message}
                                    onChange = {handleChange} 
                                    cols="30" 
                                    rows="10">    
                                    </textarea>
                                </div>
                                
                                <div className="mt-5">
                                    <button type="submit" 
                                    className="btn btn-primary"
                                    onClick={contactForm}>
                                    Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;