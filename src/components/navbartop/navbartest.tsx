import * as React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import {
  FiHome,
  FiCoffee,
  FiCodesandbox,
  FiActivity,
  FiSmartphone,
  FiUserCheck,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import SideDrawer from "../drawer/drawer";
import { Hidden } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { Omit } from "@material-ui/types";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InfoIcon from "@material-ui/icons/Info";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import WorkIcon from "@material-ui/icons/Work";
import FreeBreakfast from "@material-ui/icons/FreeBreakfast";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",

    // color: "#01573d",
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "#01573d",
  },
  icon: {
    width: "30px",
    color: "red",
  },
  color: {
    background: "#01573d",
  },
  btn: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    background: "#01573d",
    borderRadius: 30,
    border: "3px solid #5de204",
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      backgroundColor: "#01573d !important",
    },
  },
  label: {
    textTransform: "capitalize",
  },
});

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    // ESTUDAR O QUE É ISSO AQUI
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? (
          <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>
        ) : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export const Navbartop = () => {
  // const navLinks = [
  //   { title: "Sobre", path: "/#" },
  //   { title: "Serviços", path: "/#" },
  //   { title: "Equipe", path: "/#" },
  //   { title: "Contato", path: "/#" },
  // ];

  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.color}>
      <Toolbar>
        <Container maxWidth="xl" className={classes.navDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home" href="/">
            <Home fontSize="large" />
          </IconButton>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              <ListItemLink to="/#" primary="Serviços" icon={<WorkIcon />} />
              <ListItemLink to="/#" primary="Equipe" icon={<FreeBreakfast />} />
              <ListItemLink
                to="/#"
                primary="Contato"
                icon={<SmartphoneIcon />}
              />
              <ListItemLink to="/#" primary="Sobre" icon={<InfoIcon />} />

              <ListItemLink
                to="/#"
                primary="Login"
                icon={<AccountCircleIcon />}
              />
              {/* 
              <Button variant="contained" className={classes.btn}>
                LOGIN
              </Button> */}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer />
            {/* "teste" */}
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
