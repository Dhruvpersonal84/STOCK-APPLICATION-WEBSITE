import {Routes,Route} from "react-router-dom"
import Summary from "./Summary";
import Watchlist from "./Watchlist";
import Oders from "./Oders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import { GeneralContextProvider } from "./GeneralContext";

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <GeneralContextProvider>
            <Watchlist />
            </GeneralContextProvider>
            <div className="content p-4">
                <Routes>
                    <Route exact path="/" element={<Summary/>}></Route>
                    <Route path="/Orders" element={<Oders/>}></Route>
                    <Route path="/Holdings" element={<Holdings/>}></Route>
                    <Route path="/Positions" element={<Positions/>}></Route>
                    <Route path="/Funds" element={<Funds/>}></Route>
                    
                </Routes>
            </div>
        </div>
    )
}
