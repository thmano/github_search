import { FC } from "react"
import DataProfile from "../Profile/DataProfile"
import RepoProfile from "../Profile/RepoProfile"
import Search from "../Search"
import { BodyProfile, Container, Header, Logo } from "./style"

interface IHome {}
const Home: FC<IHome> = () => { 

    return(
        <Container>
            <Header>
                <Search></Search>
                <Logo>Github Search</Logo>
            </Header>
            <BodyProfile>
                <DataProfile />
                <RepoProfile />
            </BodyProfile>
        </Container>
    )

}
export default Home