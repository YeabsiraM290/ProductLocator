import React, { Component }  from 'react';
const ForgetPass = () => {

    return(

        <div className="container text-center login-container mb-5">

            <p className="login-title"> Password assistance </p>

            <br/>

            <p className="small-text">Enter the email address associated with your account.</p>
            
            <form>

                <div className="form-outline mb-4">
                    <input type="email" id="email" placeholder="email" className="form-control" />
                </div>

                <button type="submit" className="login-btn btn btn-primary btn-block mb-4">Submit</button>

            </form>
            
        </div>
    )
}

export default ForgetPass