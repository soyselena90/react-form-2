import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
   const adminUser = {
      email: "qwe123@gmail.com",
      password: "qwe123",
   };

   const [user, setUser] = useState({ name: "", email: "" });
   const [error, setError] = useState("");

   const Login = (details) => {
      console.log(details);
      if (
         details.email == adminUser.email &&
         details.password == adminUser.password
      ) {
         console.log("logged in");
         setUser({
            name: details.name,
            email: details.email,
         });
      } else {
         console.log("detail do not match");
         setError("Details do not match");
      }
   };

   const Logout = () => {
      console.log("Log out");
      setUser({
         name: "",
         email: "",
      });
   };

   return (
      <div className="App">
         {user.email !== "" ? (
            <div className="welcome">
               <div className="welcome-box">
                  <h1>welcome</h1>
                  <span>{user.name}</span>
                  <button onClick={Logout}>Logout</button>
               </div>
            </div>
         ) : (
            <LoginForm Login={Login} error={error} />
         )}
      </div>
   );
}

export default App;
