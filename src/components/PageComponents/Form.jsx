const Form = ({className = "", children, onSubmit, ...props}) => {

    return(

        <form 
            onSubmit={onSubmit}
            className={`flex flex-col p-5 bg-white
                        h-fit w-fit place-self-center
                        rounded-lg ${className}`}
            {...props}
        >
            {children}
        </form>

    )
}

export default Form