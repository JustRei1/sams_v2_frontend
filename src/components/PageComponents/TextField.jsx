import { useState } from "react"

// Icons
import { FaRegEye } from "react-icons/fa6"
import { FaRegEyeSlash } from "react-icons/fa6"

const TextField = ({placeholderText = "", type = "default"}) => {

    const [toggle, setToggle] = useState(false)

    return(
        <>
            {
                type === "search" 
                // Search bar input
                ?   <input 
                        type="text" 
                        className="w-full bg-gray-100 border border-gray-400 rounded-3xl text-black pl-6 pr-18 z-10 text-lg h-12"
                        placeholder={placeholderText}
                    />
                : type === "password" 
                // Password field
                ?   <div className="relative">
                        <input                  
                            type={!toggle ? "password" : "text"} 
                            className="w-full bg-gray-100 border border-gray-400 rounded-3xl text-black px-6 text-md h-10"
                            placeholder={placeholderText}
                        />
                        <button
                            type="button"
                            className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-1/2
                                        w-10 h-10 z-10 rounded-tr-full rounded-br-full text-gray-600
                                        flex items-center justify-center
                                        focus:outline-none"
                            aria-label="Search"
                            onClick={() => setToggle(!toggle)}
                        >
                            {
                                !toggle
                                ?
                                <FaRegEye
                                    className="absolute right-4"
                                    size="20"
                                />
                                :
                                <FaRegEyeSlash
                                    className="absolute right-4"
                                    size="20"
                                />
                            }

                        </button>
                    </div>
                // Default textfield
                :   <input                  
                        type="text" 
                        className="w-full bg-gray-100 border border-gray-400 rounded-3xl text-black px-6 text-md h-10"
                        placeholder={placeholderText}
                    />
            }
        </>
    )
}

export default TextField