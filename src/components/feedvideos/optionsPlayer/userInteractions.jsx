import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons"

export default function UserInteractions () {
    return (
        <div className="user-interactions">
            <div className="user">
                <img src="src/assets/user-practice.jpg"/>
                <span>0</span>
            </div>
            <div><FontAwesomeIcon icon={faHeart}/><span>0</span></div>
            <div><FontAwesomeIcon icon={faComment}/><span>0</span></div>
        </div>
    )
}; 
