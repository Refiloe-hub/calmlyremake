const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const fetchOpenAIResponse = async (message) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";

  try {
      const response = await fetch(API_URL, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
              model: "gpt-3.5-turbo", // Ensure you have access to GPT-4 in OpenAI
              messages: [{ role: "user", content: message }],
              max_tokens: 100,
          }),
      });

      const data = await response.json();

      if (!response.ok) {
          throw new Error(`API Error: ${data.error?.message || "Unknown error"}`);
      }

      // Extract AI response
      return data.choices?.[0]?.message?.content || "I'm not sure how to respond to that.";
  } catch (error) {
      console.error("Fetch AI Response Error:", error);
      return "I'm having trouble responding at the moment. Please try again.";
  }
};
