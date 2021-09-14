import styled from "styled-components";
import {GrAdd} from 'react-icons/gr'

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    display: inline;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 1rem;
    position: relative;
    border-radius: 30px;
    padding-bottom: 55px;
    @media screen and (min-width: 517px){
        margin-right: 1rem;
        min-width: 40vw;
        
    }
`;


export const Image = styled.img`
    height: 70px;
    width: 70px;
    object-fit: scale-down;
    width: auto;
    display: flex;
    margin-left: auto;

`
export const AddButton = styled.button`
    
    
    outline: none;
    border: none;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #F5CA48;
    padding: 20px 40px;
    border-radius: 0 30px 0 30px;
`


export const AddIcon = styled(GrAdd)`
    width: 0.5rem;
    height: 0.5rem;
    color: #313234;
`

export const Informations = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PriceDiv = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7.5px 25px;
`