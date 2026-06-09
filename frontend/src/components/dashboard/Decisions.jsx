import { useContext } from "react";
import { VideoContext } from "../../context/VideoContext";

export default function Decisions() {

  const { videoData } =
    useContext(VideoContext);

  return (
    <div className="bg-slate-900 p-6 rounded-xl">

      <h2>Decisions</h2>

      <pre className="whitespace-pre-wrap">
        {videoData?.key_decisions}
      </pre>

    </div>
  );
}