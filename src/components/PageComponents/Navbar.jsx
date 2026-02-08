import { useState } from "react"
// import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(v => !v);

    const link = ({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${
        isActive ? "bg-slate-800 text-blue-300" : "text-gray-200 hover:bg-slate-800"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-white bg-white">
            <nav className="mx-auto max-w-6xl px-4 py-3">
                {/* Desktop view */}
                <div className="hidden md:grid grid-cols-7 place-items-center">
                    {/* Hamburger */}
                    <button class="inline-flex items-center justify-center w-10 h-10 text-black bg-transparent!">☰</button>

                    {/* User */}
                    <a href="/" className="inline-flex text-black! font-bold text-lg">Admin</a>

                    {/* Search bar */}
                    <input type="text" className="bg-gray-100 border border-blue-600 rounded-3xl text-black"/>

                    {/* Toggle */}
                    <button className="">L/D mode</button>

                    {/* Greeting */}
                    <span className="text-black text-lg">Hello, User</span>

                    {/* Settings Btn */}
                    <button className="">Settings</button>
                </div>
                
                {/* Mobile toggle */}
                <button
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-700 text-gray-200"
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