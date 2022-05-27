import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const UserConnectedProfile: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const userData = authCtx.userData;
  const fullName = userData.firstName.concat(" ", userData.lastName);
  return (
    <div className="flex flex-row justify-end mr-10 mt-2">
      <div className="flex flex-row items-center">
        <FontAwesomeIcon
          className="fill-current text-purple-medium text-4xl mr-8"
          icon={faBell}
        />
        <img className="w-[55px] block my-auto" src="./img/avatar_jane.png" />
        <p>{fullName}</p>
      </div>
    </div>
  );
};

export default UserConnectedProfile;
