"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AiFillDatabase } from "react-icons/ai";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

const AdminMenu = () => {
    const pathName= usePathname();
    return (
        <div className="flex md:flex-col gap-3 p-3">
            <Link style={{color:`${(pathName=="/admin"||pathName.startsWith("/admin/responses"))?"#fff":""}`,backgroundColor: `${(pathName=="/admin"||pathName.startsWith("/admin/responses"))?"#1cbad3":""}`}} className="flex flex-col gap-1 justify-center items-center hover:bg-secondary hover:text-white p-1 shadow-xl rounded-lg" href={`/admin`}>        
                <AiFillDatabase className="md:text-[30px]"/>
                <p className=" font-bold text-xs">
                    Responses
                </p>
            </Link>
            <Link style={{color:`${pathName.startsWith("/admin/visualization")?"#fff":""}`, backgroundColor: `${pathName.startsWith("/admin/visualization")?"#1cbad3":""}`}} className="flex flex-col gap-1 justify-center items-center hover:bg-secondary hover:text-white p-1 shadow-xl rounded-lg" href={'/admin/visualization'}>
                <TbDeviceDesktopAnalytics className="md:text-[30px]"/>
                <p className="font-bold text-xs">
                    Visualization
                </p>
            </Link>
        </div>
    );
}

export default AdminMenu;