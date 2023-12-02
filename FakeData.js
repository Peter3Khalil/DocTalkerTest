
class Chat{
    constructor(id, name, messages, isStar=false, documentURL=""){
        this.id = id
        this.name = name
        this.messages = messages
        this.isStar = isStar
        this.documentURL = documentURL
    }
    //getChatObject
    getChatObject(){
        return {
            id: this.id,
            name: this.name,
            messages: this.messages,
            isStar: this.isStar,
            documentURL: this.documentURL
        }
    }
}
const messages= [
    { role: "user", content: "Hi" },
    { role: "assistant", content: "Hello" },
    { role: "user", content: "Hi Bot how are you?" },
    { role: "assistant", content: "I am fine, What About you my friend?, are you fine?" },
  ]
  export const chats = [new Chat(1, 'Chat 1',messages, false).getChatObject()]
for(let i=0; i<10; i++){
    chats.push(new Chat(i+2, `Chat ${i+2}`, messages, false).getChatObject())
}
