import React, { useState } from "react";

export default function App() {
  return (
    <>
      <Products title="Rose" description="Wedding flower" Likes="5000" price = "13rs" />
      <Products title="Lotus" description="Function flower" Likes="6000" price = "14rs" />
      <Products title="Lily" description="Festival flower" Likes="7000" price = "15rs" />
    </>
  );
}

function MyCompenent() {
  return (
    <div>
      <h1>Working with input elements</h1>
      <input className="form-control" type="text" placeholder="Tweet here..." />
      <input type="button" value="Tweet" />
    </div>
  );
}

// function Products() {
//   return (
//     <div>
//       <h4> Flower details</h4>
//       {/* <p>Title : {this.props.title}</p> */}
//     </div>
//   );
// }

class Products extends React.Component {
  render() {
    return (
      <div>
        <h3>Flower details</h3>
        <p> Title : {this.props.title} </p>
        <p> Description : {this.props.description} </p>
        <p> Likes : {this.props.title} </p>
        <p> Likes : {this.props.price} </p>
      </div>
    );
  }
}
