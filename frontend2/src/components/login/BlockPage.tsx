import { Route, Routes } from "react-router-dom";
import { GetPassword } from "./GetPassword";
import { RecoverPassword } from "./RecoverPassword";

export type TData = {
    login: string,
    password: string
}

export type TDataKeys = keyof TData;

export function BlockPage()
{
    return <Routes>
        <Route path="/recover" element={<RecoverPassword />} />
        <Route path="/*" element={<GetPassword />} />
    </Routes>
}