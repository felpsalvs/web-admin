import { useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import HomeIcon from "@mui/icons-material/House";
import PacttosIcon from "@mui/icons-material/Forum";
import ReviewIcon from "@mui/icons-material/VideoLibrary";
import SharedIcon from "@mui/icons-material/Link";
import InfoIcon from "@mui/icons-material/ManageAccounts";
import PackagesIcon from "@mui/icons-material/Redeem";
import ProfileIcon from "@mui/icons-material/ViewCarousel";
import LibraryIcon from "@mui/icons-material/OndemandVideo";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import avatar from "../../assets/avatar.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[500],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};

const ProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");

  return (
    <Box>
      <Sidebar 
      collapsed={isCollapsed}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: colors.black[500],
        },
      }}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h6" color={colors.secondary[500]}>
                  YOUR PACTTO PROFILE
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={avatar}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Felipe Alves
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Pactto member since 2024
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Pacttos (Chats)"
              to="/pacttos"
              icon={<PacttosIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Review"
              to="/review"
              icon={<ReviewIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Shared"
              to="/shared"
              icon={<SharedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Info"
              to="/info"
              icon={<InfoIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Packages"
              to="/packages"
              icon={<PackagesIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Profile"
              to="/profile"
              icon={<ProfileIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Library"
              to="/library"
              icon={<LibraryIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Subscription"
              to="/subscription"
              icon={<SubscriptionIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Settings"
              to="/settings"
              icon={<SettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default ProSidebar;
