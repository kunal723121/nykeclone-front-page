import Body from "./Body/Body";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter } from "react-router-dom"
let App=()=>{
    return <div>
        <BrowserRouter>
        <Navbar/>
        <Body/>
        </BrowserRouter>
    </div>
}
export default App