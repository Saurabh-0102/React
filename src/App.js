import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [validate,setvalidate] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState("");

  const [userlist, setuser] = useState([]);



  const proemail = (e) => {
    setemail(e.target.value);
  };

  const propass = (e) => {
    setpassword(e.target.value);
  };

  const pronum = (e) => {
    setnumber(e.target.value);
  };

  const register = () => {
    
  if(email == ""|| password == "" || number == "" ){
    setvalidate(true);
    return;
  }

    const user = {
      email: email,
      password: password,
      number: number,
    };
    const newuser = [user, ...userlist];
    setuser(newuser);
    setemail("");
    setpassword("");
    setnumber("");

    setvalidate(false);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={proemail}
          className={ email == "" && validate  ? "border border-danger" : ""}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={propass}
          className={ email == "" && validate  ? "border border-danger" : ""}

        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={number}
          onChange={pronum}
          className={ email == "" && validate  ? "border border-danger" : ""}

        />
      </div>
      <div>
        <input type="button" value="Submit" onClick={register} />
      </div>

      {userlist.map((item) => (
        <div>
          {item.email}, {item.password}, {item.number}{" "}
        </div>
      ))}
    </div>
  );
}
