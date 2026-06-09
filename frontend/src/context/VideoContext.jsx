import { createContext, useState } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videoData, setVideoData] = useState(null);

  return (
    <VideoContext.Provider
      value={{
        videoData,
        setVideoData,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};