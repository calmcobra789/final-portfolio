import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid'
import DisplayCard from './components/DisplayCard';

import portfolio_data from "./assets/portfolio_data.json";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to My Portfolio
      </header>

        <div className = "Body-Content">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <DisplayCard item = {portfolio_data[0]}/>

          </Grid>
          <Grid item xs={4}>
            <DisplayCard item = {portfolio_data[1]}/>
          </Grid>
          <Grid item xs={4}>
            <DisplayCard item = {portfolio_data[2]}/> 
          </Grid>
          <Grid item xs={8}>
            <DisplayCard item = {portfolio_data[3]}/>
          </Grid>
        </Grid>
        </div>


     
    </div>
  );
}

export default App;
