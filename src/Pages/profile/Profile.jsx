import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email);
    return (
        <div>
            Profile
        </div>
    )
}
export default Profile;