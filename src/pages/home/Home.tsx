import HrApp from "../hr/pages/HrApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Home() {
  return (
    <>
      <HrApp />
      <ToastContainer />
    </>
  );
}

export default Home;
