import { GoogleGenAI } from "@google/genai";
import { GEMINI_API } from "./constants";


const gemini = new GoogleGenAI({
    apiKey: GEMINI_API,

});

export default gemini;