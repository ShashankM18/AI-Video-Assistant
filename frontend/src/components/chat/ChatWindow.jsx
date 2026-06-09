import { useState } from "react";
import { askQuestion } from "../../api/videoApi";

export default function ChatWindow() {

  const [messages,setMessages] =
    useState([]);

  const [question,setQuestion] =
    useState("");

  const send = async () => {

    const res =
      await askQuestion(question);

    setMessages([
      ...messages,
      {
        role:"user",
        text:question
      },
      {
        role:"assistant",
        text:res.data.answer
      }
    ]);

    setQuestion("");
  };

  return (
    <div className="bg-slate-900 rounded-xl h-[700px] flex flex-col">

      <div className="flex-1 overflow-y-auto p-4">

        {messages.map((m,i)=>(
          <div key={i}>
            <b>{m.role}</b>
            <p>{m.text}</p>
          </div>
        ))}

      </div>

      <div className="p-4 flex gap-2">

        <input
          value={question}
          onChange={(e)=>setQuestion(e.target.value)}
          className="flex-1 p-3 rounded bg-slate-800"
        />

        <button
          onClick={send}
          className="bg-indigo-600 px-5 rounded"
        >
          Send
        </button>

      </div>

    </div>
  );
}