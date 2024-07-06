import { useSearchParams } from "react-router-dom"
import { Heading } from "../components/Heading"
export function SendMoney(){
    
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const firstName = searchParams.get("fName");
    const lastName = searchParams.get("lName");

    return <div className="flex justify-center items-center bg-slate-300 h-screen text-center">
        
        <div className="w-2/4 h-3/5 bg-stone-500 rounded-xl">
            
            <div className="m-8">

                    <p className=" font-bold text-2xl">Send Money</p>
                    
                    <div className="flex p-2 mt-8 ">
                        <div className="mx-1 w-12 h-12 rounded-full bg-slate-400 flex justify-center py-2 font-semibold text-2xl">{firstName[0].toUpperCase()}</div>
                        <span className="px-2 py-2 font-semibold text-2xl">
                            {firstName[0].toUpperCase() + firstName.slice(1)} {lastName[0].toUpperCase() + lastName.slice(1)}
                        </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 p-2 mt-2  font-medium">
                    
                        <label htmlFor="amount">Amount (in Rs)</label>
                    
                        <input 
                            type="number"
                            placeholder="Enter Amount"
                            htmlFor="amount"
                            id="amount"
                            className="border border-gray-300 text-gray-900 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-slate-300"
                        />
                    </div>

                    <div className="mx-2">
                        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full my-3 ">Initiate Transfer</button>
                    </div>



                </div>
            </div>


    </div>
}