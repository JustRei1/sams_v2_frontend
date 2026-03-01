const Dropdown = ({state = false, children}) => {
    return(
        <div 
        role="menu"
        aria-hidden={!state}
        className={`
            flex flex-col absolute bg-white right-5 shadow-2xl shadow-black rounded-md
            h-fit w-auto
            transition-all duration-100 ease-in
            ${state ? "opacity-100 translate-y-4 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"}

        `}>
            {children}
        </div>
    )
}

export default Dropdown