import { FC, useState } from "react";
import { Api } from "../../providers";
import {  Container, Input } from './style'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useProfileContext } from "../../context/ProfileContext";
import { useSnackbar   } from 'notistack'

interface ISearch {}
const  Search: FC<ISearch> = () => {

   const { setProfile  } = useProfileContext()

    const [value, setValue] = useState('')

    const { enqueueSnackbar } = useSnackbar()

    const searchProfile = async () => {
        if(value !== ''){
          await  Api.get("users/" + value).then((resp) => {
            setProfile(resp.data);
            }).catch((error) => {
                enqueueSnackbar('Nenhum perfil foi encontrado', { variant: 'error' })
                setProfile( {id: 0,login: '',name: '',bio: '',repos_url: '',avatar_url: ''})
              });
        }
       
    }  


    return(
        <>
            <Container>
                <Input 
                    type="text" 
                    placeholder="Nickname..."
                    value={value} 
                    name="profile" 
                    id="profile"
                    onChange={event => {
                        setValue(
                            `${event.target.value}`
                            );
                        }}
                        />
                <Button onClick={searchProfile} variant="contained" endIcon={<SearchIcon />}>
                    Search
                </Button>
          
            </Container>
        </>
    )
}
export default Search