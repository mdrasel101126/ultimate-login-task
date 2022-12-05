import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
