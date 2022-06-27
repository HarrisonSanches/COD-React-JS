import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React, { Fragment } from "react";
import { useState } from "react";
// import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import FreeBreakfast from "@material-ui/icons/FreeBreakfast";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InfoIcon from "@material-ui/icons/Info";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import WorkIcon from "@material-ui/icons/Work";
import { motion } from "framer-motion";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Route, MemoryRouter } from "react-router";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { Omit } from "@material-ui/types";

import MailIcon from "@material-ui/icons/Mail";
import {
  FiHome,
  FiCoffee,
  FiCodesandbox,
  FiActivity,
  FiSmartphone,
  FiUserCheck,
} from "react-icons/fi";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
  bottomPush: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
  },
});

const navLinks = [
  { title: "Sobre", path: "/#" },
  { title: "Serviços", path: "/#" },
  { title: "Equipe", path: "/#" },
  { title: "Contato", path: "/#" },
  { title: "login", path: "/#" },
];

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
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function SideDrawer() {
  const classes = useStyles();
  type Anchor = "right";
  const [state, setState] = React.useState({
    right: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={classes.list}
    >
      {/* <List>
        {["Sobre", "Serviços", "Equipe", "Contatos"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      {/* <Divider /> */}
      <List>
        {/* <Button variant="contained">LOGIN</Button>
        {navLinks.map(({ title, path }) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))} */}
        <ListItemLink to="/#" primary="Login" icon={<AccountCircleIcon />} />
        <ListItemLink to="/#" primary="Sobre" icon={<InfoIcon />} />
        <ListItemLink to="/#" primary="Serviços" icon={<WorkIcon />} />
        <ListItemLink to="/#" primary="Equipe" icon={<FreeBreakfast />} />
        <ListItemLink to="/#" primary="Contato" icon={<SmartphoneIcon />} />
      </List>
      <div className={classes.bottomPush}>
        <ListItemLink to="/#" primary="Serviços" icon={<WorkIcon />} />
      </div>
    </div>
  );

  return (
    <>
      {(["right"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Menu fontSize="large" style={{ color: `white` }} />
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
}
//   const SideDrawer = () => {
//       return(
//         <></>
//       );
//   }
//   const [state, setState] = useState({ right: false }); // Add this
//   const toggleDrawer =
//     (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent) => {
//       if (
//         event.type === "keydown" &&
//         (event.key === "Tab" || event.key === "Shift")
//       ) {
//         return;
//       }
//       setState({ [anchor]: open });
//     };
//   o debaixo tava tentando fazer sozinho e errei!!!
//   const [state, setState] = useState({ right: false });
//   const handleMouseEvent =
//     (anchor: Anchor, open: boolean) =>
//     (event: React.MouseEvent<HTMLButtonElement>) => {
//       if (open == true) {
//         setState({ [anchor]: open });
//         return;
//       } else {
//         setState({ [anchor]: open });
//         return;
//       }
//     };
//   return (
//     // <Fragment>
//     <IconButton
//       edge="start"
//       aria-label="menu"
//       onClick={handleMouseEvent("right", true)}
//       //   {toggleDrawer("right", true)}
//     >
//       <Menu />
//     </IconButton>
//     // </Fragment>
//   );
