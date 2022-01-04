import Header from "./Components/header";
import Body from "./Components/Body";
import Extra from "./Components/Extra";
// import "./Components/Extra";

export default function app() {
  return (
    <div>
      <Header></Header>
      <div className="row">
        <div className="col-3">
          <Body></Body>
        </div>
        <div className="col-3">
          <Body></Body>
        </div>
        <div className="col-3">
          <Body></Body>
        </div>
        <div className="col-3">
          <Body></Body>
        </div>
        </div>
    </div>
  );
}


