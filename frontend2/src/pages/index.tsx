import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Logoff } from "./Logoff";

export function PagesRouter()
{
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logoff" element={<Logoff />} />
    </Routes>
}