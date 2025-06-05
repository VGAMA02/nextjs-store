import { env } from "app/config/env";
import OpenAI from "openai";


const client = new OpenAI({
    apiKey: env.OPEN_AI_KEY
});

const response = await client.responses.create({
    model: "gpt-4.1",
    input: "Write a one-sentence bedtime story about a unicorn.",
});

console.log(response.output_text);