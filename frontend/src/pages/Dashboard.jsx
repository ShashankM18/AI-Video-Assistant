import MainLayout from "../components/layout/MainLayout";
import VideoInput from "../components/upload/VideoInput";
import SummaryCard from "../components/dashboard/SummaryCard";
import ActionItems from "../components/dashboard/ActionItems";
import Decisions from "../components/dashboard/Decisions";
import Questions from "../components/dashboard/Questions";
import ChatWindow from "../components/chat/ChatWindow";

export default function Dashboard() {
  return (
    <MainLayout>

      <div className="p-6 grid grid-cols-12 gap-6">

        <div className="col-span-4 space-y-6">

          <VideoInput />
          <SummaryCard />
          <ActionItems />
          <Decisions />
          <Questions />

        </div>

        <div className="col-span-8">

          <ChatWindow />

        </div>

      </div>

    </MainLayout>
  );
}