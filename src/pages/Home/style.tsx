import styled from "styled-components";
import {HiMenuAlt3} from 'react-icons/hi';
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'

// interfaces
interface ICategoriesCard {
    selected?: boolean
}

//

export const Container = styled.div`
    position: relative;
    max-width: 100vw;
    height: 100%;
    margin-top: 3.5rem;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;


export const SearchDiv = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 2rem 0;
    justify-content: space-between;
`

export const CategoriesDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1.25rem 0;
    @media screen and (min-width: 500px){
        justify-content: center;
    }
    

`

export const CategoriesCard = styled.div<ICategoriesCard>`
    transition: all .3s ease-in-out;
    width: 40%;
    @media screen and (min-width: 500px){
        width: 180px;
        margin: 0 1rem;
    }
    height: 175px;
    background-color: ${props => props.selected ? (`#F5CA48`): ('transparent')};;;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    button{
        margin-top: 1rem;
        min-width: 2rem;
        min-height: 2rem;
        border-radius: 50%;
        background-color: ${props => props.selected ? (`#FFF`): ('#F26C68')};;;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
    }
    svg{
        color: ${props => props.selected ? (`#000`): ('#fff')};;;
    }

    :hover , :focus {
        transform: scale(1.1);
    }
`

export const SearchInput = styled.input`
    width: calc(100% - 2rem - 5px);
    height: 2rem;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 1px solid #838383;
    color: #313234;
`




// Icons

export const MenuIcon = styled(HiMenuAlt3)`
    width: 2rem;
    height: 2rem;
    
`

export const SearchIcon = styled(AiOutlineSearch)`
    width: 2rem;
    height: 2rem;
    color: #313234;
`

export const IconSVG = styled.img`
    width: 3rem;
    height: auto;
    margin-bottom: 1rem;
`

export const ArrowRightIcon = styled(AiOutlineRight)`
    width: 1rem;
    height: 1rem;
    
`

export const List = styled.div`
    display: flex;
    max-width: 100vw;
    
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media screen and (min-width: 500px){
        display: grid;
        justify-content: center;
        grid-template-columns: auto auto;
        grid-gap: 10px;
    }
`
