
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiResponse = async (history: Message[], prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `Вы — эксперт-нарколог и историк, специализирующийся на теме некурительных табачных изделий, в частности насвая. 
        Ваша цель — предоставлять исключительно научные, достоверные факты о его составе, вреде для здоровья, истории происхождения и способах избавления от зависимости. 
        Ваш тон должен быть серьезным, информативным и предупреждающим. 
        Никогда не рекламируйте употребление табака. 
        Отвечайте на русском языке.`,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "Извините, я не смог обработать ваш запрос.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Произошла ошибка при соединении с экспертным центром. Пожалуйста, попробуйте позже.";
  }
};
