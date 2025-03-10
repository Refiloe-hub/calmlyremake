const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <h1>Privacy Policy</h1>
      <p>Effective Date: 25 February 2025</p>

      <h2>1. Introduction</h2>
      <p>
        At Calmly, we respect your privacy and are committed to protecting your personal data. 
        This Privacy Policy explains how we collect, use, and protect your information.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        - Personal Information (e.g., name, email address)  
        - Usage Data (e.g., interactions with our chatbot)  
        - Cookies and Tracking Technologies  
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>
        We use your data to improve our services, provide personalized recommendations, and enhance your experience.  
        We do not sell or share your data with third parties without your consent.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your data from unauthorized access or disclosure.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You have the right to access, modify, or delete your data. To make any requests, contact us at support@calmly.com.
      </p>

      <h2>6. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Please check this page for the latest version.
      </p>

      <p>If you have any questions, contact us at support@calmly.com.</p>

      <style>
        {`
          .policy-container {
            padding: 20px;
            max-width: 800px;
            margin: auto;
            font-family: Arial, sans-serif;
          }

          h1, h2 {
            color: #333;
          }
        `}
      </style>
    </div>
  );
};

export default PrivacyPolicy;