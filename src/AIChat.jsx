import { useState, useEffect, useRef } from "react";
import { FiMinus, FiMaximize, FiX } from "react-icons/fi";

const AIChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const chatRef = useRef(null);

  // Predefined rules for the chatbot
  const rules = {
    // Greeting variations
    "hey": {
      response: "Hi there! How are you today?",
      next: ["how are you", "anxiety", "depression", "trauma", "wellness", "motivational"]
    },
    "hi": {
      response: "Hi there! How are you today?",
      next: ["how are you", "anxiety", "depression", "trauma", "wellness", "motivational"]
    },
    "hello": {
      response: "Hi there! How are you today?",
      next: ["how are you", "anxiety", "depression", "trauma", "wellness", "motivational"]
    },
    "how are you": {
      response: "I'm doing great! What can I help you with today? You can ask about anxiety, depression, trauma, or wellness tips.",
      next: ["anxiety", "depression", "trauma", "wellness"]
    },
    // Variations for user feeling response
    "i am good": {
      response: "Great to hear! What would you like to talk about today?",
      next: ["anxiety", "depression", "trauma", "wellness"]
    },
    "i am fine": {
      response: "That's great to hear! What can I help you with today?",
      next: ["anxiety", "depression", "trauma", "wellness"]
    },
    "i am great": {
      response: "Awesome! What would you like to talk about today?",
      next: ["anxiety", "depression", "trauma", "wellness"]
    },
    "anxiety": {
      response: "I'm really sorry to hear you're feeling anxious. Let's start with how you're feeling. Do you have symptoms you'd like to share?",
      next: ["yes","Excessive worry", "Difficulty breathing", "Panic Attack","Dizziness","Throwing up"]
    },
    "Yes": {
      response: "Common symptoms of anxiety include restlessness, excessive worry, rapid heartbeat, and trouble concentrating. How are you feeling right now?",
      next: ["how can I manage anxiety", "how can I overcome this"]
    },
    "how can I manage anxiety": {
      response: "One way to manage anxiety is by practicing mindfulness or deep breathing exercises. Would you like some tips on mindfulness?",
      next: ["mindfulness", "breathing exercises"]
    },
    "how can I overcome this": {
      response: "Panic attacks can be overwhelming. Try to focus on your breathing and ground yourself. Would you like more techniques to manage a panic attack?",
      next: ["breathing exercises", "support","yes","yes please"]
    },
    "depression": {
      response: "I'm really sorry you're feeling down. Depression can be tough. How have you been feeling? Would you like to talk about your symptoms?",
      next: ["depression symptoms", "how to manage depression", "support"]
    },
    "depression symptoms": {
      response: "Common symptoms of depression include sadness, hopelessness, and losing interest in things you once enjoyed. What symptoms are you experiencing?",
      next: ["how to manage depression", "support"]
    },
    "how to manage depression": {
      response: "Managing depression can include staying connected with loved ones, practicing self-care, and seeking therapy. Would you like tips on self-care?",
      next: ["self-care tips", "support"]
    },
    "trauma": {
      response: "I'm really sorry to hear you're experiencing trauma. It can be overwhelming. How are you coping with it?",
      next: ["post-traumatic stress disorder", "survivor guilt", "healing from trauma"]
    },
    "post-traumatic stress disorder": {
      response: "PTSD can cause flashbacks and intense feelings of anxiety. It's important to seek support from a therapist. Would you like to talk more about this?",
      next: ["healing from trauma", "support"]
    },
    "healing from trauma": {
      response: "Healing from trauma often involves seeking therapy and finding healthy coping mechanisms. Would you like some resources on how to heal from trauma?",
      next: ["support"]
    },
    "wellness": {
      response: "Wellness is all about balance. Some tips: 1) Exercise regularly, 2) Practice mindfulness, 3) Get enough sleep, 4) Eat balanced meals. How are you feeling today?",
      next: ["self-care tips", "relaxation techniques"]
    },
    "self-care tips": {
      response: "Self-care is important for mental well-being. You could try meditation, taking walks, or setting time for hobbies. Would you like some more ideas?",
      next: ["wellness", "support"]
    },
    "relaxation techniques": {
      response: "Try progressive muscle relaxation: Start by tensing and releasing each muscle group, starting with your feet. Would you like to hear more relaxation exercises?",
      next: ["wellness", "support"]
    },
    "support": {
      response: "Remember, you're not alone. It's okay to ask for help, and talking to a professional can make a big difference. Would you like some resources on mental health support?",
      next: []
    },
    "default": {
      response: "Sorry, I didn't quite understand that. Could you please rephrase?",
      next: []
    }
  };


  function getBotResponse(input) {
    const sanitizedInput = input.toLowerCase().trim();
    if (rules[sanitizedInput]) {
      return rules[sanitizedInput].response;
    }
    return rules.default.response;
  }

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const botResponse = getBotResponse(input); // Get bot response
    const botMessage = { text: botResponse, sender: "ai" };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setInput(""); // Clear input field
  };

  // Auto-scroll chatbox to the latest message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} style={styles.floatingButton}>
          Chat
        </button>
      )}

      {isOpen && (
        <div style={{ ...styles.chatContainer, height: isMinimized ? "40px" : "400px" }}>
          <div style={styles.chatHeader}>
            <span>Iggy</span>
            <div style={styles.controls}>
              <FiMinus style={styles.icon} onClick={() => setIsMinimized(!isMinimized)} />
              <FiMaximize style={styles.icon} onClick={() => setIsMinimized(false)} />
              <FiX style={styles.icon} onClick={() => setIsOpen(false)} />
            </div>
          </div>

          {!isMinimized && (
            <div ref={chatRef} style={styles.chatMessages}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.message,
                    backgroundColor: msg.sender === "user" ? "#007bff" : "#444",
                    alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <strong>{msg.sender === "user" ? "You" : "AI"}:</strong> {msg.text}
                </div>
              ))}
            </div>
          )}

          {!isMinimized && (
            <div style={styles.chatInputContainer}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                style={styles.input}
              />
              <button onClick={sendMessage} style={styles.sendButton}>
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

// Styles
const styles = {
  floatingButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#0000FF",
    color: "#fff",
    border: "none",
    padding: "15px 25px",
    borderRadius: "30px",
    cursor: "pointer",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
    fontSize: "18px",
    fontWeight: "bold",
  },
  chatContainer: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "350px",
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(199, 191, 191, 0.2)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  chatHeader: {
    backgroundColor: "#0000FF",
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  controls: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    cursor: "pointer",
    color: "#fff",
    fontSize: "18px",
  },
  chatMessages: {
    flex: "1",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    maxHeight: "300px",
    overflowY: "auto",
  },
  message: {
    padding: "8px",
    borderRadius: "5px",
    maxWidth: "80%",
    color: "#fff",
  },
  chatInputContainer: {
    display: "flex",
    borderTop: "1px solid #444",
    padding: "10px",
    backgroundColor: "#333",
  },
  input: {
    flex: "1",
    padding: "8px",
    border: "none",
    borderRadius: "5px",
    marginRight: "8px",
    outline: "none",
  },
  sendButton: {
    backgroundColor: "#0000FF",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AIChat;
