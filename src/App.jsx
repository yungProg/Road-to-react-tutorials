import * as React from "react";

const title = "React"

function App(){
  return(
    <div>
      <h1>Hello {title}</h1>
      <label for="name">Name</label>
      <input type="text" placeholder="Name" />
    </div>
  );
}

export default App;