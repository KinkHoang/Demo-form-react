import "./App.css";
import React  from 'react';
import "antd/dist/antd.css";

import HomePage from "./pages/HomePage";

function App() {
  const userName = "Tuấn";

  return (
    <div className="app">
      <HomePage name={userName} age={10} />
    </div>
  );
}

export default App;
