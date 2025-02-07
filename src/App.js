import './App.css';
import gptLogo from './assets/assets/chatgpt.svg';
import addBtn from './assets/assets/add-30.png';
import msgIcon from './assets/assets/message.svg';
import home from './assets/assets/home.svg';
import saved from './assets/assets/bookmark.svg';
import rocket from './assets/assets/rocket.svg';
import sendBtn from './assets/assets/send.svg';
import userIcon from './assets/assets/user-icon.png';
import gptImgLogo from './assets/assets/chatgptLogo.svg';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
         <div className='upperSide'>
            <div className='upperSideTop'><img src={gptLogo} alt='logo' className='logo'/>
            <span className='brand'>
                  Chat Bot
            </span>
            <button className='midBtn'><img src={addBtn} alt='new chat' className='addBtn'/>New Chat</button>
              <div className='upperSideBottom'>
                 <button className='query'><img src={msgIcon} alt='Query'/>What is Programming?</button>
                 <button className='query'><img src={msgIcon} alt='Query'/>How do use an API?</button>
              </div>
            </div>
         </div>
         <div className='lowerSide'>
             <div className='listItems'><img src={home} alt=""className='listItemsImg'/>Home</div>
             <div className='listItems'><img src={saved} alt=""className='listItemsImg'/>Saved</div>
             <div className='listItems'><img src={rocket} alt=""className='listItemsImg'/>Upgrade to Pro</div>
         </div>
      </div>
      <div className='main'>
           <div className='chats'>
             <div className='chat'>
              <img src={userIcon} alt=''/><p className='text'>Profiler </p>
             </div>
             <div className='chat'>
              <img src={gptImgLogo} alt=''/><p className='text'>lorem </p>
             </div>
           </div>
           <div className='chatFooter'>
               <div className='inp'>
                    <input type='text' placeholder='Send a message' name='' id=''/><button className='send'><img src={sendBtn} alt='send' /></button>
               </div>
               <p>Chat Bot may produce inaccurate information about people, places, or facts.  Chat Bot Feb 25 version.</p>
           </div>
      </div>
    </div>
  );
}

export default App;
