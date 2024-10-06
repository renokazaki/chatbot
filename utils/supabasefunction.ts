import {supabase} from "./supabase"

//room取得用
export const getRoom = async () =>{
    const room = await supabase.from("room").select("*").order("id", { ascending: true }); // idで昇順に並べる
    return room
}
//room追加用
export const addRoom = async (room : string) =>{
    await supabase.from("room").insert({room:room})
}

//roomの詳細取得用
export const getRoomDescription = async (roomId : number) =>{
    const roomDescription = await supabase
    .from("roomDescription")
    .select("*")
    .eq("room_id", roomId)
    return roomDescription
}

//roomにチャット追加用
export const sentMessage = async (room_id : number,chat : string) =>{
    await supabase.from("roomDescription").insert({room_id:room_id,chat:chat})
}



// //削除用
// export const deleteTodo = async (id:number)=>{
//     await supabase.from("chat").delete().eq("id",id)
// }

// //更新用
// export const updateTodo = async (id:number,isCompleted:boolean)=>{
//     await supabase.from("chat").update({isCompleted:isCompleted}).eq("id",id)
// }