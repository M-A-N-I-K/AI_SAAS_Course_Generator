// route.ts Route Handlers
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// POST localhost:3000/api/chat
export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Log incoming messages
    console.log("Incoming messages:", messages);

    // GPT-3.5-turbo system message
    const systemMessage = {
      role: "system",
      content:
        "You are a helpful assistant. You explain software concepts simply to intermediate programmers.",
    };

    // createChatCompletion (get response from GPT-3.5-turbo)
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messages],
    });

    // create a stream of data from OpenAI (stream data to the frontend)
    const stream = await OpenAIStream(response);

    // send the stream as a response to our client / frontend
    return new StreamingTextResponse(stream);
  } catch (error) {
    // Log and handle errors
    console.error("Error processing chat request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
