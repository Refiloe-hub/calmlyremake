const TermsConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p>Effective Date: 25 February 2025</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Calmly! By using our services, you agree to abide by these terms and conditions.
      </p>

      <h2>2. Use of Service</h2>
      <p>
        Our services are intended for personal well-being. You agree not to misuse or exploit the platform.
      </p>

      <h2>3. User Responsibilities</h2>
      <p>
        - Do not use the platform for illegal activities.  
        - Do not share false or misleading information.  
        - Respect other users and follow community guidelines.  
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        We provide this service as-is. We are not responsible for any damages resulting from its use.
      </p>

      <h2>5. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the service constitutes acceptance of the new terms.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about these Terms, contact us at support@calmly.com.
      </p>

      <style>
        {`
          .terms-container {
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

export default TermsConditions;