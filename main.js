import { API_KEY } from "./env.js";
import { getPrompt } from "./prompt.js";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

const helpButton = document.querySelector("#help");
const helpBody = document.querySelector("#help-body");

if (helpButton && helpBody) {
  helpButton.addEventListener("click", async () => {
    helpBody.textContent = "Loading...";

    try {
      const promptText = getPrompt();
      const response = await groq.chat.completions.create({
        messages: [{ role: "user", content: promptText }],
        model: "llama-3.3-70b-versatile",
      });

      helpBody.textContent = response.choices[0].message.content;
    } catch (error) {
      console.error("Error:", error);
      helpBody.textContent = "Oops! Error aa gaya. API key check karein.";
    }
  });
}