import { BrowserRouter,Routes,Route,Link, useNavigate, redirect, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/neet/online-coaching-class-11" element={<Class11program/>}/>
          <Route path="/neet/online-coaching-class-12" element={<Class12program/>}/>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )  
}

const Layout = ()=>{
  return( 
  <div style={{height:"100vh",backgroundColor:"green"}}>
    <Header/>
      <div style={{height:"90vh",backgroundColor:"red"}}>
        <Outlet/> 
      </div>
    <Footer/>
  </div>
)}

const Header = ()=>{
  return(
    <>
    <Link to="/">Allen</Link><Link to='/neet/online-coaching-class-11'>|Class 11|</Link><Link to="/neet/online-coaching-class-12">Class 12</Link>
    </>
  )
}

const Footer = ()=>{
  return(
    <>
    <Link to="/about">AboutUs</Link><Link to="/contact">Contact</Link>
    </>
  )
}



const NoPage = ()=>{
  return(
  <>
  <div>Sorry Page Not Found</div>
  </>
  )
}

const LandingPage = ()=>{
  return(
    <>
    <div>Welcome To Allen</div>
    </>
  )
}

const Class11program = ()=>{
  return(
    <>
    <div>NEET programs for Class 11th</div>
    </>
  )
}

const Class12program = ()=>{
  const navigate = useNavigate();

  const redirectUser = ()=>{
    navigate("/")
  }

  return(
    <>
    <div>NEET programs for Class 12th</div>
    <button onClick={redirectUser}>GO Back to landing Page</button>
    </>
  )
}

export default App;
