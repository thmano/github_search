import styled from 'styled-components'

export const Container = styled.div`
     height: calc(100vh - 69px);
    border-right: 3px solid #606060;
    width: 300px;
`
export const ProfilePhoto = styled.div`
    width: 100%;
    display: flex;
`
export const ProfileImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 30px auto;
` 

export const Text = styled.h3`
    padding: 0px 20px;
    color: #fff;
    margin: 10px 0px ;
    `
export const Footer = styled.div`
    bottom: 10px;
    position: absolute;
    max-width: 300px;
    
`