import React,{ useState } from 'react';

const Signup = () => {

    const [ user,setUser ] = useState({
        name:"" , email:"" , phone:"", work:"",password:"",cpassword:""
    });

    let name,value;

    const handleChange = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name] : value})
    }
    return (
        <div className="signup">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-3">
                    <form className="center">
                        <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Name" aria-label="Username"
                            id="name" 
                            name="name"
                            value={ user.name }
                            onChange={ handleChange }
                            ></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" 
                            id="email" 
                            name="email"
                            value={ user.email }
                            onChange={ handleChange }
                            ></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" placeholder="Phone" aria-label="Phone" 
                            id="phone" 
                            name="phone"
                            value={ user.phone }
                            onChange={ handleChange }
                            ></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Work" aria-label="Work" 
                            id="work" 
                            name="work"
                            value={ user.work}
                            onChange={ handleChange }
                            ></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" aria-label="Password" 
                            id="password" 
                            name="password"
                            value={ user.password }
                            onChange={ handleChange }
                            ></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Confirm Password" aria-label="Confirm Password" 
                            id="cpassword" 
                            name="cpassword"
                            value={ user.cpassword }
                            onChange={ handleChange }
                            ></input>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;