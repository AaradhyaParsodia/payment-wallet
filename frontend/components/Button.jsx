const defaultStyle = "w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 ";
export default function Button({
    btnText,
    onClick,
    customStyle = ""
}){
    return <>
        <button
            onClick={onClick}
            type="button" 
            className={defaultStyle + customStyle}
        >
            {btnText}
        </button>
    </>
}