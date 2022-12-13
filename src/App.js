import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import DisplayCard from './components/DisplayCard';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import portfolio_data from "./assets/portfolio_data.json";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Button from '@mui/material/Button'

function bottomFunction() {
  console.log("bottomFunction")
  // document.body.scrollTop = 20; // For Safari
  document.documentElement.scrollBy = 20; // For Chrome, Firefox, IE and Opera
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to
        <h1>CalmCobra's Portfolio</h1>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        

        {/* <KeyboardDoubleArrowDownIcon sx={{ fontSize: 80 }} onClick={bottomFunction()}/> */}

        {/* <IconButton aria-label="KeyboardDoubleArrowDown" onClick={bottomFunction()}>
  <KeyboardDoubleArrowDownIcon onClick={bottomFunction()}/>
</IconButton> */}





      </header>
      {/* <section id="section01" class="demo">
          <h1>CalmCobra's Portfolio</h1>
          <a href="#section02"><span></span>Scroll</a>
        </section> */}

        <div className = "intro">

        Brown CS senior; seeking product, backend and full-stack software roles. Prev @ Coda, Tencent. Ready to learn fast and contribute to something great.
        I'm also passionate about <b>wildlife photography!</b>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            {/* <LinkedInIcon fontSize="large"/> */}
          </Grid>
          <Grid item xs={1}>
            {/* <LinkedInIcon fontSize="large"/> */}
          </Grid>
          <Grid item xs={1}>
            {/* <LinkedInIcon fontSize="large"/> */}
          </Grid>
          <Grid item xs={1}>
            {/* <LinkedInIcon fontSize="large"/> */}
          </Grid>
          <Grid item xs={1}>
            {/* <LinkedInIcon fontSize="large"/> */}
          </Grid>
          <Grid item xs={1}>
            <EmailIcon fontSize="large"/>
          </Grid>
          <Grid item xs={1}>
            <LinkedInIcon fontSize="large"/>
          </Grid>
          <Grid item xs={1}>
            {/* <LinkedInIcon fontSize="large"/> */}
          </Grid>
          <Grid item xs={1}>
            {/* <LinkedInIcon fontSize="large"/> */}
          </Grid>
          <Grid item xs={1}>
            {/* <LinkedInIcon fontSize="large"/> */}
          </Grid>
          <Grid item xs={1}>
            {/* <LinkedInIcon fontSize="large"/> */}
          </Grid>
          <Grid item xs={1}>
            {/* <LinkedInIcon fontSize="large"/> */}
          </Grid>
        </Grid>
        </div>

        <div className = "Body-Content">
        <br></br><h2>Past Projects</h2>  
        <Grid container spacing={5}>
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
