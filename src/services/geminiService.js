const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent";

export async function askGemini(userMessage) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
  "Content-Type": "application/json",
  "X-goog-api-key": API_KEY,
},

      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `
You are HomePulse AI Nurse.

Rules:
- Be friendly.
- Answer like a professional nurse.
- Never claim to be a doctor.
- Never prescribe medicines.
- Recommend visiting a doctor whenever symptoms are serious.
- Keep answers concise and easy to understand.
- Use bullet points whenever useful.

User Question:

${userMessage}
                `,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
  const errorData = await response.json();
  console.error("Gemini API Error:", errorData);
  throw new Error(JSON.stringify(errorData));
}

    const data = await response.json();

    return (
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response."
    );
  } catch (error) {
    console.error(error);

    return "Unable to reach AI Nurse. Please try again later.";
  }
}