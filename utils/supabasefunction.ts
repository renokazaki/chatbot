import {supabase} from "./supabase"

//取得用
export const getAllMsg = async () =>{
    const msg = await supabase.from("chat").select("*").order("id", { ascending: true }); // idで昇順に並べる
    return msg
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