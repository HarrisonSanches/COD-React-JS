import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./style.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import Fingerprint from "@material-ui/icons/Fingerprint";
import Person from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "../../components/footer/footer";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
// PAGINA DE AUTTENTICAÇÃO DO SERVIÇO
import AccountCircle from "@material-ui/icons/AccountCircle";
import { TextField } from "@material-ui/core";
import { Navbartop } from "../../components/navbartop/navbartest";

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
    // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    // margin: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
    width: "100%",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    // width: "25ch",
    width: "100%",
    height: "150%",
    marginTop: theme.spacing(3),
  },
}));

interface State {
  username: string;
  password: string;
  name: string;
  showPassword: boolean;
}

function CadastroUser() {
  // O userState guarda váriaveis dinamicamente
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  // variavel auxiliar que funciona como histório de navegação
  const history = useHistory();
  const classes = UseStyles();
  const time = new Date();

  const [values, setValues] = React.useState<State>({
    username: "",
    password: "",
    name: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const enviar = async (e: FormEvent) => {
    e.preventDefault();

    // pegar a hora atual
    // const time = new Date();
    // const data = {
    //   name,
    //   username,
    //   password,
    //   time,
    // };
    // console.log(data);

    // POST QUANDO MINHA API ESTIVER ONLINE
    // ROTA PARA CRIAÇÃO DE USUÁRIO
    api
      .post("/rota da minha api", values)
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
        alert("erro na criação");
      });
    console.log(values);
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
            <Person />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro de Usuário
          </Typography>
        </div>

        {/* ESSE AQUI É O CERTO */}
        <FormControl className={clsx(classes.form)}>
          <TextField
            id="nome"
            fullWidth
            type="text"
            variant="outlined"
            margin="none"
            required
            label="Nome"
            name="nome"
            autoComplete="email"
            autoFocus
            value={values.name}
            onChange={handleChange("name")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {/* <IconButton aria-label="toggle password visibility" edge="end">
                  {" "} */}

                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            // labelWidth={0}
          />
        </FormControl>

        {/* corrigir esses debaixo */}

        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Username
          </InputLabel>
          <Input
            className="form"
            id="outlined-adornment-username"
            type="text"
            fullWidth={true}
            // label="Nome"
            margin="none"
            name="nome"
            autoFocus
            onChange={handleChange("username")}
            endAdornment={
              <InputAdornment position="end">
                {/* <IconButton aria-label="toggle password visibility" edge="end">
                  {" "} */}
                <AccountCircle />
              </InputAdornment>
            }
            // labelWidth={75}
          />
        </FormControl>

        <FormControl className={classes.form} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            autoFocus
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            // labelWidth={75}
          />
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          // onCLinc chama a função enviar criada la em cima
          onClick={enviar}
        >
          Cadastrar
        </Button>
      </Container>
    </>
  );
}

export default CadastroUser;
