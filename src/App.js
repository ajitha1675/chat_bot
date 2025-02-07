import './App.css';
import gptLogo from './assets/assets/chatgpt.svg';
import addBtn from './assets/assets/add-30.png';
import msgIcon from './assets/assets/message.svg';
import home from './assets/assets/home.svg';
import saved from './assets/assets/bookmark.svg';
import rocket from './assets/assets/rocket.svg';

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
             <div className='listItems'><img src={home} alt=""className='listitemsImg'/>Home</div>
             <div className='listItems'><img src={saved} alt=""className='listitemsImg'/>Saved</div>
             <div className='listItems'><img src={rocket} alt=""className='listitemsImg'/>Upgrade to Pro</div>
         </div>
      </div>
      <div className='main'>

      </div>
    </div>
  );
}

export default App;
