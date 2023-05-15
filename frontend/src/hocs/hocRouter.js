import { useNavigate } from "react-router-dom";

export default function hocRouter(Component){
    return (props) => {
        const navigate = useNavigate()
        return <Component {...props} navigate={navigate} />
    }
}