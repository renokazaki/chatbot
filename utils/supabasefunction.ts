import {supabase} from "./supabase"

//room取得用
export const getRoom = async () =>{
    const room = await supabase.from("room").select("*").order("id", { ascending: true }); // idで昇順に並べる
    return room
}

//roomの詳細取得用
export const getRoomDescription = async (roomId : number) =>{
    const roomDescription = await supabase
    .from("roomDescription")
    .select("*")
    .eq("room_id", roomId)
    return roomDescription
}



// //追加用
// export const addTodo = async (title : string, priority : number) =>{
//     await supabase.from("chat").insert({title:title,priority:priority})
// }

// //削除用
// export const deleteTodo = async (id:number)=>{
//     await supabase.from("chat").delete().eq("id",id)
// }

// //更新用
// export const updateTodo = async (id:number,isCompleted:boolean)=>{
//     await supabase.from("chat").update({isCompleted:isCompleted}).eq("id",id)
// }