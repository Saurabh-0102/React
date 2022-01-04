import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {

  let [mess, setmess] = useState("type here");  

  let [list,setlist] = useState([]);

    const tweet =  () => {
        let newlist= [...list, mess];
        setlist(newlist);
        setmess("");
    }
    
    const newmess = (e) => {
        let newval = e.target.value;
        setmess(newval);
    }

    const deletetweet = () => {
        list.splice(0,1);
        const newlist = [...list]
        setlist(newlist);
    }

  return (
    <div>
      <input type="text" value={mess} onChange={newmess} />
      <input type="button" value="click me" onClick={tweet} />
      <input type="button" value="delete" onClick={deletetweet}/> 
      {list.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}
