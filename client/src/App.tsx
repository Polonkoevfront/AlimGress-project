import { useEffect, useState } from "react";
import { Routing } from "./App/provider";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    axios.get("")
    .then(response => setMessage(response.data.message))
    .catch(error => console.error(error)
    )
  })

  return (
    <div className="App">
      <Routing/>


    </div>  
  );
}

export default App;
