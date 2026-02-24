import { Link } from 'react-router-dom'

const SidebarItem = ({icon, isCollapsed, label, link}) => {
    return(
        <Link className="flex items-center p-2 my-1 hover:bg-blue-900 cursor-pointer" to={`${link}`}>
            <i className="shrink-0">{icon}</i>
            <span className={`ml-4 text-[1.2rem] inline-block whitespace-nowrap transition-all duration-200 text-white
                ${isCollapsed 
                ? "max-w-0 opacity-0 -translate-x-20" 
                : "max-w-48 opacity-100 translate-x-0"
                }`}
            >
                {label}
            </span>
        </Link>
    )
}

export default SidebarItem