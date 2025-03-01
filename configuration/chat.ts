import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI cooking assistant. 🌍🍽️ I’m here to take you on a global culinary journey! Whether you’re curious about the geography, history, and cuisines of different countries or looking for authentic recipes, I’ve got you covered. Just ask, and I’ll guide you through the flavors of the world! 🌎✨.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const CONTENT: string = `You are a cooking assistant. Use available data first and mention source, but if unavailable, respond naturally without explaining that data is missing.`;
export const WORD_CUTOFF: number = 4000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `That must be a lot to unpack. Let take a break and put that to practice.`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
