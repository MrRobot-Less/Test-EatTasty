import React, {useContext} from "react";
import ReactCircleModal from "react-circle-modal";

import FoodContext from "../Context";

import {
    Container,
    ConfirmedIcon,
    ConfirmButton,
    CloseIcon
} from './style'

import {
    Text,Center
} from '../style'

const ConfirmPage : React.FC = () => {
    const foodContext = useContext(FoodContext)
    const setFoods = foodContext.setState

    return (
        <ReactCircleModal
          backgroundColor="#4BB543;"
          toogleComponent={onClick => (
            <ConfirmButton onClick={onClick}>
              <Text size="18px" weight="500" color="#fff">Confirm</Text>
            </ConfirmButton>
          )}
          // Optional fields and their default values
          offsetX={0}
          offsetY={0}
        >
          {(onClick) => (
            <>
            <Container>
                <CloseIcon onClick={e => { setFoods([]) }}/>
                <ConfirmedIcon/>
                <Text size="20px" weight="600" color="white">Your shopping has been confirmed.</Text>
            </Container>
            </>
          )}
        </ReactCircleModal>
      )
    
}

export default ConfirmPage