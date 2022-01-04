import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setnumber] = useState("");

  const [userlist, setuser] = useState([]);

  const proemail = (e) => {
    setemail(e.target.value);
  };

  const propass = (e) => {
    setPassword(e.target.value);
  };

  const pronum = (e) => {
    setnumber(e.target.value);
  };

  const register = () => {
    const user = {
      email: email,
      password: password,
      number: number,
    };
    const newuser = [user, ...userlist];
    setuser(newuser);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={email}
          placeholder="Enter Email"
          onChange={proemail}
        />
      </div>
      <div>
        <input
          type="text"
          value={password}
          placeholder="Enter Password"
          onClick={propass}
        />
      </div>
      <div>
        <input
          type="text"
          value={number}
          placeholder="Enter Mobile Number"
          onClick={pronum}
        />
      </div>
      <div>
        <input type="button" value="Submit" onClick={register} />
      </div>

      {userlist.map((item) => (
        <div>
          {" "}
          {item.email}, {item.password}, {item.number}{" "}
        </div>
      ))}
    </div>
  );
}
