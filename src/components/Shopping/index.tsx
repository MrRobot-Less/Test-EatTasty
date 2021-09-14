import React, {useState, useEffect, useContext} from "react";

import FoodList from "../FoodList";

import IFood from "../../interfaces/food.interface";
import IFoodAgroup from "../../interfaces/foodagroup.interface";

import ConfirmPage from "../ConfirmPage";
import FoodContext from "../Context";

import {
    ShopDiv,
    ShopCarIcon,
    CloseButton,
    CloseIcon,
    Container,
    FoolterBar,
    CancelButton,
    SadIcon
} from './style'

import { 
    NavBar,
    Text,
    Row,
    Center
} from "../style";



import ReactCircleModal from 'react-circle-modal'
const CarShop : React.FC = () => {
    const foodContext = useContext(FoodContext)
    const foods = foodContext.state
    const setFoods = foodContext.setState
    const [total, setTotal] = useState(0) 

    const [foodsAgroupped, setFoodsAgroupped] = useState<IFoodAgroup[]>([])
    const [quantityItems, setQuantityItems] = useState(0)

    useEffect(() => {
        let objectFood = foods
        setFoodsAgroupped([])
        let arrayAgroupped = groupBy(objectFood)
        setFoodsAgroupped(arrayAgroupped)
        let {total, quantity} = calcTotalQuantity(arrayAgroupped)
        setQuantityItems(quantity)
        setTotal(total)
    }, [foods])

    const groupBy = (objectArray : IFood[]) => {
      let group : IFoodAgroup[] = []
      for(let food of objectArray){
        let add = true
        for(let g of group){
          let index = group.indexOf(g)
          if(g.name === food.name){
            g.quantity += 1
            group[index] = g 
            add=false
          }
        }
        if(add){group.push({...food, quantity:1})}
      }
      return group
    }

    const calcTotalQuantity = (groupArray : IFoodAgroup[]) => {
      let quantity = 0;
      let total = 0
      for(let g of groupArray){
          total += g.price * g.quantity
          quantity += g.quantity

      }
      return {total, quantity}
    }


    return (
    <ReactCircleModal
      backgroundColor="#F9F9FB;"
      toogleComponent={onClick => (
        <ShopDiv onClick={onClick}>
        <ShopCarIcon/>
            {quantityItems > 0 && <span> {quantityItems} </span>}
        </ShopDiv>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
      
    >
      {(onClick) => (
        <Container>
            <NavBar justifyContent="flex-start">
                <CloseButton onClick={onClick}>
                    <CloseIcon/>
                </CloseButton>
                <Text weight='900' size='16px' padding="0 5px" borderLeft="2px solid #F5CA48">Car Shopping</Text>
            </NavBar>
            {total > 0 && <>
            <FoodList {...foodsAgroupped}/>
            <FoolterBar>
              
              <Row>
                <Text size='20px' weight='900'>
                    Total:
                  </Text> 
                <Text size='18px' weight='900' color="#E4723C">$ {total}</Text>   
              </Row>
              
              <CancelButton onClick={onClick}>
              <Text size="18px" weight="500" color="#fff">Cancel</Text>
              </CancelButton>
              <div onClick={onClick}>
                <ConfirmPage/>
              </div>
            </FoolterBar>
            </>}
            {total == 0 && <Center>
              <SadIcon/>
              <Text size="15px" color="#535151" weight='700'>
                You haven't added nothing on your shopping...
              </Text>
            </Center>}
        </Container>
      )}
    </ReactCircleModal>
  )
    
}

export default CarShop