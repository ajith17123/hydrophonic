import '../assets/style/About.css';
import {Link} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import about1 from '../assets/images/ab.jpg';
import v1 from '../assets/videos/v1.mp4';
import v2 from '../assets/videos/v2.mp4';
import v3 from '../assets/videos/v3.mp4';


function About () {

    return (

    <>

    {/* {aboutsection} */}
    
<section className='about-sec py-5'>
   <div className='container'>
        <h2 className='section-title' data-aos="fade-up">Who We Are</h2>
        <div className='row align-items-center'>
           
             <div className='col-md-6 mb-4 mb-md-0' data-aos="fade-right">
              <img src={about1} alt="About Us" className='img-fluid about-img' />
            </div>

            <div className='col-md-6' data-aos="fade-left">
              <p className='about-para'>
"Hydro Elite is on a mission to bring the future of farming into your living room. We specialize in high-tech hydroponic systems that allow you to grow fresh, organic, and pesticide-free vegetables with 90% less water than traditional soil farming. Our journey started with a simple idea: everyone deserves access to healthy greens, no matter how small their urban home is. From premium nutrients to smart automated grow-kits, we provide everything a modern home-grower needs to cultivate a sustainable lifestyle."
              </p>
            </div>

        </div>
   </div>
</section>

{/* {gallerysec} */}

<section className='gal-sec py-5'>
   <div className='container'>
      <h2 className='section-title'>Gallery</h2>
      <div className='row'>
         
        <div className='col-12 col-md-4'>
       <video src={v1} className='vid-gal' muted controls autoPlay loop></video>
        </div>

        <div className='col-12 col-md-4'>
       <video src={v2} className='vid-gal' muted controls autoPlay loop></video>
        </div>

        <div className='col-12 col-md-4'>
       <video src={v3} className='vid-gal' muted controls autoPlay loop></video>
        </div>

      </div>
   </div>
</section>

{/* {getintouch} */}

<section className='cont-sec py-5' id='cont'>
   <div className='container'>
       <div className='row justify-content-center'>
           
           <div className='col-md-6' data-aos="flip-up">
              <div className='contact-card'>
                <h2 className='section-title text-center mb-4'>Get In Touch</h2>
                <form>
                  <div className='mb-3'>
                    <input type="text" className='form-control custom-input' placeholder="Name" required />
                  </div>
                  <div className='mb-3'>
                    <input type="email" className='form-control custom-input' placeholder="Email" required />
                  </div>
                  <div className='mb-3'>
                    <textarea className='form-control custom-input' rows="4" placeholder="Message" required></textarea>
                  </div>
                  <button type="submit" className='btn-contact w-100'>Send Message</button>
                </form>
              </div>
            </div>

       </div>
   </div>
</section>

{/* {mapsec} */}

<section className='map-sec py-5'>
  <div className='container-fluid p-0'>
          <div className='col-12' data-aos="fade-up">
            <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62203.01185590924!2d77.55593815598686!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfad3638d9302!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715000000000" 
        width="100%" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy">
      </iframe>
          </div>
        </div>
</section>

{/* {statsec} */}

<section className='stat-sec py-5' data-aos="fade-up">
   <div className='container'>
          <div className='row text-center'>
            <div className='col-md-4 mb-3' data-aos="zoom-in" data-aos-delay="100">
              <a href="https://wa.me/919587524658" target="_blank" rel="noreferrer" className='contact-link'>
                <i className="bi bi-whatsapp"></i> WhatsApp
              </a>
            </div>
            <div className='col-md-4 mb-3' data-aos="zoom-in" data-aos-delay="200">
              <a href="tel:+919587524658" className='contact-link'>
                <i className="bi bi-telephone"></i> Call Us
              </a>
            </div>
            <div className='col-md-4' data-aos="zoom-in" data-aos-delay="300">
              <a href="mailto:hydroelite@gmail.com" className='contact-link'>
                <i className="bi bi-envelope"></i> Mail Us
              </a>
            </div>
          </div>
        </div>
</section>

    </>

)
}

export default About;