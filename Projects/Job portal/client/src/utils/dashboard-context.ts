import { createContext } from "react";

export const DashboardContext = createContext({
    showSidebar: false,
    toggleSidebar:()=>{},
    isDarkTheme: false,
    toggleDarkTheme:()=>{},
    logoutUser:()=>{},
    user:{}
});