"use client";

import { useEffect, useState } from "react";
import { getAllMsg } from "../../../../utils/supabasefunction";

export const Center = () => {
  interface chat {
    id: number;
    text: string;
  }

  const [text, setText] = useState("");
  const [chat, setChat] = useState<chat[]>([]);

  const handleSubmitText = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setText(""); // 送信後に入力をクリア
  };

  //情報取得用関数
  const getMsg = async () => {
    const texts = await getAllMsg();
    if (texts.data) {
      setChat(texts.data);
    }
  };

  useEffect(() => {
    getMsg();
  }, []);

  return (
    <>
      <div className="flex flex-col items-start ">
        Center
        {chat.map((chatItem) => (
          <div key={chatItem.id} className="p-4 mb-4 bg-blue-600 rounded-xl">
            {chatItem.text}
          </div>
        ))}
      </div>

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
