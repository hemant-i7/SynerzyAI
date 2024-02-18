import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import   Configuration  from "openai";
import { OpenAI } from "openai";



const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY 

})


export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages  } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    

   

  

   
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
