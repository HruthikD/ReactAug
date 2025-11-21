
import Homeclass from './Homeclass';
export default function App() {
 let fname = "Hruthik";
 let age = 21;
  return(
    <div>
       <h1>Welcome</h1>
       <Homeclass name = {fname} age = {age}/>
    </div>
  )
}