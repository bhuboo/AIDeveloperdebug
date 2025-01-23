import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import UserProvider from "./context/UserContext";

function App() {  
  return (
    
  <UserProvider>
    <AppRoutes />
  </UserProvider>

  );
}

export default App