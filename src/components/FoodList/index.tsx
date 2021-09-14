import React, {useEffect, useState, useContext} from "react";

import IFood from "../../interfaces/food.interface";
import IFoodAgroup from "../../interfaces/foodagroup.interface";

import FoodContext from "../Context";

import {
    List,
    Item,
    QuantityDiv,
    TrashDiv,
    TrashIcon,
    PriceDiv
} from './style'

import { useToast } from "@chakra-ui/toast";

import { Avatar, Text, Row } from "../style";


const FoodList : React.FC<IFoodAgroup[]> = (props) => {
    const foodContext = useContext(FoodContext)
    const foods = foodContext.state
    const setFoods = foodContext.setState
    const [foodsAgroupped, setFoodsAgroupped] = useState<IFoodAgroup[]>([])
    const toast = useToast()

    useEffect(() => {
        let foodsArray = []
        for(let f in props){
            foodsArray.push(props[f])
        }
        setFoodsAgroupped(foodsArray)
    }, [props])


    const getQuantityItems = () => {
        let total = 0
        for(let food of foodsAgroupped){
            total += food.quantity
        }
        return total
    }

    const getFoodDifferent = (nameFood : string) => {
        let foodsSelected : IFood[]= []
        for(let food of foods){
            if(food.name !== nameFood){
                foodsSelected.push(food)
            }
        }
        return foodsSelected
    }

    const subtractFood = (food : IFoodAgroup) => {
        let deleteItem = false
        let remainderFoods = foods.filter((f, id) => {
            
            if(f.name === food.name && !deleteItem){
                deleteItem = true // add this variable, the program will delete only 1 item of array
                return false // remove this item of array
            }
            return true
        })
        setFoods(remainderFoods)
    }
    const addNewFood = (food : IFoodAgroup) => {
        if(getQuantityItems() >= 6){
            toast({
                title: "Error when adding new food",
                description: "Maximum number of items exceeded",
                status: "error",
                duration: 2000,
                isClosable: true,
            })
            return
        }
        let currentFood : IFood = {
            id: food.id,
            name:food.name,
            src: food.src,
            price: food.price
            
        } // all property, less "quantity"
        setFoods([...foods, currentFood])
    }


    const deleteFood = (food : IFoodAgroup) => {
        let remainderFood = getFoodDifferent(food.name)
        setFoods(remainderFood)
    }  
    return (
    <List>
        {foodsAgroupped.map((f, id) => {return (
        <Item key={id}>
            <Row>
                <Avatar margin="0 10px 0 0" objectFit="scale-down" src={f.src}/>
                <Text size='18px' weight='800'>{f.name} </Text> 
                <TrashDiv onClick={() => {deleteFood(f)}}>
                    <TrashIcon/>
                </TrashDiv>
            </Row>
            <Row paddingTop="2px">
                <QuantityDiv>
                    <button onClick={() => subtractFood(f)}>
                        <Text size="16px">-</Text>
                    </button>
                    <Text size='15px' weight='500'>{f.quantity}</Text>
                    <button onClick={() => addNewFood(f)}>
                        <Text size="16px">+</Text>
                    </button>
                </QuantityDiv>
                <PriceDiv>
                    <Text size='15px' weight='900' color="#E4723C">$ {f.price * f.quantity}</Text>
                </PriceDiv>
            </Row>

        </Item>)})}
        
    </List>)
}

export default FoodList