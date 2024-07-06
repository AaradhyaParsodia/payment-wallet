export default function Redirect({
    lableText="",
    btnText="Click Me",
    handleClick
}){
    return <p className="">
        {lableText} 
        <button className="underline text-blue-600" onClick={handleClick}>
            {btnText}
        </button>
    </p>
}