import { useState } from "react"
import { useAuth } from "../../../AuthContext/AuthContext"

// Page Components
import ToggleSlider from "../ToggleSlider"
import Dropdown from "../Dropdown"
import SettingsItems from "../SettingsItems"
import TextField from "../Textfield"

// Icons
import { MdOutlineSettings } from "react-icons/md"
import { MdPerson } from "react-icons/md"
import { FaSearch } from "react-icons/fa"


const Navbar = () => {
    
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(on => !on)
    const [openDropdown, setOpenDropdown] = useState(false)
    const toggleDropdown = () => setOpenDropdown(on => !on)
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        // Toggling L/D theme logic here
        //document.documentElement.classList.toggle("dark", newTheme === "dark")
    }
    const { userData } = useAuth()

    const user = userData
    ? `${userData.first_name || ""}`.trim() ||
    userData.username ||
    userData.email
    : ""
  

    return (
        <header className="sticky top-0 z-50 border-b border-white bg-white">
            <nav className="mx-auto max-w-8xl p-3">
            {/* Desktop view */}
            <div className="hidden md:flex flex-row">
                <div className="flex flex-1 gap-x-6">
                    {/* User */}
                    <a href="/" className="text-black font-bold text-lg self-center">Admin</a>

                    {/* Search bar */}
                    <div className="flex-1">
                        <div className="relative">
                            <TextField 
                                placeholderText="Search"
                                type="search"
                            />
                            <button
                                type="button"
                                className="absolute right-6 top-1/2 -translate-y-1/2 translate-x-1/2
                                            w-12 h-12 z-0 bg-blue-800 rounded-tr-full rounded-br-full text-white
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
                </div>

                {/* Spacer */}
                <div className="flex-1">

                </div>

                {/* Toggle */}
                <div className="flex ml-auto mr-3 gap-x-8">
                    <div className="place-self-center">
                        <ToggleSlider />
                    </div>

                    {/* Greeting */}
                    <span className="text-black text-lg self-center min-w-12 max-w-96">Hello, {user}</span>

                    {/* Settings Btn */}
                    <div className={`relative
                        ${openDropdown
                        ? "after:content-[''] after:absolute after:inset-x-0 after:-bottom-3.25 after:h-1 after:bg-blue-700 after:opacity-100"
                        : "after:content-[''] after:absolute after:inset-x-0 after:-bottom-3.25 after:h-1 after:bg-blue-700 after:opacity-0"
                        }

                        ${openDropdown
                        ? "before:content-[''] before:absolute before:left-0 before:right-0 before:-bottom-3 before:h-6 before:bg-linear-to-t before:from-blue-200 before:to-transparent before:blur-xs before:opacity-100 before:pointer-events-none before:z-20 before:-translate-y-1"
                        : "before:content-[''] before:absolute before:left-0 before:right-0 before:-bottom-y-3 before:h-4 before:opacity-0"
                        }
                    `}>
                        <button 
                            className={`flex flex-1 p-0 w-12 max-w-12 h-12 
                                        rounded-lg bg-transparent!  justify-center items-center place-self-center
                                        hover:text-blue-800 
                                        text-black text-lg`}
                            aria-expanded={openDropdown}
                            aria-haspopup="menu"
                            onClick={toggleDropdown}
                        >
                            Options
                        </button>
                        <Dropdown
                            state={openDropdown}
                        >
                            <SettingsItems
                                icon={<MdOutlineSettings size="24"/>}
                                label={"Settings"}
                                link={"/settings"}
                            />
                            <SettingsItems
                                icon={<MdPerson size="24"/>}
                                label={"User Account"}
                                link={"/user"}
                            />
                        </Dropdown>
                    </div>
                </div>
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
    )
}

export default Navbar