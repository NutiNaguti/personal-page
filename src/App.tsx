// React App imports
import MainPage from './pages/MainPage';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import styles from './styles/App.module.css';

// Material UI imports
import {createTheme, CssBaseline} from '@mui/material';
import {ThemeProvider} from '@emotion/react';

const theme = createTheme({
  typography: {
    fontFamily: "Righteous, Yanone Kaffeesatz",
    allVariants: {
      color: "#F8F6E6",
    },
    fontSize: 18
  },
  palette: {},
  spacing: 8,
  breakpoints: {},
  zIndex: {},
  transitions: {},
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Yanone Kaffeesatz';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/yanonekaffeesatz/v18/3y9I6aknfjLm_3lMKjiMgmUUYBs04aUXNxt9gW2LIfto9tWZd2GMKHD0VTtI.woff) format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      
        @font-face {
          font-family: 'Yanone Kaffeesatz';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/yanonekaffeesatz/v18/3y9I6aknfjLm_3lMKjiMgmUUYBs04aUXNxt9gW2LIfto9tWZc2GMKHD0VTtItvI.woff) format('woff');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
      
        @font-face {
          font-family: 'Righteous';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/righteous/v9/1cXxaUPXBpj2rGoU7C9WiHGFq8Kk1Q.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
    },
  },
});


function App() {
  return (
    <>
      <div className={styles.bg}></div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <MainPage />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
