import { createContext, useCallback, useContext, useState } from "react";

interface IProfileContext {
    id: number;
    login: string;
    name: string;
    bio: string;
    repos_url: string;
    avatar_url: string;
    node_id?: string;
    gravatar_id?: string;
    url?: string;
    html_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    starred_url?: string;
    subscriptions_url?: string;
    organizations_url?: string;
    events_url?: string;
    received_events_url?: string;
    type?: string;
    site_admin?: boolean;
    company?: any;
    blog?: string;
    location?: any;
    email?: any;
    hireable?: any;
    twitter_username?: any;
    public_repos?: number;
    public_gists?: number;
    followers?: number;
    following?: number;
    created_at?: Date;
    updated_at?: Date;
}

interface IPerfilContext {
    profileData: IProfileContext
    setProfile: (profile: IProfileContext ) => void
  }

const DefaultProfileContext = {
    id: 0,
    login: '',
    name: '',
    bio: '',
    repos_url: '',
    avatar_url: '',
    node_id: '',
    gravatar_id: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    company: '',
    blog: '',
    location: '',
    email: '',
    hireable: '',
    twitter_username: '',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: new Date(),
    updated_at: new Date()
}


export const ProfileContext = createContext<IPerfilContext>({
    profileData: { ...DefaultProfileContext},
    setProfile: () => {}
})

export const ProfileContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [profileData, setProfileData] =
    useState<IProfileContext>({
      ...DefaultProfileContext
    })

    const setProfile = useCallback((newProfile: IProfileContext) => {
        if(newProfile){
            setProfileData(newProfile)
        }
    }, [])
    return (
        <ProfileContext.Provider value={{profileData, setProfile}}>
            {children}            
        </ProfileContext.Provider>
    )
}

export const useProfileContext = () => {
    const context = useContext(ProfileContext)
    return context
  }