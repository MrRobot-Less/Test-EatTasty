import styled from "styled-components";

interface IText {
    size?: string;
    weight?: string;
    color?: string;
    borderBottom?: string;
    borderLeft?:string;
    padding?: string;
}

export const Text = styled.span<IText>`
    display: flex;
    width: fit-content;
    font-family: 'Montserrat', sans-serif;;
    font-weight: ${props => props.weight ? (`${props.weight}`): ('100')};
    font-size: ${props => props.size ? (`${props.size}`): ('10px')};
    color: ${props => props.color ? (`${props.color}`): ('#313234')};
    border-bottom: ${props => props.borderBottom ? (props.borderBottom): ('none')};
    border-left: ${props => props.borderLeft ? (props.borderLeft): ('none')};
    padding: ${props => props.padding ? (props.padding): ('none')};
`

interface INavBar{
    justifyContent?: string;
}

export const NavBar = styled.div<INavBar>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 3rem;
    display: flex;
    justify-content: ${props => props.justifyContent?(props.justifyContent):('space-between;')};
    align-items: center;
    background-color: #F9F9FB;
    border-bottom: 1px solid #313234;
    padding: 8px 10px;
    z-index: 100;

`;

interface IAvatar {
    objectFit?: string
    margin?: string;
}

export const Avatar = styled.img<IAvatar>`
    object-fit: ${props => props.objectFit?(props.objectFit):('cover')};
    margin: ${props => props.margin?(props.margin):('none')};;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
`;


interface IRow {
    paddingTop?: string
}
export const Row = styled.div<IRow>`
    display: flex;
    width: 100%;
    align-items: center;
    padding-top: ${props => props.paddingTop?(props.paddingTop):('none')};;
`
export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`