import { FC } from "react";
import { IProfile } from "../../interfaces/Profile";

interface IProfileRender {profile: IProfile}

const ProfileRender: FC<IProfileRender> = ({profile}: {profile: IProfile}) =>{

    return(
        <>
            <h1>{profile.login}</h1>
            <img src={profile.avatar_url} alt="profile image" />
        </>
    )
} 
export default ProfileRender