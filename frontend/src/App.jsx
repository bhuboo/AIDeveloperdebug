import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import UserProvider from "./context/UserContext";
import { StrictMode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {  
  return (
  //   <StrictMode>
  // <UserProvider>
  //   <AppRoutes />
  // </UserProvider>
  //   </StrictMode>
<StrictMode>
<UserProvider>
  <BrowserRouter>
  <Suspense>
    <AppRoutes/>
  </Suspense>
  </BrowserRouter>
  </UserProvider>
</StrictMode>
  );
}

export default App