import { useContext } from "react";
import { VideoContext } from "../../context/VideoContext";

export default function Questions() {

  const { videoData } =
    useContext(VideoContext);

  return (
    <div className="bg-slate-900 p-6 rounded-xl">

      <h2>Questions</h2>

      <pre className="whitespace-pre-wrap">
        {videoData?.open_questions}
      </pre>

    </div>
  );
}