import { useState, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./style.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "../../components/footer/footer";
import { Navbartop } from "../../components/navbartop/navbartest";
import SidebarDashboard from "../../components/sidebar";
import barrinhaService from "../../services/barrinhaState";
import styled from "@emotion/styled";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { SiGoogleclassroom } from "react-icons/si";

const UseStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function CreateNetwork() {
  // O userState guarda váriaveis dinamicamente
  const [network_name, setNetworkName] = useState("");
  // const [token, setToken] = useState("");
  // const [username, setUsername] = useState("");
  // variavel auxiliar que funciona como histório de navegação
  const history = useHistory();
  const classes = UseStyles();
  const enviar = async (e: FormEvent) => {
    e.preventDefault();

    // pegar a hora atual
    const time = new Date();
    const data = {
      network_name,
      time,
      token: "269add21e1b01a62f8854b6e2a0e38",
      username: "test10",
      project_name: "nome do projeto",
    };
    console.log(data);

    // POST QUANDO MINHA API ESTIVER ONLINE
    // SE TEM BARRINHA NO BACK TEM BNARRINHA NO FRONT
    const response = await api
      .post("/network/", data)
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

  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const subscribe = barrinhaService.onBarrinha().subscribe((state) => {
      if (state) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    });
  });

  return (
    // importante, sempre retornar um componente
    // exemplo: ou uma div inteira, ou um h1
    // tambem posso só abrir ou fechar uma tag <></>

    <>
      <SidebarDashboard />
      <Container_animate>
        <AnimatePresence>
          <Bloco
            initial={{ marginLeft: 200 }}
            animate={{ marginLeft: collapsed ? 64 : 168 }}
          >
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <SiGoogleclassroom />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sala de aula
              </Typography>
            </div>

            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nomeLab"
                label="Nome da sala de aula"
                name="laboratory_name"
                autoComplete="nome do Serviço"
                autoFocus
                onChange={(e) => setNetworkName(e.target.value)}
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
              Criar sala
            </Button>
          </Bloco>
        </AnimatePresence>
      </Container_animate>
    </>
  );
}

const Container_animate = styled.div`
  display: flex;
  justifycontent: center;
  flex-direction: column;
  align-items: center;
`;

const Bloco = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justifycontent: center;
  align-items: center;
  padding: 20px; /* this */
  margin: 20px;
  width: 40%;
`;

export default CreateNetwork;
