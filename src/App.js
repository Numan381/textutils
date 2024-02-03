import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      }
  };
  const router = createBrowserRouter([{},
    {
      path: "/",
      element: (
        <div>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div>
            <Outlet />
          </div>
        </div>
      ),
      children: [
        {
          path: "/",
          index: true,
          element: (
            <TextForm
              showAlert={showAlert}
              heading="Try TextUtills- Word counter, Download text, Character counter, Remove extra spaces"
              mode={mode}
            />
          ),
        },
        { path: "/about", element: <About mode={mode} /> },
      ],
    },
  ]);
  return (
    <>
      {/* <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
<Alert alert = {alert}/> */}
      <RouterProvider router={router} />
      {/* <div className="container my-3">
  <Routes>

<Route path='/' element={<TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>  
<Route path='/about' element={<About mode={mode} />}/>
  </Routes>

</div> */}
    </>
  );
}

export default App;
