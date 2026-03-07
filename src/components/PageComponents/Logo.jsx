const Logo = ({className = "", ...props}) => {

    return(

        <img 
            className={`w-32 whitespace-nowrap text-black ${className}`}
            {...props}
            alt="SAMS LOGO" 
        />

    )
}

export default Logo