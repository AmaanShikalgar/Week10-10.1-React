import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {setCount} = useContext(CountContext);
  return <button onClick={()=>setCount(count=>count-1)}>Decrease</button>;
}

function Increase() {
  const {setCount} = useContext(CountContext);
  return <button onClick={()=>setCount(count=>count+1)}>Increase</button>;

}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;







// const BulbContext = createContext();

// export const BulbProvider=({children})=>{
//   const[bulbOn,setBulbOn] = useState(true); 
//     return (
//       <BulbContext.Provider value={{
//       bulbOn: bulbOn,
//       setBulbOn: setBulbOn
//     }}>
//       {children}
//     </BulbContext.Provider>
// )}

// const Bulb=()=>{
//   return(
//     <BulbProvider>  
//     <LightBulb/>
//     </BulbProvider>
//   )
// }

// const LightBulb=()=>{
//   return(
//     <>
//     <BulbState/>
//     <LightSwitch/>
//     </>
//   )
// }

// const BulbState =()=>{
//   const {bulbOn} = useContext(BulbContext)
//   return (
//     <>
//     {bulbOn ? <img src="https://www.w3schools.com/js/pic_bulbon.gif"/>:<img src='https://www.w3schools.com/js/pic_bulboff.gif'/>}
//     <br/>
//     <br/>
//     </>
//   )
// }

// const LightSwitch=()=>{
//   const {setBulbOn} = useContext(BulbContext);
//   const toggle=()=>{
//      setBulbOn(currentState => !currentState)
//   }
  
//   return(
//     <>
//       <button onClick={toggle}>Toggle the bulb</button>
//     </>
//   )
// }

// export default Bulb

// a clock with start and stop button
// const StopWatch = ()=>{

//   const[currentCount,setCurrentCount] = useState(1);
//   const timer = useRef(null);

//   const startClock = ()=>{

//     if(timer.current) return;

//     timer.current = setInterval(()=>{
//       setCurrentCount(count => count+1);
//     },1000);
//   };

//   const stopClock = ()=>{
//     clearInterval(timer.current);
//     timer.current=null;
//   }

//   return(
//     <div>
//       {currentCount}
//       <br/>
//       <button onClick={startClock}>Start</button>
//       <button onClick={stopClock}>Stop</button>
//     </div>
//   )
// }

// export default StopWatch


// function FocusInput(){

//   const inputRef = useRef();

//   const focusOnInput=()=>{
//     inputRef.current.focus();
//   }

//   return <div>
//     SignUp
//     <input ref={inputRef} id="name" type={"text"} />
//     <input id="pasword" type={"text"} />
//     <button onClick={focusOnInput}>submit</button>
//   </div>
// }

// export default FocusInput

// import { BrowserRouter,Routes,Route,Link, useNavigate, redirect, Outlet } from 'react-router-dom';

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route path="/neet/online-coaching-class-11" element={<Class11program/>}/>
//           <Route path="/neet/online-coaching-class-12" element={<Class12program/>}/>
//           <Route path="/" element={<LandingPage/>}/>
//           <Route path="*" element={<NoPage/>}/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     </>
//   )  
// }

// const Layout = ()=>{
//   return( 
//   <div style={{height:"100vh",backgroundColor:"green"}}>
//     <Header/>
//       <div style={{height:"90vh",backgroundColor:"red"}}>
//         <Outlet/> 
//       </div>
//     <Footer/>
//   </div>
// )}

// const Header = ()=>{
//   return(
//     <>
//     <Link to="/">Allen</Link><Link to='/neet/online-coaching-class-11'>|Class 11|</Link><Link to="/neet/online-coaching-class-12">Class 12</Link>
//     </>
//   )
// }

// const Footer = ()=>{
//   return(
//     <>
//     <Link to="/about">AboutUs</Link><Link to="/contact">Contact</Link>
//     </>
//   )
// }



// const NoPage = ()=>{
//   return(
//   <>
//   <div>Sorry Page Not Found</div>
//   </>
//   )
// }

// const LandingPage = ()=>{
//   return(
//     <>
//     <div>Welcome To Allen</div>
//     </>
//   )
// }

// const Class11program = ()=>{
//   return(
//     <>
//     <div>NEET programs for Class 11th</div>
//     </>
//   )
// }

// const Class12program = ()=>{
//   const navigate = useNavigate();

//   const redirectUser = ()=>{
//     navigate("/")
//   }

//   return(
//     <>
//     <div>NEET programs for Class 12th</div>
//     <button onClick={redirectUser}>GO Back to landing Page</button>
//     </>
//   )
// }

// export default App;
