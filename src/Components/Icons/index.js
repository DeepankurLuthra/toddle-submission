import ArrowLeft from "./ArrowLeft"
import ArrowRight from "./ArrowRight"
import DeleteIcon from "./DeleteIcon"
import MoveIcon from "./MoveIcon"

export const Icon = ({type, disabled, onClick}) =>{
switch (type) {
    case "arrow-left":
        return(<ArrowLeft disabled={disabled} onClick={onClick}/>)
    case "arrow-right":
        return(<ArrowRight disabled={disabled} onClick={onClick}/>)
    case "delete":
        return(<DeleteIcon disabled={disabled} onClick={onClick}/>)
    case "move":
        return(<MoveIcon disabled={disabled} onClick={onClick}/>)
    default:
        return null
}
}