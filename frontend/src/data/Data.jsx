//data.jsx
import But from "../components/But";
import { File, MessageSquare, PenTool, Shield, SquareCheckBig, Video, } from "lucide-react";
const CardArray = [
  {
    logo: File,
    title: "Real-Time Document Collaboration",
    desc: "Multiple users can edit documents simultaneously with automatic synchronization and conflict resolution.",
    but: <But />
  },
   {
    logo: Video,
    title: "Video Conferencing",
    desc: "High-quality video and audio calls with WebRTC technology for seamless communication.",
    but: <But />
  },
   {
    logo: PenTool,
    title: "Collaborative Whiteboard",
    desc: "Interactive digital whiteboard for brainstorming and visual collaboration in real-time.",
    but: <But />
  },
   {
    logo: SquareCheckBig,
    title: "Task Boards",
    desc: "Kanban-style task management with real-time updates and team assignment capabilities.",
    but: <But />
  },
   {
    logo: MessageSquare,
    title: "Integrated Team Chat",
    desc: "Persistent chat with support for text, emojis, and notifications for team communication",
    but: <But />
  },
   {
    logo: Shield,
    title: "Secure Authentication",
    desc: "JWT-based authentication with user roles and online/offline presence indicators.",
    but: <But />
  }
];

export default CardArray;
