import { useState } from "react";
import "./App.css";
import { Button, FormControl, TextField } from "@mui/material";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="main-card">
        <h1>Whatever the input is</h1>
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
          }}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
          }}
          variant="standard"
        >
          <TextField
            id="standard-basic"
            label="Search"
            value={input}
            fullWidth
            style={{ width: "100%", background: "white", borderRadius: "5px" }}
          />
          <Button variant="contained" onClick={sendSearch} fullWidth>
            SEARCH
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default App;

function sendSearch(e) {}
