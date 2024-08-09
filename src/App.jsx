import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Home from "./scenes/home";
// import Pacttos from "./scenes/pacttos"
// import Review from "./scenes/review"
// import Shared from "./scenes/shared"
// import Info from "./scenes/info"
// import Packages from "./scenes/packages"
// import Profile from "./scenes/profile"
// import Library from "./scenes/library"
// import Subscription from "./scenes/subscription"



function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pacttos" element={<Pacttos />} />
              <Route path="/review" element={<Review />} />
              <Route path="/shared" element={<Shared />} />
              <Route path="/info" element={<Info />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/library" element={<Library />} />
              <Route path="/subscription" element={<Subscription />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
