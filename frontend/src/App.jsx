import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import UserProvider from "./context/UserContext";
import { StrictMode } from "react";

function App() {  
  return (
    <StrictMode>
  <UserProvider>
    <AppRoutes />
  </UserProvider>
    </StrictMode>

  );
}

export default App