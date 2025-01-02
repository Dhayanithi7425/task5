//import Home from './Home';
//import About from './About';
//port Contact from './Conatct';
//import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import './App.css';
import { useState, useRef ,useMemo, useEffect } from 'react';
// import Hen from './Hen'
// import { createContext } from 'react';
// export let nameContext = createContext();
function App() {
  let[Number,setNumber] = useState(0);
  let [dark,setDark] = useState(false);
  let doubleNum = useMemo(()=>{
    return slowFunction(Number)
  })
  let themestyle = useMemo(()=>{
    return{
      backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    }
  },[dark])
  useEffect(()=>{
    console.log("Theme Changed")
  },[themestyle])
  return(
    <div>
      <input type="number" value={Number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>setDark((val)=>!val)}>Change Theme</button>
      <div style={themestyle}>{doubleNum}</div>
      {/* <nameContext.Provider value = "Food">
      <Hen/>
      </nameContext.Provider> */}


      </div>
  )
}
  export default App;
  function slowFunction(){
      for(let i=1;i<1000000000;i++)
        {

        }
        return Number*2;
  }
  /// const [count, setCount] = useState(0); // Using a number for count, initialized to 0
  // const [inputValue, setInputValue] = useState(''); // State to store input text
  // const countRef = useRef(0);

  // const Increment = () => {
  //   setCount(count + 1); // Update state count
  //   countRef.current++; // Update ref count
  //   console.log('State count:', count);
  //   console.log('Ref count:', countRef.current);
  // };

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value); // Update the input value on each change
  //   console.log('Input Value:', event.target.value); // Log the updated input value
  // };

  // return (
  //   <div>
  //     <h1>Count (Ref): {countRef.current}</h1>
  //     <h2>State Count: {count}</h2>
      
  //     <input
  //       type="text"
  //       value={inputValue}
  //       onChange={handleInputChange} // Capture input change
  //       placeholder="Type something..."
  //     />
      
  //     <button onClick={Increment}>++++</button>
  //   </div>
  // );



//   const handleRefresh = (e) => {
//     e.preventDefault(); 
//     window.location.reload(); 
//   };
//   return (
//     <Router>
//       <header>
//         <nav className="navbar">
//           <a href="/" className="logo">
//             <img
//               src="./src/th.jpg"
//               alt="Logo"
//             />
//             Dhayanithi  
//           </a>
//           <ul className="nav-links">
            
//             <li>
//               <a href="/" onClick={handleRefresh}>ABC</a>
//             </li>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/About">About Us</Link>
//             </li>
//             <li>
//               <Link to="/Contact">Contact Us</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//         </Routes>
//       </main>

//       {/* Footer for copyright */}
//       <footer className="footer">
//         <p>&copy; 2024 Dhayanithi. All Rights Reserved.</p>  {/* Updated copyright name */}
//       </footer>
//     </Router>
//   );
// }


