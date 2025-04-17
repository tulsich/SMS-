// src/models/Message.js
class Message {
    constructor(id, sender, title, body, date) {
      this.id = id;
      this.sender = sender;
      this.title = title;
      this.body = body;
      this.date = date;
    }
  
    getFormattedDate() {
      return new Date(this.date).toLocaleDateString();
    }
  }
  
  export default Message;
  