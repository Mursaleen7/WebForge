require("dotenv").config();

import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

async function main() {

await anthropic.messages.stream({
  messages: [{role: 'user', content: "Code a basic to-do app"}],
  model: "claude-3-5-sonnet-20241022", 
  max_tokens: 1024, 
  temperature: 0, 
}).on('text', (text) => {
    console.log(text);
  });
}


main();