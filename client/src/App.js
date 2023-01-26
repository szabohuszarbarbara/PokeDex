import Home from "./pages/Home";
import "./App.css"
import {AuthProvider} from "./context/authContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./context/ProtectedRoutes";
import Profile from "./pages/Profile";

function App() {

  return (
    <>
        <AuthProvider >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/profile" element= {<ProtectedRoute allowedRole="ROLE_ADMIN"><Profile /> </ProtectedRoute >} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </>
  );
}

export default App;
