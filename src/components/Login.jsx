import '../assets/style/Login.css';
import {Link} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState } from 'react';

function Login () {

const [view, setView] = useState('login');

    return (

       <section className='auth-wrapper py-5'>
          <div className='auth-container'>
            <h2 className='sec-title'>Welcome To Hydro Elite</h2>
             {view === 'login' ? (
                <div className='auth-form'>
                   <h2 className='auth-title'>Login</h2>
                   <form>
              <div className='mb-3'>
                <input type="email" className='form-control auth-input' placeholder="Email" required />
              </div>
              <div className='mb-3'>
                <input type="password" className='form-control auth-input' placeholder="Password" required />
              </div>
              <button type="submit" className='btn-auth w-100'>Login</button>
            </form>

            <div className='auto-switch'>
                <p>Don't have an Account? <span onClick={() => setView('register')}>Create New</span></p>
            </div>
                </div>
             ): (

                <div className='auth-form'>
                 <h2 className='auth-title'>Create Account</h2>
                 <form>
              <div className='mb-3'>
                <input type="text" className='form-control auth-input' placeholder="First Name" required />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control auth-input' placeholder="Last Name" required />
              </div>
              <div className='mb-3'>
                <input type="email" className='form-control auth-input' placeholder="Email" required />
              </div>
              <div className='mb-3'>
                <input type="password" className='form-control auth-input' placeholder="Password" required />
              </div>
              <button type="submit" className='btn-auth w-100'>Create Account</button>
            </form>

            <div className='auth-switch'>
              <p>Already have an account? <span onClick={() => setView('login')}>Login here</span></p>
            </div>

                </div>
             )}
          </div>
       </section>

);
}

export default Login;