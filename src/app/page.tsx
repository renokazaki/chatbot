"use client";
import { useState } from "react";

//コンポーネント
import { Center } from "./Components/Center/Center";
import { SideBar } from "./Components/SideBar/SideBar";
//タイプ
import { RoomDescription } from "@/app/types";

export default function Home() {
  //chatの配列を子コンポーネント間でやり取りするために使用
  const [roomChat, setRoomChat] = useState<RoomDescription[]>([]);

  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/5 overflow-y-auto bg-slate-300 hidden lg:block ">
        {/* //setを渡しコンポーネント内で設定 */}
        <SideBar setRoomChat={setRoomChat} />
      </div>
      <div className="w-full lg:w-4/5 overflow-y-auto ">
        {/* //setされた配列を渡しコンポーネント内で表示 */}
        <Center roomChat={roomChat} />
      </div>
    </div>
  );
}
