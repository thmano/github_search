import { FC, useEffect, useState } from "react";
import { useProfileContext } from "../../../context/ProfileContext";
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { Api } from "../../../providers";
import { Card, Container, Text } from "./style";
import { Repos } from "../../../interfaces/repos";

interface IRepoProfile {}
const RepoProfile: FC<IRepoProfile> = () => {

    const {  profileData  } = useProfileContext()
    const [repositories, setRepositories] = useState<Repos[]>()

    useEffect(() => {
        Api.get(`users/${profileData.login}/repos` ).then((resp) => {
            setRepositories(resp.data);
            }).catch((error) => {
                setRepositories([])
              });

          
    },[profileData])

    return(

        <Container>  
        {repositories ? 
            repositories.map((item, index) =>{ 
                return(
                    <Card>
                        <FolderCopyIcon sx={{ fontSize: 40  }} style={{color: "#fff"}} />
                        <Text>
                            Nome: {item.name}
                        </Text>
                        <Text>
                            Descrição: {item.description}
                        </Text>
                        <Text>
                            Linguagem: {item.language}
                        </Text>
                    </Card>
                )
            })
            : <Text> </Text>
        }
        </Container>
    )

}

export default RepoProfile