import styled from "styled-components";
import {RiShoppingCart2Line} from 'react-icons/ri'
import {FiArrowLeft} from 'react-icons/fi'
import {HiOutlineEmojiSad} from 'react-icons/hi'

export const ShopDiv = styled.div`
    display: flex;
    position: relative;
    padding: 10px;
    background-color: #F5CA48;
    border-radius: 50%;
    width:2.5rem;
    height:2.5rem;
    display: flex;
    justify-content: center;
    span{

        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        
        font-size: 12px;
        margin-top: auto;
        bottom: -5px;
        right: -5px;
        padding: 5px;
        border-radius: 50%;
        background-color: #fff;
        width: 1.5rem;
        height: 1.5rem;
        font-weight: 900;
    }
`

export const ShopCarIcon = styled(RiShoppingCart2Line)`
    width: 100%;
    height: 100%;
    color: #313234;

`

export const Container = styled.div`
    width: 100%;
    max-height: 100%;
    padding: 0 !important;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 3.2rem;
    overflow: hidden;
`

export const CloseIcon = styled(FiArrowLeft)`
    width: 1rem;
    height: 1rem;
    color: #313234;
`

export const CloseButton = styled.button`
    display: flex;
    margin-right: 5px;
`

export const FoolterBar = styled.div`
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #313234;;
    padding: 10px;
    justify-content: space-between;

`

export const CancelButton = styled.button`
    padding: 10px;
    background-color: gray;
    border-radius: 10px;
    border: 1px solid #fff;
`;

export const SadIcon = styled(HiOutlineEmojiSad)`
    width: 1rem;
    height: 1rem;
    color: #313234;
`