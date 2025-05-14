import { AllRouters } from "./routes/AllRoutes";
import { Header,Footer, ScrollToTop } from "./components";
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return(
    <div className="App dark:bg-darkbg">
      <Header />
      <ScrollToTop />
      <AllRouters />
      <Footer />
    </div>
  )
}

export default App;