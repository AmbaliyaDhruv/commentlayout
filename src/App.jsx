
import './App.css'
import Comments from './component/Comments'
import {data} from "./abi"
function App() {

  return (
    <div>
   
     <Comments {...data}/>
  
    </div>
  )
}

export default App
