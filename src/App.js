import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
 
    let [message,setmessage] = useState("hello");

    const changemessage = (e) => {

        setmessage(e.target.value); 

    }

    return(
        <div>
            <input type="text" value={message} onChange={changemessage} />
            {/* <input type="button" value={post} /> */}
            <div>{message}</div>
            <div>{message}</div>
            <div>{message}</div>
            <div>{message}</div>
            <div>{message }</div>
        </div>
    )
}
