import { useNavigate } from "react-router-dom"

export default function UserTile({user}){
    // console.log(`Log From UserTile ${user}`)

    let navigate = useNavigate();

    function handleClick(){
        navigate(`/send?id=${user._id}&fName=${user.firstName}&lName=${user.lastName}`);
    }

    return <div className="flex justify-between m-4">
        <div className="flex">
            <div className=" w-10 h-10 rounded-full bg-slate-400 flex justify-center pt-2">U</div>
            <span className="p-2 mr-2">
                {user.firstName[0].toUpperCase() + user.firstName.slice(1)} {user.lastName[0].toUpperCase() + user.lastName.slice(1)}
            </span>
        </div>
        <div>
            <button
                onClick={()=>{
                    handleClick();
                }}
                type="button" 
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >Send Money</button>
        </div>
    </div>
}