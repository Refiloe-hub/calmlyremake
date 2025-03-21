import { useState } from "react";
import { signInWithGoogle, signInWithFacebook, auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>{isRegistering ? "Create an Account" : "Sign In"}</h2>

      <form onSubmit={handleEmailAuth}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">{isRegistering ? "Register" : "Sign In"}</button>
      </form>

      <p>OR</p>

      <div className="social-buttons">
        <button onClick={signInWithGoogle} className="google-btn">Sign in with Google</button>
        <button onClick={signInWithFacebook} className="facebook-btn">Sign in with Facebook</button>
      </div>

      <p onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Already have an account? Sign in" : "Don't have an account? Register"}
      </p>

      <style>
        {`
          .signup-container {
            text-align: center;
            max-width: 400px;
            margin: auto;
            padding: 20px;
            background: #f4f4f4;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          input {
            display: block;
            width: 100%;
            padding: 12px;
            margin-bottom: 12px;
            border-radius: 8px;
            border: 2px solid #ccc;
            transition: border 0.3s;
            font-size: 16px;
          }

          input:focus {
            border-color: #007bff;
            outline: none;
          }

          button {
            width: 100%;
            padding: 12px;
            margin-top: 10px;
            border-radius: 12px;
            border: 2px solid #007bff;
            font-size: 16px;
            transition: background-color 0.3s, border-color 0.3s;
          }

          button:hover {
            background-color: #007bff;
            color: white;
            border-color: #0056b3;
          }

          .google-btn {
            background-color: #db4437;
            color: white;
          }

          .google-btn:hover {
            background-color: #c1351d;
          }

          .facebook-btn {
            background-color: #3b5998;
            color: white;
          }

          .facebook-btn:hover {
            background-color: #2d4373;
          }

          .social-buttons {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
          }

          p {
            cursor: pointer;
            color: blue;
            font-size: 14px;
            margin-top: 10px;
          }

          /* Responsive Design */
          @media (max-width: 600px) {
            .signup-container {
              width: 90%;
              padding: 15px;
            }

            input {
              font-size: 14px;
              padding: 10px;
              width: 315px;
            }

            button {
              font-size: 14px;
              padding: 10px;
            }

            .social-buttons {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Signup;
