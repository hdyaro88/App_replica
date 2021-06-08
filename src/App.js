import React, { useState } from "react";
import "./App.css";
import ItemList from "./Components/Content/ItemList";
import Header from "./Components/Header/Header";
import Header2 from "./Components/Header/Header2";
import Sidebar from "./Components/Sidebar/sidebar";
import Menu from "../src/Components/menu";
import Create from "./Components/Content/Create";
function App() {
  const [showCreate, setShowCreate] = useState(false);
  const ShowCreateHandler = () => {
    setShowCreate(true);
  };
  return (
    <React.Fragment>
      <Header />
      <Header2 />
      {!showCreate && <ItemList onShowCreate={ShowCreateHandler} />}
      {showCreate && <Create />}
      <Sidebar />
      {/* <Menu/> */}
    </React.Fragment>
  );
}

export default App;
