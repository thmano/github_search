import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: fixed;
    flex-direction: row;
`

export const Button = styled.button `
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #f1f1f1;
    cursor: pointer;
    transition: border-color 0.25s;
    width: 40px;
    height: 40px;
    background-color: #367DBE;
    &:hover {
        background-color: #2a6296;
    }
  `

export const Input = styled.input`
    width: 150px;
    font-size: 22px;
    padding: 5px;
    border-radius: 5px;
    border:1px solid #c6c6c6;
    height: 30px;
    margin: 0px 12px;
    background-color: #3F3F3F;
    border: none;
    color: #fff;
    &:focus{
        outline: none;
    }

`