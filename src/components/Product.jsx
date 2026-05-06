import '../assets/style/Product.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pp1 from '../assets/images/pp1.jpg';
import pp2 from '../assets/images/pp2.jpg';
import pp3 from '../assets/images/pp3.jpg';
import pp4 from '../assets/images/pp4.jpg';
import pp5 from '../assets/images/pp5.jpg';
import pp6 from '../assets/images/pp6.jpg';
import pp7 from '../assets/images/pp7.jpg';
import pp8 from '../assets/images/pp8.jpg';
import pp9 from '../assets/images/pp9.jpg';

function Product () {

    const productdata = [
        {id: 1,
          name: "DWC Kit - 5 Planter",
          img: pp1,
          fprice: "1299",
          lprice: "2999"  
         },
         {id: 2,
          name: "NFT Kit - Outdoor",
          img: pp2,
          fprice: "7990",
          lprice: "9990"  
         },
         {id: 3,
          name: "Dutch Bucket Kit",
          img: pp3,
          fprice: "9990",
          lprice: "11990"  
         },
         {id: 4,
          name: "NFT Kit -Indoor- Spectrum",
          img: pp4,
          fprice: "10990",
          lprice: "39990"  
         },
         {id: 5,
          name: "NFT Kit -Outdoor Spectrum",
          img: pp5,
          fprice: "13990",
          lprice: "47990"  
         },
         {id: 6,
          name: "Coir Pot KIt",
          img: pp6,
          fprice: "180",
          lprice: "399"  
         },
         {id: 7,
          name: "Vegetable DIY Kit",
          img: pp7,
          fprice: "275",
          lprice: "1090"  
         },
         {id: 8,
          name: "Seed Strarter Kid",
          img: pp8,
          fprice: "390",
          lprice: "799"  
         },
        {id: 9,
          name: "Premium Expanded Clay Balls",
          img: pp9,
          fprice: "450",
          lprice: "1250"  
         }
    ]

    return (

<>

<section className='product-section py-5'>
    <div className='container'>
        <h2 className='sec-title'>Our Products</h2>
      <div className='row g-4'>
          
        {productdata.map((item)=> (
            <div className='col-12 col-md-4' key={item.id}>
                <div className='card product-card'>
           <div className='card-img'>
           <img src={item.img} alt={item.name} className='img-fluid pro-img'/>
           </div>
           <div className='card-body'>
             <h5 className='image-title'>{item.name}</h5>
              <div className='p-range'>
                <p className='p-start'><i className="bi bi-currency-rupee"></i>{item.fprice} to <i className="bi bi-currency-rupee"></i>{item.lprice}</p>
              </div>
           </div>
           <button className='prod-btn'>Visit Now</button>
                </div>
            </div>
        ))}

      </div>
    </div>
</section>


</>

    )
}

export default Product;