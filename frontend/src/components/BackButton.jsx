import { Link } from "react-router-dom"
import { FcPrevious } from 'react-icons/fc'

const BackButton = ({ destination='/'}) => {
  return (
    <div className="flex">
        <Link 
        to={destination}
        className="bg-grey text-sky-400 px-4 py-1 rounded-lg w-fit"
        >
            <FcPrevious className="text-2xl"/>
        </Link>
    </div>
  )
}

export default BackButton