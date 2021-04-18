import { React } from "react";
// import Chat from "./Components/Chat";
// import Sidebar from "./Components/Sidebar";
import ReducerDemo from "./DemoComponents/ReducerDemo";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <div className="app__body">
        <div className="app__chatArea">
          <Sidebar />
        </div>

        <div className="chatRoomArea">
          <Chat />
        </div>
      </div> */}
      <ReducerDemo />
    </div>
  );
}

export default App;
