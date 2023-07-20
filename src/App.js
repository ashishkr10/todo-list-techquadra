import "./App.css";

//packages imports
import { Grid } from "@mui/material";

//components
import Todo from "./components/Todo";
import Gallary from "./components/Gallary";

function App() {
  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <Todo />
        </Grid>
        <Grid item xs={8}>
          <Gallary />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
