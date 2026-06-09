import { useState, useContext } from "react";
import { processVideo } from "../../api/videoApi";
import { VideoContext } from "../../context/VideoContext";

export default function VideoInput() {
  const [url, setUrl] = useState("");

  const { setVideoData } =
    useContext(VideoContext);

  const handleProcess = async () => {

    const res = await processVideo({
      url,
      language: "english",
    });

    setVideoData(res.data);
  };

  return (
    <div className="bg-slate-900 rounded-xl p-6">

      <h2 className="text-xl mb-4">
        Process Video
      </h2>

      <input
        className="w-full p-3 rounded bg-slate-800"
        placeholder="Paste YouTube URL"
        value={url}
        onChange={(e)=>setUrl(e.target.value)}
      />

      <button
        onClick={handleProcess}
        className="mt-4 bg-indigo-600 px-5 py-3 rounded-lg"
      >
        Process
      </button>
    </div>
  );
}