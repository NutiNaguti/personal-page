import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Marquee from 'react-double-marquee'

// Material UI imports
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Icon,
  IconButton,
  useMediaQuery,
  Menu,
  MenuItem,
  ListItemIcon,
  useTheme,
} from "@mui/material";

// React App imports
import styles from '../styles/NavBar.module.css'

// Icon imports
import paw from '../public/img/favpng_nyan-cat-donuts-pusheen-pixel-art.png'
import github from '../public/img/Octocat.png'
import vk from '../public/img/icons8-вконтакте-100.png'
import hbr from '../public/img/habr.png'

interface Joke {
  joke: string;
}

const styleIcon = {
  width: '100%', height: 'auto'
}

export default function Navbar() {
  const theme = useTheme();
  const [joke, setJoke] = useState('');
  
  useEffect(() => {
      if(!joke)
        getJoke();
    }, [])

  const getJoke = async() => {
    await axios.get(
      "https://geek-jokes.sameerkumar.website/api?format=json")
    .then(function (response) {
      setJoke(response.data.joke)
    })
    .catch(function (error) {
      console.log(error);
    })
  }



  const [anchor, setAnchor] = React.useState(null)
  const open = Boolean(anchor)

  const handleMenu = (event: any) => {
    setAnchor(event.currentTarget)
  }

  const isMobile = useMediaQuery(theme.breakpoints.down('md'))



  // TODO: refactoring  
  const pawIcon = (
    <Icon sx={{ width: "50px", height: "50px" }}>
      <img src={paw} alt="paw" style={styleIcon} />
    </Icon>
  );

  const githubIcon = (
    <Icon sx={{ width: "42px", height: "42px" }}>
      <img src={github} alt="github" style={styleIcon} />
    </Icon>
  )

  const vkIcon = (
    <Icon sx={{ width: "42px", height: "42px"}}>
      <img src={vk} alt="vk" style={styleIcon} />
    </Icon>
  )

  const habrIcon = (
    <Icon sx={{ width: "35px", height: "35px" }}>
      <img src={hbr} alt="hbr" style={styleIcon} />
    </Icon>
  )

  return (
    <>{/* HACK */}
      <Box component="div" sx={{ flexGrow: 2 }}>
        <AppBar
          position="relative"
          sx={{
            boxShadow: "none",
            background: "transparent",
          }}
        >
          <Toolbar>
            {isMobile ? (
              <>
                <IconButton onClick={handleMenu}>
                  <Typography
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {pawIcon}
                    Derzhavin Danila
                  </Typography>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  /* to open the anchor at the top below the cursor */
                  anchorEl={anchor}
                  /* anchor origin so that it open it that location */
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                >
                  <MenuItem onClick={() => setAnchor(null)}>
                    <ListItemIcon>{githubIcon}</ListItemIcon>
                    <Typography variant="h6">Source</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => setAnchor(null)}>
                    <ListItemIcon>{vkIcon}</ListItemIcon>
                    <Typography>VK</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => setAnchor(null)}>
                    <ListItemIcon>{habrIcon}</ListItemIcon>
                    <Typography>Habr career</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <IconButton
                  href="https://nutinaguti.github.io/web-site/"
                  sx={{ marginLeft: "8vw", marginRight: "auto" }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {pawIcon}
                    Derzhavin Danila
                  </Typography>
                </IconButton>
                {/*<div
                  style={{
                    width: "25%",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Marquee speed="0.04" direction="left" deleay="3000">
                    {joke}
                  </Marquee>
                </div> */}
                <div
                  style={{
                    marginLeft: "auto",
                    marginRight: "2vw",
                    padding: theme.spacing(1),
                  }}
                >
                  <IconButton href="https://github.com/nutinaguti">
                    {githubIcon}
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Source
                    </Typography>
                  </IconButton>
                  <IconButton href="https://vk.com/nuti.naguti">
                    {vkIcon}
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Vk
                    </Typography>
                  </IconButton>
                  <IconButton
                    href="https://career.habr.com/danila-zhirnov"
                    sx={{ padding: "9px" }}
                  >
                    {habrIcon}
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        padding: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      Habr career
                    </Typography>
                  </IconButton>
                </div>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
