const Form = ({className = "", children, ...props}) => {

    return(

        <div className={`flex flex-col p-5 bg-white
                        h-fit w-fit place-self-center
                        rounded-lg ${className}`}
            {...props}
        >
            {children}
        </div>

    )
}

export default Form