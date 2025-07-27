import React from 'react'
import Analytics from '../Components/Analytics'
function Home() {
  return (
   <>
   <main>
    <section className="section-hero">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <p>I am one of your great IT Helpers</p>
          <h1>Welcome to Sebastian Website</h1>
          <p>Are you ready to take your business to the next level with cutting-edge IT solutions? look no further ! At Sebastian, we specialize in providing innovative services such as feedback collection system FCS</p>
          <div className="btn btn-group">
            <a href="/contact"> <button className="btn">connect now</button> </a>
            <a href="/services"> <button className="btn secondary-btn">Learn more</button> </a>
          </div>
        </div>
 
      {/* Hero Section  */}

        <div className="hero-image">
          <img src="/home.png" alt="home image" width={400} height={500} />
        </div>       
      </div> 
    </section>
   </main>

  {/* Second Section */}

   <Analytics/>
   
   {/* Third Section */}
   <section className="section-hero">
      <div className="container grid grid-two-cols">
         {/* Hero Section  */}

         <div className="hero-image">
          <img src="/design.png" alt="home image" width={400} height={500} />
        </div>    
        <div className="hero-content">
          <p>I am here to help you</p>
          <h1>Get Started Today</h1>
          <p>Ready to take the first step towards a more efficient and secure FCS Contact us today for a free consultation and let's discuss how I Sebastian can help your business thrive in digital age.</p>
          <div className="btn btn-group">
            <a href="/contact"> <button className="btn">connect now</button> </a>
            <a href="/services"> <button className="btn secondary-btn">Learn more</button> </a>
          </div>
        </div>   
      </div> 
    </section>

   </>
  )
}

export default Home
