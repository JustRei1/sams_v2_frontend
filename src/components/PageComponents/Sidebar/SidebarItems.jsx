const SidebarItem = ({icon, isCollapsed, label}) => {
    return(
        <li className="flex items-center p-2 hover:bg-blue-900 cursor-pointer">
            {icon}
            {!isCollapsed && <span className="ml-4">{label}</span>}
        </li>
    )
}

export default SidebarItem