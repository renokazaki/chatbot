import { Center } from "./Components/Center/Center";
import { SideBar } from "./Components/SideBar/SideBar";

export default function Home() {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/5 overflow-y-auto bg-red-300">
        <SideBar />
      </div>
      <div className="w-4/5 overflow-y-auto">
        <Center />
      </div>
    </div>
  );
}
