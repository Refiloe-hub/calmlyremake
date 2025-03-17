import './index.css';
import { Link } from "react-router-dom";
import AIChat from "./AIChat"; 


const handleLearnMoreClick = () => {
  window.location.href = "/WellnessTips";
};

const Index = () => {
  return (
    <>
      <div className="landing-page">
    
        
        {/* Header Section */}
        
        <main className="landing-main">
          <section className="hero">
            <div className="text-content">
              <h2>No 1 for Mental Health</h2>
              <h1>Discover the Serenity with AI Support</h1>
              <p>
                Enhance your mental well-being with personalized advice from Calmly.
              </p>
              <button className="cta-button">
  <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>Sign up today</Link>
</button>
            </div>
            <div className="image-content">
              <img
                src="/mentalpic.png"
                alt="Mental Health Illustration"
              />
            </div>
          </section>

          <section className="cta-banner">
            <p>
              The no 1 Chatbot for instant stress relief. As recognized by mental
              health experts and wellness platforms.
            </p>
          </section>
          {/* Features Section */}
      <section className="features-section">
        <div className="features-heading">
          <h2>Discover our features</h2>
          <p>
            Unlock holistic mental wellbeing solutions with our advanced
            chatbot
          </p>
        </div>

        <div className="features-grid">
          {[
            {
              title: "Stress Relief",
              description: "Effective stress relief techniques for a clearer mind",
            },
            {
              title: "Guided Meditations",
              description: "Engage in daily guided meditations",
            },
            {
              title: "Process Tracking",
              description:
                "Track your process towards treating your mental wellness",
            },
            {
              title: "Mindfulness Tips",
              description:
                "Daily mindfulness tips to your mental well-being",
            },
            {
              title: "Mood Tracker",
              description:
                "Monitor your mental health with daily mood inputs",
            },
            {
              title: "Calm Exercises",
              description:
                "Guided breathing to help you regain calm and focus",
            },
            {
              title: "Personal Journal",
              description:
                "Secure and private journal to capture your thoughts",
            },
            {
              title: "Daily Check-Ins",
              description:
                "Daily reflections to track mood and progress",
            },
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link to="/WellnessTips" className="learn-more">Learn more</Link>
            </div>
          ))}
        </div>
      </section>
      {/* New Section for Emotional Support, Stress Relief, and Mindful Practices */}
       {/* New Section for Emotional Support, Stress Relief, and Mindful Practices */}
       <section className="mental-health-features">
            <h2>Transform your mental well-being with AI</h2>
            <p>Empower your mind with personalized stress management and mindful practices</p>

            <div className="mental-health-feature-cards">
              <div className="mental-feature-card">
                <img src="/mental1.png" alt="Emotional Support" />
                <h3>Emotional Support</h3>
                <p>Provide compassionate support to help manage emotional well-being.</p>
                <button className="learn-more" onClick={handleLearnMoreClick}>Learn more</button>
              </div>

              <div className="mental-feature-card">
                <img src="/brain2.png" alt="Stress Relief" />
                <h3>Stress Relief</h3>
                <p>Offer real-time stress relief techniques tailored to your needs and situations.</p>
                <button className="learn-more" onClick={handleLearnMoreClick}>Learn more</button>
              </div>

              <div className="mental-feature-card">
                <img src="/brokenheart.png" alt="Mindful Practices" />
                <h3>Mindful Practices</h3>
                <p>Tailored exercises to relax and enhance mental clarity every day.</p>
                <button className="learn-more" onClick={handleLearnMoreClick}>Learn more</button>
              </div>
            </div>
          </section>
          <section className="user-testimonials">
  <h2>User Testimonials</h2>
  <p>Real stories from users who found solace and support</p>

  <div className="testimonial-card">
    <img src="/aiwhitewoman.jpg" alt="User photo" className="testimonial-image" />
    <div className="testimonial-text">
      <p>
        Using this mental wellbeing chatbot has transformed my life. Its guided mindfulness
        exercises and stress management tips have created a calm and balanced environment
        for me. I never realized how pivotal mental health support could be in reclaiming
        my productivity and happiness until now.  - Dr Winburg
      </p>
    </div>
  </div>
</section>
<section className="wellness-journey">
  <h2>Join our wellness journey</h2>
  <p>Never miss an update from our mental well-being community</p>
  
  <div className="subscription-form">
    <input
      type="email"
      placeholder="yourname@wellness.com"
      className="email-input"
    />
    <button className="subscribe-button">Sign up</button>
  </div>
</section>

        </main>
        <AIChat />
       
     


      </div>

     
     
    </>
  );
};

export default Index;