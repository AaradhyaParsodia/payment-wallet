export default function UserCard({name = "Sunshine"}){
    return <div className="flex">
        <span className="pt-2 mr-2">
            Hello, {name}
        </span>
        <div className=" w-10 h-10 rounded-full bg-slate-400 flex justify-center pt-2">U</div>
    </div>
}