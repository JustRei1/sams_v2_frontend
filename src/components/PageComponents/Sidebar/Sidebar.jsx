import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {

    return(

        <aside className="h-screen w-75">
            <nav className="h-full flex flex-col bg-blue-800 border-r-3 border-blue-950 shadow-sm">
                {/* Sidebar header */}
                <div className="px-2 py-4 flex justify-between items-center">
                    <img className="w-32" src="" alt="SAMS LOGO" />
                    <button className="p-1.5 rounded-lg bg-transparent! hover:text-blue-400">
                        <MdOutlineArrowBackIos/>
                    </button>
                </div>
                {/* Sidebar items */}
                <div className="flex-1 px-3">
                    <ul>Dashboard</ul>
                    <ul>Department</ul>
                    <ul>Cost Center</ul>
                    <ul>Employee</ul>
                    <ul>Asset</ul>
                    <ul>Assignment</ul>
                    <ul>Logs</ul>
                    <ul>Disposed</ul>
                    <ul>Accounts</ul>
                </div>
                {/* Sidebar footer */}
                <div className="border-t-2 border-blue-900 flex p-3">
                    {/* User Icon */}
                    <div className="flex w-16 h-16 bg-gray-500 rounded items-center justify-center">
                        <span className="text-[40px]">GL</span>
                    </div>
                    <div className={'flex justify-between items-center w-52 ml-3'}>
                        <div>
                            <h4 className="font-semibold">Gabriel Liwanag</h4>
                            <span className="text-xs text-white">gbliwanag@nexutech.com.ph</span>
                        </div>
                        <MdOutlineLogout className="ml-5"/>
                    </div>
                </div>
            </nav>
        </aside>

    )
}

export default Sidebar