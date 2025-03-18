import { Link } from "react-router-dom";


const HowItWorks = () => {
  return (
    <div>
      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="how-it-works-heading">
          <h2>The Process Overview</h2>
          <p>Discover how Be Alive empowers your mental well-being in 3 simple steps.</p>
        </div>

        <div className="steps-grid">
          {/* Step 1 - Sign Up */}
          <Link to="/signup" className="step-card">
            <div className="step-icon">📋</div>
            <h3>Step 1: Sign Up</h3>
            <p>Create a personalized profile to get tailored recommendations.</p>
          </Link>

          {/* Step 2 - Chat with AI */}
          <Link to="/AIChat" className="step-card">
            <div className="step-icon">🤖</div>
            <h3>Step 2: Chat with our personalized chatbot Iggy</h3>
            <p>Interact with our chatbot for stress relief and mindfulness tips.</p>
          </Link>

          {/* Step 3 - Track Progress */}
          <Link to="/TrackProgress" className="step-card">
            <div className="step-icon">📈</div>
            <h3>Step 3: Track Progress</h3>
            <p>Monitor your mental health journey with our easy-to-use tools.</p>
          </Link>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to start your mental wellness journey?</h2>
        <button className="cta-button">
          <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>Get Started</Link>
        </button>
      </section>

      {/* Inline Styles */}
      <style>
        {`
          .how-it-works {
            padding: 50px 20px;
            text-align: center;
            background-color: #f5f5f5;
          }
          .how-it-works-heading h2 {
            font-size: 2rem;
            margin-bottom: 10px;
          }
          .how-it-works-heading p {
            font-size: 1.2rem;
            color: gray;
            margin-bottom: 30px;
          }
          .steps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }
          .step-card {
            background-color: #40ADA8;
            color: white;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-decoration: none;
            display: block;
          }
          .step-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
          }
          .step-icon {
            font-size: 3rem;
            margin-bottom: 10px;
          }
          .step-card h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }
          .step-card p {
            font-size: 1rem;
          }
          .cta-section {
            padding: 50px 20px;
            text-align: center;
            background-color: #40ADA8;
            color: white;
          }
          .cta-button {
            background-color: #40ADA8;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
            border: 2px solid #fff;
          }
          .cta-button:hover {
            background-color: #0056b3;
          }
          @media (max-width: 768px) {
            .steps-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HowItWorks;