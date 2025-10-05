import "./App.css"
// import Myback from "./components/Myback";
import Cardform from "./components/Cardform";
// import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import TheMealsDb from "./components/TheMealsDb";
// import Myback from "./components/Myback";
// import Home from "./components/Home"
// import About from "./components/About"

// import Footer from "./components/Footer";
// import Cards from "./components/Cards";
// import Idcard from "./tasks/Idcard";
// import react from "./assets/react.svg"
// import Product from "./tasks/Product";
// import Counting from "./components/Counting";
// import Useeffect from "./components/Useeffect"

// import OnlineStatusTracker from './tasks/OnlineStatusTracker';

// import TheMealsDb from "./components/TheMealsDb";
// import Form from "./components/Form"
function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Cardform/>} />
        <Route path="/themealsdb" element={<TheMealsDb/>} />
      </Routes>
      {/* <Cardform/> */}
      {/* <OnlineStatusTracker /> */}
      {/* <TheMealsDb/> */}
      {/* <Myback/> */}
      {/* <Useeffect/> */}
      {/* <Product/> */}
      {/* <Idcard logo={react}/> */}
       {/* <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
       </Routes> */}
      {/* <Cards/>
      <Footer/> */}
      {/* <Counter/> */}
      {/* <Counting/> */}
      {/* <Form/> */}
    </div>
  )
}

export default App;