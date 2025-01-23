import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import UserProvider from "./context/UserContext";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {  
  return (
  //   <StrictMode>
  // <UserProvider>
  //   <AppRoutes />
  // </UserProvider>
  //   </StrictMode>
<StrictMode>
  <BrowserRouter>
  <Suspense>
    <AppRoutes/>
  </Suspense>
  </BrowserRouter>
</StrictMode>
  );
}

export default App