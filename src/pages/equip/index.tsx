import React, { useEffect } from "react";
// import { Barrinha } from "../../components/sidebar";
// não preciso importar mais
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import logo from "../../assets/img/COD_LOGOvs2.png";
import FOTO from "../../assets/img/foto.png";
import ELON from "../..//assets/img/team/elon.jpg";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { borders } from "@material-ui/system";
import Footer from "../../components/footer/footer";
import { Navbartop } from "../../components/navbartop/navbartest";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

function Equip() {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <Barrinha /> */}
      {/* <Footer /> */}
      {/* <div> */}
      {/* </div> */}
      <Navbartop />
      <div className="bloco-externo ">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12} data-aos="fade-down">
                <img src={ELON} className="img_test" alt=""></img>
              </Grid>
              <Grid item xs={12} data-aos="fade-up">
                <h1>DOGECOIN</h1>
              </Grid>
            </Grid>

            {/* <div style={{ background: "#4d79ff" }}>Another item! </div> */}
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12} data-aos="fade-down">
                <img src={ELON} className="img_test" alt=""></img>
              </Grid>
              <Grid item xs={12} data-aos="fade-up" alignItems="center">
                <h1>DOGECOIN</h1>
              </Grid>
            </Grid>

            {/* <div style={{ background: "#4d79ff" }}>Another item! </div> */}
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12} data-aos="fade-down">
                <img src={ELON} className="img_test" alt=""></img>
              </Grid>
              <Grid item xs={12} data-aos="fade-up" alignContent="center">
                <h1>DOGECOIN</h1>
                <h1 className="txt_test">DOGECOIN</h1>
                <h1 className="txt_test">DOGECOIN</h1>
              </Grid>
            </Grid>

            {/* <div style={{ background: "#4d79ff" }}>Another item! </div> */}
          </Grid>
        </Grid>
      </div>
      <Footer />

      {/* FUNCIONA */}

      {/* <div className="bloco-externo " data-aos="fade-left">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div style={{ background: "#4d79ff" }}>Another item! </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ background: "#4d79ff" }}>Another item! </div>
          </Grid>
        </Grid>
      </div>
      <div className="bloco-externo " data-aos="fade-left">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div style={{ background: "#4d79ff" }}>Another item! </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ background: "#4d79ff" }}>Another item! </div>
          </Grid>
        </Grid>
      </div>
      <div className="bloco-externo " data-aos="fade-left">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div style={{ background: "#4d79ff" }}>Another item! </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ background: "#4d79ff" }}>Another item! </div>
          </Grid>
        </Grid>
      </div> */}

      {/* FUNCIONA */}

      {/* <Grid container data-aos="fade-left" alignContent="center" spacing={3}>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          style={{ background: "#DFD211" }}
        >
          <img src={logo} alt=""></img>{" "}
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          style={{ background: "#11DF33" }}
          data-aos="fade-down"
        >
          <img src={logo} alt=""></img>{" "}
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          style={{ background: "#4d79ff" }}
          data-aos="fade-right"
        >
          <img src={logo} alt=""></img> <h1>teste</h1>
        </Grid>
      </Grid>
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div style={{ background: "#4d79ff" }}>
              Hooray something is here!
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ background: "#4d79ff" }}>
              {" "}
              Hooray something is too!{" "}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ background: "#4d79ff" }}> Another item! </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ background: "#4d79ff" }}> Showing off rows! </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ background: "#4d79ff" }}> Last item! </div>
          </Grid>
        </Grid>
      </div> */}
      {/* <div className="bloco-externo">
        <div className="bloco-interno" style={{ backgroundColor: "#DFD211" }}>
          <img src={logo}></img>
          <h1>HDSAUIHDSASDAOHSDUISDHUISDA</h1>
        </div>
        <div className="bloco-interno" style={{ backgroundColor: "#11DF33" }}>
          <p>bbbbbb</p>
        </div>
        <div className="bloco-interno" style={{ backgroundColor: "#4F6FEF" }}>
          <p>cccccc</p>
        </div>
      </div> */}
      {/* <Footer /> */}
    </>
  );
}

export default Equip;
