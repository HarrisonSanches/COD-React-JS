// import  React from "react";

import { useEffect } from "react";

import Footer from "../../components/footer/footer";
import "./style.css";
import { Navbartop } from "../../components/navbartop/navbartest";
// import './scripts.js';
import { Button, CssBaseline, Grid } from "@material-ui/core";
import logo from "../../assets/img/COD_LOGOvs2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import clsx from "clsx";
import {
  createMuiTheme,
  createStyles,
  withStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles"; // import classes from "*.module.css";
import { green, purple } from "@material-ui/core/colors";
// import classes from "*.module.scss";

// import React, { CSSProperties } from "react";

const useStyles = makeStyles({
  root: {
    background: "#107035",
    "&:hover": {
      background: "#f00",
    },
    borderRadius: 0,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "#107035",
    hover: "#107035",
  },
});

function Home(): JSX.Element {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  const classes = useStyles();

  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      {/* <Header /> */}
      <CssBaseline />
      <Navbartop />
      <div className="bloco-externo">
        <Grid container spacing={2} className="bloco-img">
          <Grid item xs={6} sm={6} data-aos="fade-down">
            <img src={logo} className="animated" alt=""></img>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                justify="center"
                className="bloco-externo-title"
                data-aos="fade-right"
              >
                <h1>Campus On Demand</h1>
                <h3>alguma descrição legal aqui.</h3>
              </Grid>
              <Grid item xs={12} alignContent="center"></Grid>
              <Grid
                item
                xs={12}
                alignContent="center"
                className="bloco-externo-title"
                data-aos="fade-top"
              >
                <div>
                  <Button className={clsx(classes.root)}>Comece Agora!</Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default Home;
