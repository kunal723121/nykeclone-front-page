import Body from "./Body/Body";
import Caro from "./Caro";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter } from "react-router-dom"
let App=()=>{
    return <div>
        <BrowserRouter>
        <Navbar/>
        <Body/>
        </BrowserRouter>
        {/* <Caro/> */}
    </div>
}
export default App