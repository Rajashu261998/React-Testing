
import './App.css';
import Button from './Components/Button';
import {useState} from "react"

function App() {
  const [theme,setTheme]=useState("light")
  return (
    <div className="App">
      <h3>Current theme is {theme}</h3>
      <Button colorScheme={"green"}
      onClick ={()=>{
        setTheme(theme ==="light"? "dark":"light")
      }}
      
      >
        Click Me
        </Button>

    </div>
  );
}

export default App;
