import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
    width: calc(100% - 200px);
    height: calc(100vh - 69px);

`

export const Card = styled.div`
    width: 200px;
    margin: 10px;
    padding: 5px;
    height: 200px;
    display: flex;
    overflow: auto;
    align-items: center;
    border-radius: 10px;
    flex-direction: column;
    border: 1px solid #606060;
`

export const Text = styled.h5`
    color: #fff;
    margin: 10px 0px ;
    padding: 0px 20px;
    `