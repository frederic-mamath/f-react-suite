import React from "react";

import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Button
        text="Hello"
        onClick={() => {
          console.log("Hello");
        }}
      />
    </div>
  );
};

export default App;
