const WellnessTips = () => {
  return (
    <div className="wellness-tips-page">
      {/* Main Content */}
      <main className="wellness-main">
        <section className="wellness-tips-section">
          <h2>Here are the top 15 wellness tips you can practice today 😊</h2>
          <ul>
            <li>
              <h3>1. Practice Mindfulness</h3>
              <p>Mindfulness helps you stay present in the moment, reducing stress and anxiety.</p>
            </li>
            <li>
              <h3>2. Exercise Regularly</h3>
              <p>Physical activity boosts your mood and helps release built-in tension.</p>
            </li>
            <li>
              <h3>3. Stay Hydrated</h3>
              <p>Drink plenty of water throughout the day to maintain mental clarity.</p>
            </li>
            <li>
              <h3>4. Get Enough Sleep</h3>
              <p>A good nights sleep is essential for your emotional and physical well-being.</p>
            </li>
            <li>
              <h3>5. Talk to Someone</h3>
              <p>Do not hesitate to reach out for support from friends, family, or a mental health professional.</p>
            </li>
            <li>
              <h3>6. Eat a Balanced Diet</h3>
              <p>A nutritious diet fuels your body and mind, enhancing overall well-being.</p>
            </li>
            <li>
              <h3>7. Take Regular Breaks</h3>
              <p>Stepping away from work or screens helps refresh your mind and prevents burnout.</p>
            </li>
            <li>
              <h3>8. Limit Screen Time</h3>
              <p>Reducing screen exposure, especially before bed, improves sleep quality and reduces eye strain.</p>
            </li>
            <li>
              <h3>9. Engage in a Hobby</h3>
              <p>Doing something you love, like painting, reading, or playing music, can relieve stress and boost happiness.</p>
            </li>
            <li>
              <h3>10. Practice Gratitude</h3>
              <p>Reflecting on what you are grateful for can shift your mindset and improve emotional resilience.</p>
            </li>
            <li>
              <h3>11. Connect with Nature</h3>
              <p>Spending time outdoors can lower stress levels and improve mental clarity.</p>
            </li>
            <li>
              <h3>12. Set Boundaries</h3>
              <p>Prioritize your well-being by saying no to things that overwhelm you and setting healthy personal and professional boundaries.</p>
            </li>
            <li>
              <h3>13. Stay Socially Connected</h3>
              <p>Maintaining strong relationships with family and friends enhances emotional well-being.</p>
            </li>
            <li>
              <h3>14. Laugh More</h3>
              <p>Laughter reduces stress, strengthens your immune system, and boosts your mood.</p>
            </li>
            <li>
              <h3>15. Practice Deep Breathing</h3>
              <p>Deep breathing exercises help calm your nervous system and reduce stress instantly.</p>
            </li>
          </ul>
        </section>
        
        {/* Resources Section */}
        <section className="resources-section">
          <h2>Additional Resources</h2>
          <p>If you are looking for more information on mental health and wellness, here are some resources:</p>
          <ul>
            <li><a href="https://www.mentalhealth.gov/" target="_blank" rel="noopener noreferrer">Mental Health.gov</a></li>
            <li><a href="https://www.psychologytoday.com/us/topics/mental-health" target="_blank" rel="noopener noreferrer">Psychology Today</a></li>
            <li><a href="https://www.nami.org/Home" target="_blank" rel="noopener noreferrer">National Alliance on Mental Illness</a></li>
          </ul>
        </section>
      </main>
      
     

      {/* Inline Styles */}
      <style>
        {`
          .wellness-tips-page {
            font-family: Arial, sans-serif;
            color: #333;
            padding: 20px;
          }

          

         
        

          .wellness-main {
            padding: 30px 20px;
            background-color: #f5f5f5;
          }

          .wellness-tips-section {
            margin-bottom: 40px;
          }

          .wellness-tips-section h2 {
            font-size: 2rem;
            color: #333;
            margin-bottom: 20px;
          }

          .wellness-tips-section ul {
            list-style-type: none;
            padding: 0;
          }

          .wellness-tips-section li {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
            padding: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .wellness-tips-section li:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
          }

          .wellness-tips-section h3 {
            font-size: 1.5rem;
            color: #40ADA8;
            margin-bottom: 10px;
          }

          .wellness-tips-section p {
            font-size: 1rem;
            color: #555;
          }

          .resources-section {
            margin-top: 40px;
          }

          .resources-section h2 {
            font-size: 2rem;
            color: #333;
            margin-bottom: 20px;
          }

          .resources-section ul {
            list-style-type: none;
            padding: 0;
          }

          .resources-section li {
            margin-bottom: 10px;
          }

          .resources-section a {
            text-decoration: none;
            color: #40ADA8;
            font-weight: bold;
          }

          .resources-section a:hover {
            text-decoration: underline;
          }
            /* Responsive Design */
@media (max-width: 768px) {
  .wellness-tips-page {
    padding: 15px;
  }

 

  .wellness-main {
    padding: 20px;
  }

  .wellness-tips-section h2, 
  .resources-section h2 {
    font-size: 1.8rem;
  }

  .wellness-tips-section li {
    padding: 15px;
  }

  .wellness-tips-section h3 {
    font-size: 1.3rem;
  }

  .wellness-tips-section p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
 
  .wellness-tips-page {
    padding: 10px;
  }

  .wellness-main {
    padding: 15px;
  }

  .wellness-tips-section h2, 
  .resources-section h2 {
    font-size: 1.5rem;
  }

  .wellness-tips-section h3 {
    font-size: 1.2rem;
  }

  .wellness-tips-section p {
    font-size: 0.85rem;
  }

  .resources-section a {
    font-size: 0.9rem;
  }
}

        `}
      </style>
    </div>
  );
};

export default WellnessTips;