import styled from "styled-components";
import { AiFillAndroid } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import barrinhaService from "../../services/barrinhaState";

// import "./style.css";

const navBarVariants = {
  collapsed: { width: 64, opacity: 0.7 },
  full: { width: 168, opacity: 1 },
};

export default function SidebarDashboard() {
  const [collapsed, setCollapsed] = useState(true);
  // new barrinhaService();

  function mudarEstadoBarrinha() {
    if (collapsed) {
      barrinhaService.barrinhaOpen();
    } else {
      barrinhaService.barrinhaClose();
    }
    setCollapsed((prev) => !prev);
  }

  return (
    <AppContainer>
      <NavContainer
        variants={navBarVariants}
        initial={!collapsed ? "full" : "collapsed"}
        animate={!collapsed ? "full" : "collapsed"}
        onClick={() => mudarEstadoBarrinha()}
      >
        <SideBarHeader
          initial={{ height: 168 }}
          animate={{ height: collapsed ? 32 : 160 }}
        >
          <SideBarHeaderImage />
        </SideBarHeader>

        <SideBarBody>
          <SideBarMenuItem>
            <AiFillAndroid size={32} />

            <AnimatePresence exitBeforeEnter>
              {!collapsed && (
                <motion.span
                  layout
                  exit={{ opacity: 0 }}
                  initial={{ opacity: collapsed ? 0 : 1 }}
                >
                  <Link to="/">teste</Link>
                </motion.span>
              )}
            </AnimatePresence>
          </SideBarMenuItem>
          <SideBarMenuItem>
            <AiFillAndroid size={32} />

            <AnimatePresence exitBeforeEnter>
              {!collapsed && (
                <motion.span
                  layout
                  exit={{ opacity: 0 }}
                  initial={{ opacity: collapsed ? 0 : 1 }}
                >
                  Item 1
                </motion.span>
              )}
            </AnimatePresence>
          </SideBarMenuItem>
          <SideBarMenuItem>
            <AiFillAndroid size={32} />

            <AnimatePresence exitBeforeEnter>
              {!collapsed && (
                <motion.span
                  layout
                  exit={{ opacity: 0 }}
                  initial={{ opacity: collapsed ? 0 : 1 }}
                >
                  Item 1
                </motion.span>
              )}
            </AnimatePresence>
          </SideBarMenuItem>
          <SideBarMenuItem>
            <AiFillAndroid size={32} />

            <AnimatePresence exitBeforeEnter>
              {!collapsed && (
                <motion.span
                  layout
                  exit={{ opacity: 0 }}
                  initial={{ opacity: collapsed ? 0 : 1 }}
                >
                  Item 1
                </motion.span>
              )}
            </AnimatePresence>
          </SideBarMenuItem>
        </SideBarBody>

        <SideBarFooter>
          <SideBarMenuItem>
            <AiFillAndroid size={32} />
            <AnimatePresence exitBeforeEnter>
              {!collapsed && (
                <motion.span
                  layout
                  exit={{ opacity: 0 }}
                  initial={{ opacity: collapsed ? 0 : 1 }}
                >
                  Item 6
                </motion.span>
              )}
            </AnimatePresence>
          </SideBarMenuItem>
        </SideBarFooter>
      </NavContainer>

      {/* <Content
        initial={{ marginLeft: 200 }}
        animate={{ marginLeft: collapsed ? 64 : 200 }}
      >
        <h1>Placeholder</h1>
      </Content> */}
    </AppContainer>
  );
}

const SideBarFooter = styled.footer`
  margin-top: auto;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavContainer = styled(motion.nav)`
  position: fixed;
  height: 100vh;
  padding: 16px;
  background-color: #01573d;

  display: flex;
  flex-direction: column;
`;

const SideBarHeader = styled(motion.header)``;

const SideBarBody = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  display: grid;
  row-gap: 8px;

  border-top: 1px solid white;
`;

const SideBarHeaderImage = styled.div`
  height: 100%;
  width: 100%;

  background: url(https://media.istockphoto.com/vectors/default-placeholder-man-vector-id844000458?b=1&k=6&m=844000458&s=612x612&w=0&h=AVkS41pQt_z5_7aDjPuU0OlcCe0-ZWK7agbV5ChNPSY=);
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 50%;
`;

const SideBarMenuItem = styled.li`
  display: flex;
  align-items: center;

  color: white;
  list-style-type: none;

  span {
    margin-left: 8px;
    white-space: nowrap;
  }
`;

// const Content = styled(motion.div)`
//   padding: 16px;
// `;
