// Simple 3‑page Next.js website for FaithfullThings.co.uk
// Ready to deploy on Vercel

// FILE STRUCTURE
// /pages/_app.js
// /pages/index.js
// /pages/store.js
// /pages/contact.js
// /components/Navbar.js
// /components/ProductCard.js
// /styles/globals.css

// pages/_app.js
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// components/Navbar.js
import Link from 'next/link'

export default function Navbar(){

  return(

    <nav className="nav">

      <div className="logo">FaithfullThings ✝</div>

      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/store">Store</Link>
        <Link href="/contact">Contact</Link>
      </div>

    </nav>

  )

}

// components/ProductCard.js
export default function ProductCard({product}){

  return(

    <div className="productCard">

      <img src={product.image} />

      <h3>{product.name}</h3>

      <p>£{product.price}</p>

      <button className="buyButton">Buy</button>

    </div>

  )

}

// pages/index.js
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Home(){

  return(

    <div>

      <Navbar />

      <section className="hero">

        <h1>FaithfullThings</h1>

        <p>Faith inspired clothing for everyday life</p>

        <Link href="/store">
          <button className="shopButton">Shop Now</button>
        </Link>

      </section>

      <section className="about">

        <h2>Wear Your Faith</h2>

        <p>
        FaithfullThings creates simple Christian clothing that helps
        share faith through everyday fashion. Our designs are inspired
        by scripture, encouragement and the message of Christ.
        </p>

      </section>

    </div>

  )

}

// pages/store.js
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

const products=[

  {
    name:"Faith Over Fear T‑Shirt",
    price:19.99,
    image:"https://via.placeholder.com/300"
  },

  {
    name:"John 3:16 Hoodie",
    price:34.99,
    image:"https://via.placeholder.com/300"
  },

  {
    name:"Pray More Worry Less Tee",
    price:21.99,
    image:"https://via.placeholder.com/300"
  },

  {
    name:"Walk By Faith Hoodie",
    price:36.99,
    image:"https://via.placeholder.com/300"
  }

]

export default function Store(){

  return(

    <div>

      <Navbar />

      <div className="storeContainer">

        <h1>Store</h1>

        <div className="productGrid">

          {products.map((p,i)=>(
            <ProductCard key={i} product={p}/>
          ))}

        </div>

      </div>

    </div>

  )

}

// pages/contact.js
import Navbar from '../components/Navbar'

export default function Contact(){

  return(

    <div>

      <Navbar />

      <div className="contactContainer">

        <h1>Contact</h1>

        <p>Email: hello@faithfullthings.co.uk</p>

        <p>
        If you have questions about orders or products
        please get in touch.
        </p>

      </div>

    </div>

  )

}

// styles/globals.css

body{

  margin:0;

  font-family:Arial, Helvetica, sans-serif;

  background:#f4f4f4;

}

.nav{

  display:flex;

  justify-content:space-between;

  align-items:center;

  padding:20px 40px;

  background:black;

  color:white;

}

.links a{

  margin-left:20px;

  color:white;

  text-decoration:none;

}

.hero{

  text-align:center;

  padding:120px 20px;

  background:white;

}

.shopButton{

  padding:12px 25px;

  margin-top:20px;

  background:#2e7d32;

  border:none;

  color:white;

  font-size:16px;

  cursor:pointer;

}

.about{

  text-align:center;

  padding:80px 20px;

}

.storeContainer{

  padding:60px;

}

.productGrid{

  display:grid;

  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

  gap:30px;

}

.productCard{

  background:white;

  padding:20px;

  border-radius:8px;

  text-align:center;

}

.productCard img{

  width:100%;

}

.buyButton{

  margin-top:10px;

  padding:10px 20px;

  background:black;

  color:white;

  border:none;

  cursor:pointer;

}

.contactContainer{

  padding:60px;

  text-align:center;

}
