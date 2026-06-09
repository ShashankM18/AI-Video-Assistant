import {
  LayoutDashboard,
  Upload,
  MessageSquare,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 p-4">

      <h1 className="text-2xl font-bold mb-8">
        AI Video
      </h1>

      <nav className="space-y-4">

        <button className="flex gap-3">
          <LayoutDashboard size={20}/>
          Dashboard
        </button>

        <button className="flex gap-3">
          <Upload size={20}/>
          Upload
        </button>

        <button className="flex gap-3">
          <MessageSquare size={20}/>
          Chat
        </button>

        <button className="flex gap-3">
          <Settings size={20}/>
          Settings
        </button>

      </nav>
    </div>
  );
}