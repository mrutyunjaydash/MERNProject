import React from 'react';

const Signup = () => {
    return (
        <div className="signup">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-3">
                    <form className="center">
                        <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="number" class="form-control" placeholder="Phone" aria-label="Phone" aria-describedby="basic-addon1"></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Work" aria-label="Work" aria-describedby="basic-addon1"></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="basic-addon1"></input>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;