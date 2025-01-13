import Image from 'next/image';
import '@/app/styles/about.css'; // Import the CSS file

export default function About() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="about-title">About Us</h1>
        
        <section className="section">
          <div className="flex-container">
            <div className="image-container">
              <Image src="/images/whoweare.png" alt="About Us" width={200} height={100} className="image" />
            </div>
            <div className="text-container">
              <h2 className="section-title">Who We Are?</h2>
              <p className="section-text">
                An IT Enablement Company established in the Late 90's operating internationally.
              </p>
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="flex-container">
            <div className="text-container">
              <h2 className="section-title">Business Plan</h2>
              <p className="section-text">
                To technologically enable all our customers with our IT Products and Services.
              </p>
            </div>
            <div className="image-container">
              <Image src="/images/businessplan.png" alt="Business Plan" width={300} height={300} className="image" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}