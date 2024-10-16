import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI("AIzaSyBGgdd3oxXhtMq9VYa_8h2_CnIq6OnTXd0");
export const gemini = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

