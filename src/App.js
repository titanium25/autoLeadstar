import './App.css';
import {Paper, TextField} from "@mui/material";
import {useState} from "react";
import order from "./order"

function App() {

    const [str, setStr] = useState('')

    return (
        <div className="App">
            <Paper
                variant="outlined"
                sx={{
                    width: '450px',
                    textAlign: 'center',
                    color: 'secondary',
                    lineHeight: '60px',
                    padding: '20px'
                }}
                className="paper"
            >

                <TextField
                    id="outlined-basic"
                    label="Input"
                    fullWidth
                    multiline
                    maxRows={4}
                    onChange={e => setStr(e.target.value)}
                    variant="outlined"/>

                {order(str)}
            </Paper>

        </div>
    );
}

export default App;
