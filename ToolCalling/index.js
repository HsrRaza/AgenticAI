import { Agent, run } from "@openai/agents";
import { OpenAI, }  from "openai/client.js";
import dotenv from "dotenv"

dotenv.config();

const agent = new Agent({
    name:"Hello agents",
    instructions:"You are an agent that always say hello with word with user Name "
})

run(agent, "Hey There. My name is Hassan ").then( (res)=>{
    console.log(res.finalOutput);
    
})