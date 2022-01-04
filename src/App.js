import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  
  const [ajexList,setAjexList] = useState([]);

  const ajexCall = async () => {
     const url = "https://jsonplaceholder.typicode.com/posts";
     const response = await fetch(url);
     const res = await response.json();
     setAjexList(res);
  };

    return (
      <div>
        <h3>Hello react and ajex</h3>
        <input type="button" value="Get data" onClick={ajexCall} />

      {ajexList.map((item) => (
         <div> {item.title} </div> 
         
      ))}
      </div>
    )
}
