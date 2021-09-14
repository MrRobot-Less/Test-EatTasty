import React from "react";
import ICardFood from "../../interfaces/card.interface";

import {
    Container,
    AddButton,
    AddIcon,
    Image,
    Informations,
    PriceDiv
} from './style'

import { useToast } from "@chakra-ui/toast";

import { Text } from "../style";
const CardUser : React.FC<ICardFood> = (props) => {

    return (
        <Container>
            <Informations>
                <div>
                    <Text weight='600' size='18px'>{props.name}</Text>
                    
                </div>
                <Image src={props.src}/>
            </Informations>
            <AddButton onClick={props.onClick}>
                <AddIcon/>
            </AddButton>
            <PriceDiv>
            <Text weight='600' size='24px' color='#E4723C'>$ {props.price}</Text>
            </PriceDiv>
        </Container>
    );
}

export default CardUser