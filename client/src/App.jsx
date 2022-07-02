import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState("random text");

  const sendMessagetoSlack = async () => {
    console.log("start");
    const response = await axios.post("http://localhost:8000/", { text });
    if (!response) {
      console.error("Problem");
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    sendMessagetoSlack();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Text to Send to Discord
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}

export default App;
// https://discord.com/api/webhooks/992774782091264090/KtcQyL9QaOIqbdeJqbVhQSpqNq3a_g9qKCJ7znD4rnDlBeCIvpgXQuqlH1TWqZEP5uqK

// https://discord.com/api/v9/channels/992774733038882926/messages

// 992774733038882926

// "OTkyNzcxODM3NjQzNzE4Njc3.GSYkGO.LtNwDmN5Q5fuF8eIU1KeMkUcVSsofljyQApKjQ"
