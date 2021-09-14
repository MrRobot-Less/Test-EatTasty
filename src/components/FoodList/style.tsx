import styled from "styled-components";
import {BiTrash} from 'react-icons/bi'

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const Item = styled.div`
    display: flex;
    width: 95%;
    margin: 5px auto;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    /* border: 1px solid #31323428;; */
    border-radius: 10px;
`;

export const QuantityDiv = styled.div`
    display: flex;
    align-items: center;
    width: 25%;
    margin-left: calc(2.5rem / 2 - 1.5rem / 2);
    button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 5px;
        background-color: #31323428;

    }
    span{
        margin: 0 20px;
        color: #000;
    }
`

export const TrashDiv = styled.div`
    margin-left: auto;
`;

export const PriceDiv = styled.div`
    display: flex;
    margin-left: auto;
`

export const TrashIcon = styled(BiTrash)`
    width: 1rem;
    height: 1rem;
    color: #e41111;
`
