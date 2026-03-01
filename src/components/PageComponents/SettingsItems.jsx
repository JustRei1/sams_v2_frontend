import { Link } from 'react-router-dom'

const SettingsItems = ({icon, link, label}) => {
    return(
        <Link 
            className="flex items-center p-4 my-1 hover:bg-gray-200 cursor-pointer" 
            to={`${link}`}
        >
            <i className="shrink-0 text-gray-500">{icon}</i>
            <span className={`text-[1rem] ml-2 inline-block whitespace-nowrap text-black`}
            >
                {label}
            </span>
        </Link>
    )
}

export default SettingsItems