const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;


console.log("API Key Loaded:", API_KEY ? "Yes" : "No");
console.log("API Key:", API_KEY); // Debugging


export const fetchOpenAIResponse = async (message) => {
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
  const API_URL = "https://api.openai.com/v1/chat/completions";

  try {
      const response = await fetch(API_URL, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
              model: "gpt-4", // Ensure this matches your OpenAI plan
              messages: [{ role: "user", content: message }],
              max_tokens: 100,
          }),
      });

      const data = await response.json();
      console.log("Full API Response:", data);

      if (!response.ok) {
          throw new Error(`API Error: ${data.error?.message || "Unknown error"}`);
      }

      return data;
  } catch (error) {
      console.error("Fetch AI Response Error:", error);
      return null;
  }
};