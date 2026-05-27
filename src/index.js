import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const initalFriends= [
  {id: 1, name: "karthi", blance:-7},
  {id: 2, name: "vicky", blance:20},
  {id: 3, name: "kalvi", blance:55},
];

  function App() {
   const [friends, setFriends] = useState(initalFriends);


function handleDeleteFriends(id) {
setFriends((prevFriends) => prevFriends.filter((f) => f.id !== id));
  console.log("delete logic for ID:" ,id);
}

function handleUpdateFriends(id, updateName) {
  setFriends((prevFriends) => 
  prevFriends.map((f) => (f.id === id ? {...f, name:updateName}: f)));
  console.log("Update logic for ID:", id);
}

function handleSettleUp(id) {
  setFriends((prevFriends) => 
  prevFriends.map((f) => (f.id === id ? {...f, blance: 0 } : f))
);
console.log("Settled up with ID:", id);

}

const totalBalance = friends.reduce((acc, f) => acc + f.balance, 0);


return (
    <div className="App">
      <header className="App-header">
        <h1>🍔 Eat N Split 🍕</h1>
        <button className="add-btn">+ Add Friend</button>
       </header>
        
          <ul className="friend-list">
            {friends.map((f) => (
              <li key={f.id} className="friend-card">
                <div className= "friend-info">
                  <span className= "friend-name">{f.name}</span>
                  <span
                  className= {`friend-balance ${f.balance < 0 ? "negative" : "positive"}`}
                  >
                    {f.blance < 0 
                    ? `You owe ₹${Math.abs(f.balance)}`
                    : ` Owes you ₹${f.balance}`}
                  </span>
                </div>
                <div className='friend-actions'>
                   <button className='update' onClick={() => handleUpdateFriends(f.id, "Update Name")}>Update</button>
               <button className='settle' onClick={() =>handleSettleUp(f.id)}>Settle</button>
                <button className='delete' onClick={() => handleDeleteFriends(f.id)}>Delete</button>
                 </div>
                  </li>
            ))}
          </ul>
        <footer className='total-footer'>
          <h3>Total Balance: ₹{totalBalance}</h3>
        </footer>
     
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

