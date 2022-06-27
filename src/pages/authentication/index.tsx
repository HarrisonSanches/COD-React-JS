import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import api from "../../services/api";
import "./style.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "../../components/footer/footer";
import { Navbartop } from "../../components/navbartop/navbartest";

// PAGINA DE AUTTENTICAÇÃO DO SERVIÇO

// Componente sempre com letra maiúscula--

const UseStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function CadastroUser() {
  // O userState guarda váriaveis dinamicamente
  const [nome, setNome] = useState("");
  // variavel auxiliar que funciona como histório de navegação
  const history = useHistory();
  const classes = UseStyles();
  const enviar = async (e: FormEvent) => {
    e.preventDefault();

    // pegar a hora atual
    const time = new Date();
    const data = {
      nome,
      time,
    };
    console.log(data);

    // POST QUANDO MINHA API ESTIVER ONLINE
    // SE TEM BARRINHA NO BACK TEM BNARRINHA NO FRONT
    const response = await api
      .post("/authentication/", data)
      // depois que rodar o post, roda o then
      // CASO SUCESSO
      .then(() => {
        alert("Cadastrado com sucesso");

        // como eu nao sei se ele acessou a pagina home, estou forçando
        // ele ir pra home
        history.push("/");
      })
      // CASO ERRO
      .catch(() => {
        alert("Serviço já existente");
      });
  };
  return (
    // importante, sempre retornar um componente
    // exemplo: ou uma div inteira, ou um h1
    // tambem posso só abrir ou fechar uma tag <></>

    <>
      <Navbartop />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Fingerprint />
          </Avatar>
          <Typography component="h1" variant="h5">
            Autenticação de Serviço
          </Typography>
        </div>

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome do Serviço"
            name="email"
            autoComplete="Nome do Serviço"
            autoFocus
            onChange={(e) => setNome(e.target.value)}
            type="text"
          />
        </form>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          // onCLinc chama a função enviar criada la em cima
          onClick={enviar}
        >
          Autenticação
        </Button>
      </Container>
      <Footer />
    </>
  );
}

export default CadastroUser;
