import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Logoff } from "./Logoff";
import { About } from "./About";

export function PagesRouter()
{
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logoff" element={<Logoff />} />
        <Route path="/about" element={<About />} />
    </Routes>
}