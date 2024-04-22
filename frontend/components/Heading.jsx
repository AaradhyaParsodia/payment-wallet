export function Heading({heading, subHeading}){
    return <div className="grid justify-center text-center ">
        {/* <div className=""> */}
            <p className=" font-bold text-2xl">{heading}</p>
            <p className=" text-gray-600 font-medium opacity-80">{subHeading}</p>
        {/* </div> */}
    </div>
}