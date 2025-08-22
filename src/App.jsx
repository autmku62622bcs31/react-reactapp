import "./App.css"
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Cards from "./components/Cards";
import Idcard from "./tasks/Idcard";
import react from "./assets/react.svg"
// import Counting from "./components/Counting";

function App(){
  return(
    <div>
      <Idcard logo={react}/>
      {/* <Header/>
      <Cards/>
      <Footer/> */}
      {/* <Counter/> */}
      {/* <Counting/> */}
    </div>
  )
}

export default App;