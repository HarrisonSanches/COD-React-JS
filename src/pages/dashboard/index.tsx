import CssBaseline from "@material-ui/core/CssBaseline";
import styled from "styled-components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SidebarDashboard from "../../components/sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import barrinhaService from "../../services/barrinhaState";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(24),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

function Dashboard() {
  const classes = useStyles();
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
    <>
      {/* <CssBaseline /> */}
      <SidebarDashboard />
      {/* <Navbartop /> */}
      {/* <Footer /> */}
      <Content
        initial={{ marginLeft: 200 }}
        animate={{ marginLeft: collapsed ? 64 : 168 }}
      >
        <h1>Placeholder</h1>
      </Content>
    </>
  );
}

const Content = styled(motion.div)`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

export default Dashboard;
