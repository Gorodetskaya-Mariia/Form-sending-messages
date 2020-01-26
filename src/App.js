import React from 'react';
import Logo from "./components/Logo/Logo.js";
import Form from "./components/Form/Form.js";

import "./App.css";

function App() {
  return (
    <div className="container">
			<h1 className="visually-hidden">Form for sending messages</h1>
      <Logo></Logo>
			<Form></Form>
    </div>
  );
}

export default App;
