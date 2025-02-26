import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI cooking assistant. I’d love to tell you about the geography, history, cuisines, and recipes of different countries! I have detailed profiles for several countries—just ask which ones I can help you with.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const CONTENT: string = `You are a cooking assistant. Use available data first and mention source, but if unavailable, respond naturally without explaining that data is missing.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
