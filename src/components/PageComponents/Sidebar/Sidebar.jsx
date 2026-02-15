import { useState } from "react"

// Components
import SidebarItem from "./SidebarItems"

// Icons
import { MdOutlineArrowBackIos } from "react-icons/md"
import { MdOutlineLogout } from "react-icons/md"
import { MdDashboard } from "react-icons/md"
import { MdFactory } from "react-icons/md"
import { MdNewspaper } from "react-icons/md"
import { MdPerson } from "react-icons/md"
import { MdDevicesOther } from "react-icons/md"
import { MdAssignmentInd } from "react-icons/md"
import { MdDocumentScanner } from "react-icons/md"
import { MdAccountCircle } from "react-icons/md";
import { FaTrash } from "react-icons/fa6"



const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return(
        <aside className={`h-screen transition-all duration-300
                ${isCollapsed ? "w-20" : "w-80"}`
            }
        >
            <nav className="h-full flex flex-col bg-blue-800 border-r-3 border-blue-950 shadow-sm">
                {/* Sidebar header */}
                <div className={`p-4 flex items-center
                        ${isCollapsed ? "justify-center" : "justify-between"}`
                    }
                >
                    <img 
                        className={`w-32 
                            ${isCollapsed ? "hidden" : "block"}`
                        } 
                        src="" 
                        alt="SAMS LOGO" 
                    />
                    <button 
                        className={`flex flex-1 p-0 w-12 max-w-12 h-12 rounded-lg bg-transparent! hover:text-blue-400 justify-center items-center`}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        <MdOutlineArrowBackIos 
                            size="24"
                            className={`transition-all duration-300 
                                ${isCollapsed ? "rotate-180": "rotate-0"}`
                            } 
                        />
                    </button>
                </div>
                {/* Sidebar items */}
                <div className="flex-1 px-3">
                    <SidebarItem
                        icon={<MdDashboard size="40"/>}
                        label={"Dashboard"}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        icon={<MdFactory size="40"/>}
                        label={"Department"}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        icon={<MdNewspaper size="40"/>}
                        label={"Cost Center"}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        icon={<MdPerson size="40"/>}
                        label={"Employee"}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        icon={<MdDevicesOther size="40"/>}
                        label={"Asset"}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        icon={<MdAssignmentInd size="40"/>}
                        label={"Assignment"}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        icon={<MdDocumentScanner size="40"/>}
                        label={"Logs"}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        icon={<FaTrash size="40"/>}
                        label={"Disposed"}
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        icon={<MdAccountCircle size="40"/>}
                        label={"Accounts"}
                        isCollapsed={isCollapsed}
                    />
                
                </div>
                {/* Sidebar footer */}
                <div className="flex border-t-2 border-blue-900 p-3">
                    {/* User Icon */}
                    <div className="flex w-13 h-13 bg-gray-500 rounded items-center justify-center"
                    >
                        <span className="text-[36px]">GL</span>
                    </div>
                    <div className={`flex flex-1 justify-between items-center w-52 ml-3 
                        ${isCollapsed ? "hidden" : "block"}`}
                    >
                        <div>
                            <h4 className="font-semibold">Gabriel Liwanag</h4>
                            <span className="text-xs text-white">gbliwanag@nexutech.com.ph</span>
                        </div>
                        <MdOutlineLogout 
                            size="24"
                        />
                    </div>

                </div>
            </nav>
        </aside>
    )
}

export default Sidebar