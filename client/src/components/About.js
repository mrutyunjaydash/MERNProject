import React,{ Component } from 'react';
import aboutdp from '../images/aboutdp.jpg';

class About extends Component{
    render() {
        return(
            <section className="about">
            <div className="container">
                <form method="">
                    <div className="row py-5">
                        <div className="col-md-4">
                            <img src={aboutdp} alt="aboutdp" className="about_img img-fluid"></img>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Mrutyunjay Dash</h5>
                                <h6>Web Developer</h6>
                                <p className="profile-ranking">RANKINGS:<span>1/10</span></p>
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" role="tab" data-toggle="tab" href="#home">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="profile-tab" role="tab" data-toggle="tab" href="#profile">Timeline</a>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button type="button" class="btn btn-secondary">Edit Profile</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-4">
                            <div className="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>48764687654867</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Mrutyunjay Dash</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Mrutyunjay Dash</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Mrutyunjay Dash</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane fade show" id="profile" role="tabpanel">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profile</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>48764687654867</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profile</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Mrutyunjay Dash</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Mrutyunjay Dash</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Mrutyunjay Dash</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        );
    };
}

export default About;