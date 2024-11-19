import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/auth/Login";
import Quora from "./components/Quora";
import { login, selectUser } from "./feature/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // Example placeholder for user session check
    const dummyUser = {
      userName: "Guest User",
      photo: "https://via.placeholder.com/150",
      email: "guest@example.com",
      uid: "12345",
    };

    // Simulating a login scenario
    dispatch(
      login({
        userName: dummyUser.userName,
        photo: dummyUser.photo,
        email: dummyUser.email,
        uid: dummyUser.uid,
      })
    );
    console.log("Dummy user logged in", dummyUser);
  }, [dispatch]);

  return (
    <div className="App">
      {user ? <Quora /> : <Login />}
    </div>
  );
}

export default App;
