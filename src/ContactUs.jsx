
import { useState } from "react";  // ✅ Import useState


const ContactUs = () => {
  const [formData, setFormData] = useState({  // ✅ Correct use of useState
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission (you can add your logic here)
    console.log(formData);
  };

  return (
    <div className="contact-us-page">
        
       
   

      <main className="contact-us-main">
        <section className="contact-form-section">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
              />
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>
      </main>

      

      <style>
        {`
          .contact-us-page {
            font-family: Arial, sans-serif;
            color: #333;
            padding: 20px;
          }

        

          .contact-us-main {
            padding: 30px 20px;
            background-color: #f5f5f5;
          }

          .contact-form-section h2 {
            font-size: 2rem;
            color: #333;
            margin-bottom: 20px;
          }

          .form-group {
            margin-bottom: 15px;
          }

          .form-group label {
            font-size: 1rem;
            color: #333;
            margin-bottom: 5px;
            display: block;
          }

          .form-group input, .form-group textarea {
            width: 100%;
            padding: 10px;
            font-size: 1rem;
            border-radius: 5px;
            border: 1px solid #ddd;
            box-sizing: border-box;
          }

          .form-group textarea {
            resize: vertical;
            min-height: 100px;
          }

          .submit-button {
            background-color: #40ADA8;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
          }

          .submit-button:hover {
            background-color: #2f8f87;
          }
            /* Responsive Design */
@media (max-width: 768px) {
  .contact-us-page {
    padding: 15px;
  }

  .contact-us-main {
    padding: 20px;
  }

  .contact-form-section h2 {
    font-size: 1.8rem;
  }

  .form-group input,
  .form-group textarea {
    font-size: 0.95rem;
    padding: 8px;
  }

  .submit-button {
    padding: 10px 18px;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .contact-us-page {
    padding: 10px;
  }

  .contact-us-main {
    padding: 15px;
  }

  .contact-form-section h2 {
    font-size: 1.5rem;
  }

  .form-group label {
    font-size: 0.9rem;
  }

  .form-group input,
  .form-group textarea {
    font-size: 0.9rem;
    padding: 7px;
  }

  .submit-button {
    padding: 10px 15px;
    font-size: 0.9rem;
  }
}

       
        `}
      </style>
    </div>
  );
};

export default ContactUs;