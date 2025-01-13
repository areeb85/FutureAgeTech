import Image from "next/image";
import Navbar from "@/app/Navbar/page";
import '@/app/styles/mains.css'; // Adjust the path as necessary

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    

    <main className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">FutureAge Tech</h1>
          <p className="hero-subtitle">Let us bring life to your Tech Dreams</p>
          <button className="hero-button">Get Started</button>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Custom Software Development</h3>
              <p className="service-description">Tailored solutions to meet your unique business needs</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Cloud Solutions</h3>
              <p className="service-description">Scalable and secure cloud infrastructure services</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Digital Transformation</h3>
              <p className="service-description">Modernize your business with cutting-edge technology</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <h2 className="section-title">Why Choose Future-Age-Tech?</h2>
          <p className="about-description">
            With over a decade of experience in delivering innovative software solutions,
            Future-Age-Tech has been at the forefront of digital transformation.
            We combine expertise with cutting-edge technology to help businesses thrive
            in the digital age.
          </p>
        </section>
      </main>
    


    </>
    
  );
}
