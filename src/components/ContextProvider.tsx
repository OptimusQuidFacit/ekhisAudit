"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export type appcontextType = {
    isLoading: boolean,
    setIsLoading: Dispatch<SetStateAction<boolean>>
    adminLGA: string,
    adminQuarter: string,
    adminYear: number,
    setAdminYear:  Dispatch<SetStateAction<number>>
    setAdminQuarter:  Dispatch<SetStateAction<string>>
    setAdminLGA:  Dispatch<SetStateAction<string>>
}
export const appContext= createContext<appcontextType|undefined>(undefined);

const ContextProvider = ({children}: {children:ReactNode}) => {
    const date= new Date();
    const [isLoading, setIsLoading] = useState(false);
    const [adminLGA, setAdminLGA] = useState<string>("Ado")
    const [adminQuarter, setAdminQuarter] = useState<string>("Q1")
    const [adminYear, setAdminYear] = useState<number>(date.getFullYear())
    return (
        <appContext.Provider value={{isLoading, setIsLoading, adminLGA, setAdminLGA, adminQuarter, setAdminQuarter, adminYear, setAdminYear}}>
            {children}
        </appContext.Provider>
    );
}

export default ContextProvider;