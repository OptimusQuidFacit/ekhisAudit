"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrUserAdmin } from "react-icons/gr";
import { IoIosHome } from "react-icons/io";

export const user={
    isAdmin:true
}
const Menu = () => {
    const pathName= usePathname();
    const isOnAdmin= ()=>{
        return pathName.startsWith('/admin')?true:false;
    }
    const isCurrentPage=(link:string)=>{
        if(link.startsWith("/admin")){
            return pathName.startsWith(link)?true:false;
        }
        return pathName===link?true:false;
    }
    const menuItems=[
        {
            name: "Home",
            path: "/",
            icon:<IoIosHome/>
        }
    ]
    user.isAdmin && menuItems.push({
        name: "Admin",
        path: "/admin",
        icon: <GrUserAdmin/>
    })
    let activeColor=pathName==="/"?"#1cbad3":"#F2AE24"
    return (
        <div style={{backgroundColor:`${isOnAdmin()?"":"#F2AE24"}`}} className="flex items-center bg-primary text-white p-2 justify-end">
            {
                menuItems.map(item=>
                    <div key={item.name}>
                        <Link style={{color:`${isCurrentPage(item.path)?"#225322":""}`}} href={`${item.path}`} className="font-bold py-1 px-2 hover:underline text-sm flex gap-1 items-center">
                            <p>
                                {item.icon} 
                            </p>
                                {item.name}
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

export default Menu;