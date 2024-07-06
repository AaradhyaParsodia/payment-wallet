import { Heading } from "./Heading"
import UserCard from "./UserCard"
export default function Appbar({
    heading = "Payments App",
    name
}){
    return <div className="flex justify-between p-2 m-2">
        <Heading
            heading={heading}
        />
        <UserCard
            name={name}
        />
    </div>
}