import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faPlus,
  faCommentDots,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export default function OptionsPlayer() {
    return (
      <div className="options">
        <div><FontAwesomeIcon icon={faHouse}/><span>Home</span></div>
        <div><FontAwesomeIcon icon={faMagnifyingGlass}/><span>Friends</span></div>
        <div className="plus-container"><FontAwesomeIcon className="plus-icon" icon={faPlus}/></div>
        <div><FontAwesomeIcon icon={faCommentDots}/><span>Imbox</span></div>
        <div><FontAwesomeIcon icon={faUser}/><span>Me</span></div>
      </div>
    )
}