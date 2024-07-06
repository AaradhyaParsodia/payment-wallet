import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import InputLabel from "../components/InputLabel"
import Users from "../components/Users";
export function Dashboard(){
    
    return <div className="">
        <Appbar 
            heading="Payments App"
            name={"Jake"}
        />
        <hr className="h-px my-6 bg-gray-200 opacity-80 border-0 dark:bg-gray-700"/>
        <div className="p-2 m-2">
            <Balance
                balance={"50000"}
            />
            <Users />
        </div>
    </div>
}