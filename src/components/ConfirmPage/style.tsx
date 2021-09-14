import styled from "styled-components";
import {GiConfirmed} from 'react-icons/gi'
import {IoCloseOutline} from 'react-icons/io5'

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: rgb(20,194,7);
    background: radial-gradient(circle, rgba(20,194,7,1) 49%, rgba(34,158,25,1) 100%);
`;
export const ConfirmedIcon = styled(GiConfirmed)`
    width: 6rem;
    height:6rem;
    color: #fff;
    margin-bottom: 1rem;
`

export const ConfirmButton = styled.button`
    padding: 10px;
    background-color: #4BB543;
    margin-left: 1rem;
    border-radius: 10px;
    border: 1px solid #fff;
`;

export const CloseIcon = styled(IoCloseOutline)`
    width: 3rem;
    height: 3rem;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
`