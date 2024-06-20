import { ChatMessage } from "@/types/ChatMessage";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const api = new OpenAI({
  organization: "org-ZcHm7uC3kZo0V57fMu383uIs",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
})


export const openai = {
  generate: async (messages: ChatCompletionMessageParam[]) => {
    try {
      const completion = await api.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        messages,
      });
      return completion?.choices[0]?.message?.content;
    } catch (error) {
      return undefined;
    }
  },
  translateMessages: (messages: ChatMessage[]) => {
    const reqMessages: ChatCompletionMessageParam[] = [];
    for (const message of messages) {
      reqMessages.push({
        role: message.author === "me" ? "user" : "assistant",
        content: message.body,
      });
    }
    return reqMessages;
  },
};
