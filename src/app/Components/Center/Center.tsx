"use client";
import { useState } from "react";
//タイプ
import { RoomDescription } from "@/app/types";

interface CenterProps {
  roomChat: RoomDescription[];
}

//params : room内に設定されたchatの配列
export const Center: React.FC<CenterProps> = ({ roomChat }) => {
  //chatの入力用
  const [text, setText] = useState("");
  //chatの入力用関数
  const handleSubmitText = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setText(""); // 送信後に入力をクリア
  };

  return (
    <>
      {/* room内のchat表示用 */}
      <div className="flex flex-col items-start ">
        {roomChat.map((chatItem) => (
          <div key={chatItem.id} className="p-4 mb-4 bg-blue-600 rounded-xl">
            {chatItem.chat}
          </div>
        ))}
      </div>

      {/* chat入力用 */}
      <form
        className="fixed flex justify-center bottom-0 bg-black p-4 w-full lg:w-4/5 "
        onSubmit={handleSubmitText}
      >
        <input
          className="w-5/6 h-12 py-4 border-double mr-12 border-4 border-indigo-600"
          placeholder="値を入力"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className="w-8 bg-amber-400 rounded-3xl">↑</button>
      </form>
    </>
  );
};
