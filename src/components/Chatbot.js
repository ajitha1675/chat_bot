 import React from 'react'
 
 function Chatbot() {
   const [messages, setMessages] = React.useState([
      {
        message: "Hi, May i have your name?"
      }
   ])
   return (
     <div>
        <div className='d-flex items-center justify-content-center'>
          <img src='./public/th(3).jpeg' alt='logo'
          height={200}
          width={200}>
          </img>
          <h2 className='text-primary'>Chatbot</h2>
        </div>
        <div className='chat-message '> 
           {
            messages.length>0 && messages.map((data) => <div>data</div>)
           }
           <div className='d-flex'>
              <input type='search'/>
           </div>
        </div>
     </div>
   )
 }
 
 export default Chatbot
 