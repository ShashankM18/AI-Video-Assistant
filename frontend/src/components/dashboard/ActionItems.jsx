import { useContext } from "react";
import { VideoContext } from "../../context/VideoContext";

export default function ActionItems() {

  const { videoData } =
    useContext(VideoContext);

  return (
    <div className="bg-slate-900 p-6 rounded-xl">

      <h2>Action Items</h2>

      <pre className="whitespace-pre-wrap">
        {videoData?.action_items}
      </pre>

    </div>
  );
}