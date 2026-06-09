import { useContext } from "react";
import { VideoContext } from "../../context/VideoContext";

export default function SummaryCard() {

  const { videoData } =
    useContext(VideoContext);

  return (
    <div className="bg-slate-900 p-6 rounded-xl">

      <h2 className="font-bold mb-3">
        Summary
      </h2>

      <p>
        {videoData?.summary ||
          "Process a video first"}
      </p>

    </div>
  );
}