"use client";
import { useState, useEffect } from "react";

export default function IntegrationTokenManager() {
  const [openAiKey, setOpenAiKey] = useState("");  
  const [status, setStatus] = useState("");  

  useEffect(() => {
    fetch("/api/admin/openai-key")
      .then((res) => res.json())
      .then((data) => setOpenAiKey(data.key || ""));
  }, []);

  const saveKey = async () => {
    const res = await fetch("/api/admin/openai-key", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: openAiKey }),
    });
    if (res.ok) setStatus("Saved successfully!");
    else setStatus("Error saving key.");
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">OpenAI API Key</h2>
      <input
        type="password"
        value={openAiKey}
        onChange={(e) => setOpenAiKey(e.target.value)}
        placeholder="sk-..."
        className="w-full p-2 border rounded mb-2"
        aria-label="OpenAI API Key Input"
      />
      <button onClick={saveKey} className="px-4 py-2 bg-blue-600 text-white rounded">
        Save Key
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}
