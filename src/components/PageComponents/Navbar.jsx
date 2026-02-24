import { useState } from "react"

// Page Components
import ToggleSlider from "./ToggleSlider"

// Icons
import { MdOutlineSettings } from "react-icons/md"
import { FaSearch } from "react-icons/fa"


const Navbar = () => {
    
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(v => !v);
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        // Toggling L/D theme logic here
        //document.documentElement.classList.toggle("dark", newTheme === "dark")
    }

    return (
        <header className="sticky top-0 z-50 border-b border-white bg-white">
            <nav className="mx-auto max-w-8xl px-4 py-7">
            {/* Desktop view */}
            <div className="hidden md:grid grid-cols-12 gap-x-4">
                {/* User */}
                <a href="/" className="text-black col-span-1 font-bold text-lg self-center">Admin</a>

                {/* Search bar */}
                <div className="col-span-4">
                    <div className="relative">
                        <input 
                            type="text" 
                            className="w-full bg-gray-100 border border-gray-400 rounded-3xl text-black pl-6 pr-18 z-10 text-lg h-12"
                            placeholder="Search"
                        />
                        <button
                            type="button"
                            className="absolute right-6 top-1/2 -translate-y-1/2 translate-x-1/2
                                        w-12 h-12 z-0 bg-blue-600 rounded-tr-full rounded-br-full text-white
                                        flex items-center justify-center shadow
                                        focus:outline-none hover:bg-blue-700"
                            aria-label="Search"
                        >
                            <FaSearch 
                                className="absolute right-4"
                                size="20"
                            />
                        </button>
                    </div>
                </div>

                {/* Toggle */}

                <div className="col-start-10 place-self-center">
                    <ToggleSlider />
                </div>

                {/* Greeting */}
                <span className="text-black text-lg self-center">Hello, User</span>

                {/* Settings Btn */}
                <button 
                    className={`flex flex-1 p-0 w-12 max-w-12 h-12 rounded-lg bg-transparent! hover:text-blue-800 justify-center text-black items-center place-self-center`}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <MdOutlineSettings size="24"/>
                </button>
            </div>
            
            {/* Mobile toggle */}
            <button
                className="md:hidden items-center justify-center w-10 h-10 rounded-md border border-slate-700 text-gray-200"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={toggle}
            >
                ☰
            </button>

            {/* Mobile drawer */}
            {open && (
                <div className="md:hidden border-t border-slate-800 bg-slate-900">

                    {/* User */}
                    <a href="/" className="text-white font-bold text-lg">Admin</a>
        
                    {/* Search bar */}
                    <input type="text" className="bg-white text-black"/>
                    
                    {/* Toggle */}
                    <button>L/D mode</button>

                    {/* Greeting */}
                    <span>Hello, User</span>

                    {/* Settings Btn */}
                    <button>Settings</button>
                </div>
            )}
            </nav>
        </header>
    );
}

export default Navbar