"use client";
import { useEffect, useState } from "react";

//部屋の名前取得用と部屋に登録されているchatの情報を取得,部屋を登録するfunction
import {
  getRoom,
  getRoomDescription,
  addRoom,
} from "../../../../utils/supabasefunction";

//タイプ
import { Room, RoomDescription } from "@/app/types";

interface SideBarProps {
  setRoomChat: (chatArray: RoomDescription[]) => void; // setRoomChatの型定義を修正
  setRoomId: (id: number) => void; // setRoomIdを関数として修正
}

//params : 親コンポーネントの配列set用のuseState
export const SideBar: React.FC<SideBarProps> = ({ setRoomChat, setRoomId }) => {
  //入力した値格納用
  const [title, setTitle] = useState("");
  //room名格納用
  const [roomName, setRoomName] = useState<Room[]>([]);

  //Room名取得用function
  const getRoomName = async () => {
    const texts = await getRoom();
    if (texts.data) {
      setRoomName(texts.data);
    }
  };
  //画面表示時にRoom名を表示するため
  useEffect(() => {
    getRoomName();
  }, []);

  //Room内のchatの配列格納用
  //paramsはroomの名前をクリックしたもののidを受け取る
  const getChat = async (roomId: number) => {
    const texts = await getRoomDescription(roomId);
    if (texts.data) {
      //親コンポーネントのset用useState使用
      setRoomChat(texts.data);
      setRoomId(roomId); // roomIdを直接セット
    }
  };

  //room設定用関数
  const handleSubmitTitle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //room追加
    await addRoom(title);
    setTitle(""); // 送信後に入力をクリア
    //room追加後に再取得
    getRoomName();
  };

  return (
    <div>
      {/* Room名入力欄 */}

      <div className="mb-16">
        <form
          className="fixed flex justify-start w-1/5 top-0"
          onSubmit={handleSubmitTitle}
        >
          <input
            className="h-12 w-4/5 py-4 border-double border-4 border-indigo-600"
            placeholder="値を入力"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button className="w-8 bg-amber-400 rounded-3xl">↑</button>
        </form>
      </div>

      {/* Room名表示欄 */}

      <div className="flex flex-col items-start ">
        {roomName.map((room) => (
          <div
            key={room.id}
            className="p-4 mb-4 bg-slate-500 rounded-xl"
            onClick={() => getChat(room.id)} // クリックしたルームのIDを親に渡す
          >
            {room.room}
          </div>
        ))}
      </div>
    </div>
  );
};
