import { useState } from "react"

// Icons
import { FaSun } from "react-icons/fa"
import { FaMoon } from "react-icons/fa"

const ToggleSlider = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        // Toggling L/D theme logic here
        //document.documentElement.classList.toggle("dark", newTheme === "dark")
    }

    return(
        <label className="items-center cursor-pointer" aria-label="Toggle dark mode">
            <input
                id="toggle_checkbox"
                type="checkbox"
                className="peer sr-only"
                checked={theme === "dark"}
                onChange={toggleTheme}
                aria-checked={theme === "dark"}
                role="switch"
            />

            {/* <span
                className="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-300
                    transition-colors duration-200 ease-out
                    peer-checked:bg-blue-600
                    peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-600/25
                    peer-disabled:cursor-not-allowed peer-disabled:opacity-60">
                <span
                    className="pointer-events-none absolute left-0.5 size-5 rounded-full bg-white shadow-sm
                            ring-1 ring-black/5 transition-all duration-200 ease-in-out
                            peer-checked:translate-x-5">
                </span>
            </span> */}
            
            <span
                className="
                relative inline-flex h-7 w-14 mt-1.5 items-center rounded-full bg-slate-300
                transition-colors duration-200 ease-out
                
                peer-checked:bg-linear-to-r
              peer-checked:from-cyan-600
              peer-checked:to-cyan-200

                peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/0
                peer-disabled:cursor-not-allowed peer-disabled:opacity-60

                /* thumb as pseudo-element */
                after:absolute after:left-0.2 after:top-0.2 after:h-8 after:w-8 after:peer-focus:ring-cyan-500/30
                after:rounded-full after:bg-white after:shadow-sm after:ring-1 after:ring-black/5
                after:transition-transform after:duration-200 after:ease-out

                /* move thumb on check */
                peer-checked:after:translate-x-6
                
                /* Move the icon wrapper child too */
                peer-checked:[&>.icon-wrap]:translate-x-6

                ">
                    
                <span
                    className="
                        icon-wrap absolute left-1.5 top-1 h-5 w-5 z-10
                        transition-transform duration-200 ease-out
                        pointer-events-none grid place-items-center
                    ">
                    {/* {theme === "light" ? <FaMoon/> : <FaSun/>} */}
                    {theme === "light" ? <FaSun className="h-5 w-5 text-amber-500" /> : <FaMoon className="h-5 w-5 text-slate-700" />}
                </span>

            </span>

        </label>
    )
}

export default ToggleSlider 