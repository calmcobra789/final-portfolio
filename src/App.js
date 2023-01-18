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
        <h1>Suyash Kothari's Portfolio</h1>
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

        Brown CS senior (grad. May 2023); seeking product, backend and full-stack software roles. Currently Head Teaching Assistant for Brown CS's deprtment-wide Socially Responsible Computing program. Prev @ Coda, Tencent. Ready to learn fast and contribute to something great.
        I'm also passionate about wildlife photography!

        [Coding in Progress]
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
            <a href= "mailto:suyash.kothari4@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon fontSize="large"/></a>
          </Grid>
          <Grid item xs={1}>
           <a href= "https://www.linkedin.com/in/suyash-kothari/" target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize="large"/></a>
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
