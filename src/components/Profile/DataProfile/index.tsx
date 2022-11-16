import { FC } from "react";
import { useProfileContext } from "../../../context/ProfileContext";
import { Container, Footer, ProfileImage, ProfilePhoto, Text } from "./styel";

interface IDataProfile {}
const DataProfile: FC<IDataProfile> = () => {
    const {  profileData  } = useProfileContext()

    return(
        <Container>
            {profileData.url ? 
                <>
                    <ProfilePhoto>
                        <ProfileImage src={profileData?.avatar_url} alt="profile image" />
                    </ProfilePhoto>
                    <Text>Id: {profileData?.id}</Text>
                    <Text>Nome: {profileData?.name}</Text>
                    <Text>Repositorios: {profileData?.public_repos}</Text>
                    <Footer>
                        <Text>Bio: {profileData?.bio}</Text>
                    </Footer> 
                </>
            : 
            <Text>Nenhum perfil encontrado</Text>
            }
        </Container>
    )

}

export default DataProfile