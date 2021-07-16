import React from 'react';
import { NavLink } from 'react-router-dom';

function ErrorPage() {
    return (
        <section className="error-page">
            <div className="mt-5">
                <div className="h1">404</div>
                <div className="h2">ERROR!PAGE NOT FOUND</div>
                <div className="mt-5">
                        <NavLink to="/" >
                            <button type="button" className="btn btn-outline-warning">Back to Home</button>
                        </NavLink>
                </div>
            </div>
        </section>
    );
}

export default ErrorPage;