import React,{useEffect,useState} from 'react';

const Contact = () => {

    const [userData,setUserData] = useState({});
    
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
            setUserData(data);
            
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
    });

    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="contact_form p-5 mt-5 border">
                            <h2 className="pb-3">Get in Touch!</h2>
                            <form id="contact_form">
                                <div className="contact_form_input d-flex justify-content-between align-items-center input-group ">
                                    <input type="text"
                                        id="contact_form_name" 
                                        className="form-control"
                                        placeholder="Your Name"
                                        value = {userData.name}
                                        required="true">
                                    </input>

                                    <input type="email"
                                        id="contact_form_email" 
                                        className="form-control"
                                        placeholder="Your Email"
                                        value = {userData.email}
                                        required="true">
                                    </input>

                                    <input type="number"
                                        id="contact_form_phone" 
                                        className="form-control"
                                        placeholder="Phone"
                                        value = {userData.phone}
                                        required="true">
                                    </input>
                                  
                                </div>

                                <div className="input-group mt-5">
                                    <textarea className="form-control" placeholder="message" cols="30" rows="10"></textarea>
                                </div>
                                
                                <div className="mt-5">
                                    <button type="submit" class="btn btn-primary">Send Message</button>
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