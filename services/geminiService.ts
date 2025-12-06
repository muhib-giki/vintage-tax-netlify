import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the client
// Note: In a real deployment, ensure process.env.GEMINI_API_KEY is set.
// console.log("process.env.GEMINI_API_KEY_KEY: ", process.env.GEMINI_API_KEY_KEY);

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log("API_KEY: ", API_KEY);
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Vincent", the virtual assistant for Vintage Tax, a prestigious US taxation and accounting firm.
Your tone should be professional, reassuring, concise, and authoritative yet polite.
You assist users with general tax concepts, explaining services Vintage Tax might offer (Bookkeeping, Personal Tax, Corporate Tax, Estate Planning), and answering basic US tax questions based on current regulations.

IMPORTANT RULES:
1. Always include a brief disclaimer that you are an AI and this is not professional legal or financial advice.
2. If a user asks about specific personal financial details, kindly suggest they book a consultation with our human experts via the Contact page.
3. Keep answers relatively short (under 200 words) unless asked for a detailed explanation.
4. Format your responses with clear paragraphs or bullet points where necessary.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<string>> => {
  const chat = getChatSession();
  
  try {
    const resultStream = await chat.sendMessageStream({ message });
    
    // Return an async iterable that yields text chunks
    return {
      [Symbol.asyncIterator]: async function* () {
        for await (const chunk of resultStream) {
          const responseChunk = chunk as GenerateContentResponse;
          if (responseChunk.text) {
            yield responseChunk.text;
          }
        }
      }
    };
  } catch (error) {
    console.error("Error interacting with Gemini:", error);
    throw error;
  }
};

export const resetChatSession = () => {
  chatSession = null;
};