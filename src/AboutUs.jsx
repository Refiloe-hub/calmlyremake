
const AboutUs = () => {
  return (
    <div className="about-us-page">
     

      <main className="about-us-main">
        <section className="about-us-section">
          <h2>Who We Are</h2>
          <p>
            Be Alive is a mental health platform designed to support your well-being through AI-powered
            solutions. Our mission is to provide accessible, personalized mental health support that
            empowers individuals to lead healthier and more balanced lives.
          </p>
        </section>

        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
            We believe in creating a world where mental health is prioritized and individuals have the
            resources they need to thrive emotionally and mentally. Our AI-driven chatbot offers personalized
            support, stress relief techniques, guided mindfulness exercises, and more to help you navigate lifes
            challenges with resilience.
          </p>
        </section>

        <section className="our-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, Be Alive was created by a team of passionate professionals in the fields of technology,
            psychology, and wellness. We are driven by the belief that mental health support should be accessible to
            everyone, at any time, and from anywhere.
          </p>
        </section>
      </main>

      

      <style>
        {`
          .about-us-page {
            font-family: Arial, sans-serif;
            color: #333;
            padding: 20px;
          }

        

          .about-us-main {
            padding: 30px 20px;
            background-color: #f5f5f5;
          }

          .about-us-section, .our-mission, .our-story {
            margin-bottom: 40px;
          }

          h2 {
            font-size: 2rem;
            color: #333;
            margin-bottom: 20px;
          }

          p {
            font-size: 1rem;
            color: #555;
          }
            /* Responsive Design */
@media (max-width: 768px) {
  .about-us-page {
    padding: 15px;
  }

  .about-us-main {
    padding: 20px;
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .about-us-page {
    padding: 10px;
  }

  .about-us-main {
    padding: 15px;
  }

  h2 {
    font-size: 1.6rem;
  }

  p {
    font-size: 0.9rem;
  }
}

        `}
      </style>
    </div>
  );
};

export default AboutUs;