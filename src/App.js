

import New from "./Components/New";

export default function app() {
  return (
    <div>
      <div>
        <h1>Hello world</h1>
        <New></New>
      </div>
      <div>
        <Para></Para>
      </div>
    </div>
  );
}


export function Para(){
    return(
        <div className="col">
        <p>Hello every one</p>
    </div>
    )     
}

