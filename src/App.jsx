import { useState } from "react";
import "./App.css";
import {
  Button,
  FormControl,
  Table,
  TableBody,
  TableHead,
  TextField,
} from "@mui/material";
import { getLogs } from "./utils/api";

function App() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState([]);

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
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => sendSearch(input, setLogs)}
            fullWidth
            disabled={input === ""}
          >
            SEARCH
          </Button>
        </FormControl>
      </div>
      <div className="logs">
        {logs.length === 0 ? (
          <h1 style={{ fontSize: "1rem" }}>
            Nothing to show yet. Try searching something new in the logs...
          </h1>
        ) : (
          <Table>
            <TableHead>
              <tr>
                <th>Timestamp</th>
                <th>Message</th>
              </tr>
            </TableHead>
            <TableBody>
              {logs.map((log) => (
                <tr>
                  <td>{log.timestamp}</td>
                  <td>{log.log}</td>
                </tr>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}

export default App;

function sendSearch(input, setLogs) {
  getLogs(input).then(setLogs);
}
