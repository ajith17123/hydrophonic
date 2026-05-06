import '../assets/style/Home.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero1 from '../assets/images/heroimg.jpg';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import p4 from '../assets/images/p4.png';

function Home () {

 const Prod = [
    {id: 1, name: "Hydroponic Kits", img: p1, oldprice: 1500 , newprice: 1300},
    {id: 2, name: "Nutrients", img: p2, oldprice: 999 , newprice: 759},
    {id: 3, name: "Horticulture Lights", img: p3, oldprice: 1299 , newprice: 999},
    {id: 4, name: "NFT Channels", img: p4, oldprice: 1749 , newprice: 1499}
 ]

    return (

<>

{/* {herosection} */}

<section className='hero-sec py-5'>
   <div className='container'>
       <div className='row align-items-center'>

          <div className="col-lg-6" data-aos="fade-right">
         <h1 className="hero-title">Grow The Future <br /><span className= "hero-span">In Your Home</span></h1>
               <p className="hero-para">
             No Soil. No Mess. Just Freshness. Discover the smartest way to grow 
             pesticide-free greens with our premium hydroponic kits.
               </p>
               <div className="hero-btns mt-4">
                <Link to="/product">
               <button className="btn btn-lg me-3">Shop Kits</button>
               </Link>
                <Link to="/about">
              <button className="btn btn-lg">Learn More</button>
              </Link>
                </div>
          </div>
       
       <div className="col-lg-6" data-aos="zoom-in">
             <img src={hero1} alt="Hydroponics" className="img-fluid hero-img" />
        </div>

       </div>
   </div>
</section>

{/* {productsection} */}

<section className='prod-sec py-5'>
   <div className='container'>
    <h2 className='section-title'>Our Best Sellers</h2>
     <div className='row g-4'>
       
     {Prod.map((item) => (
        <div className='col-md-3 col-12' key={item.id}>
            <div className='card pro-card'>
               
            <div className='card-img'>
              <img src={item.img} alt={item.name} className='img-fluid pro-img' />
            </div>

            <div className='card-body'>
               <h5 className='pro-title'>{item.name}</h5>
               <div className='price-tag'>
               <span className='pro-para-old'><i class="bi bi-currency-rupee"></i>{item.oldprice}</span>
               <span className='pro-para-new'><i class="bi bi-currency-rupee"></i>{item.newprice}</span>
               </div>
            </div>
            <button className='prod-btn'>Add To Cart</button>

            </div>
        </div>
     ))}

     </div>
   </div>
</section>

{/* {featuresection} */}

<section className='feat-sec py-5'>
   <div className='container'>
        <div className='text-center'>
            <h2 className='section-title'>Why Choose Hydro Elite?</h2>
            <p className='feat-sub-title'>Modern farming for a sustainable future</p>
        </div>
      <div className='row g-4'>
            
      <div className='col-md-4' data-aos="fade-up" data-aos-delay="100">
            <div className='feature-box text-center p-4'>
               <i className="bi bi-droplet-half mb-3 feature-icon"></i>
               <h4 className='feat-title'>90% Less Water</h4>
               <p className='feat-para'>It requires less water than traditional farming. It recycles water efficiently.</p>
            </div>
         </div>

         <div className='col-md-4' data-aos="fade-up" data-aos-delay="200">
            <div className='feature-box text-center p-4'>
               <i className="bi bi-lightning-charge mb-3 feature-icon"></i>
               <h4 className='feat-title'>2x Faster Growth</h4>
               <p className='feat-para'>Plants Grow Fast, because of nutrients goes to the deep root.</p>
            </div>
         </div>

         <div className='col-md-4' data-aos="fade-up" data-aos-delay="300">
            <div className='feature-box text-center p-4'>
               <i className="bi bi-shield-check mb-3 feature-icon"></i>
               <h4 className='feat-title'>Pesticide Free</h4>
               <p className='feat-para'>Because of soil less, there's no hassle with bugs,so you can enjoy it fresh and directly.</p>
            </div>
         </div>

      </div>
   </div>
</section>

{/* {testimonialsection} */}

<section className='test-sec py-5'>
    <div className='container'>
    <div className='text-center mb-5' data-aos="fade-up">
         <h2 className='section-title'>What Our Growers Say</h2>
    </div>
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      
<div className='testi-card  text-center mx-auto'>
                  <div className='stars mb-3'>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                  </div>
                  <p className='testi-text'>"I never thought growing spinach at home would be this easy. The Hydro Elite kit is a game changer for my kitchen! Fresh greens every day."</p>
                  <h5 className='testi-name'>- Rajesh</h5>
     </div>

    </div>
    <div className="carousel-item">
     
  <div className='testi-card text-center mx-auto'>
                  <div className='stars mb-3'>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-half"></i>
                  </div>
                  <p className='testi-text'>"The nutrients provided are top-notch. My lettuce grew twice as fast compared to regular soil planting. Highly impressed with the quality."</p>
                  <h5 className='testi-name'>- Vignesh</h5>
               </div>

    </div>
    <div className="carousel-item">
      
  <div className='testi-card text-center mx-auto'>
                  <div className='stars mb-3'>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                  </div>
                  <p className='testi-text'>"Eco-friendly and mess-free. Perfect for city apartments with no garden space. The setup was very simple and clear."</p>
                  <h5 className='testi-name'>- Arun </h5>
  </div>

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</section>

{/* {aboutsection} */}

<section className='about-sec py-5'>
  <div className='container'>
     <h2 className='section-title'>Who We Are</h2>
     <div className='row'>
      
        <div className='text-center about-text'>
           <p className='about-para'>
            "At Hydro Elite, we are redefining the future of urban farming. We believe that everyone deserves access to fresh, pesticide-free greens, regardless of the space they have. Our mission is to simplify hydroponics, making it accessible, sustainable, and mess-free for every home. Whether you are a beginner or a pro, we provide the smartest tools and premium nutrients to help you grow your own food with 90% less water and 100% more love."
           </p>
        </div>

     </div>

  <Link className='about-bn' to="/about"><button className='abt-btn'>Read More About Us</button></Link>

  </div>
</section>

</>

    )
}

export default Home;