
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/ContextProvider";
import Login from "./components/Login";
import Technologies from "./components/Technologies";
import Html from "./components/Html";
import Css from "./components/Css";
import Protect from "./components/Protect";
import Rt from "./components/React1";
import Jcl from "./components/Javascript";

function App() {
  const { isLoggedin } = useAuth();
  console.log(isLoggedin);
  return (
    <div className="App">
      {isLoggedin ? <Nav /> : null}
      {/* <Nav/>  */}

      <Routes>
        <Route path="/" element={isLoggedin ? <Home /> : <Login />} />
        <Route
          path="/contact"
          element={
            <Protect>
              <Contact />
            </Protect>
          }
        />
        <Route
          path="/profile"
          element={
            <Protect>
              <Profile />
            </Protect>
          }
        />
        <Route
          path="/products"
          element={
            <Protect>
              <Products />
            </Protect>
          }
        />
        <Route
          path="/productdetails/:id"
          element={
            <Protect>
              <ProductDetails />
            </Protect>
          }
        />
        <Route
          path="/tech"
          element={
            <Protect>
              <Technologies />
            </Protect>
          }
        >
          <Route path="" element={<Navigate to='html' />}/>
          <Route path="html" element={<Html/>}/>
          <Route path="css" element={<Css/>}/>
          <Route path="javascript" element={<Jcl/>}/>
          <Route path="react" element={<Rt/>}/>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
