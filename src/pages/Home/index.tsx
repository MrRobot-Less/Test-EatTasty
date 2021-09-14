import React, {useEffect, useState, useContext} from "react";

import CardUser from "../../components/CardFood";
import CarShop from "../../components/Shopping";

import IFood from "../../interfaces/food.interface";
import FoodContext from '../../components/Context'
import {
    Container,
    SearchIcon,
    SearchInput,
    SearchDiv,
    CategoriesCard,
    CategoriesDiv,
    IconSVG,
    ArrowRightIcon,
    List
} from './style'

import { 
    NavBar,
    Text,
    Avatar
} from "../../components/style";

import pizzaIcon from '../../assets/pizza-icon.svg';
import sodaIcon from '../../assets/soda-icon.svg'

import API from '../../Api'

import {useToast} from '@chakra-ui/react'

const Home : React.FC = () => {
    const foodContext = useContext(FoodContext)

    const [typefood, setTypefood] = useState('')
    const [foods, setFoods] = useState<IFood[]>([])
    const shopping = foodContext.state
    const setShopping = foodContext.setState
    const [foodSearch, setFoodSearch] = useState('')
    
    useEffect(() => {
        API.searchByFood(foodSearch, typefood, setFoods)
        
    }, [foodSearch, typefood])

    const toast = useToast()
    const handleAddFood = (food : IFood) => {
        if(shopping.length < 6){
            setShopping([...shopping,food])

            toast({
                title: "New Food add",
                description: "New item added on your shopping",
                status: "success",
                duration: 2000,
                isClosable: true,
            })
        }else{
            toast({
                title: "Error when adding new food",
                description: "Maximum number of items exceeded",
                status: "error",
                duration: 2000,
                isClosable: true,
            })
        }   

        
    }

    const handleFoodName = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFoodSearch(e.currentTarget.value)
    }
    const handleTypeFood = (tfood : string) =>{
        if(tfood == typefood){
            setTypefood('')
        }else{
            setTypefood(tfood)
        }
    
    }

    return (
        <Container>
            <NavBar>
                <Avatar src='https://upload.wikimedia.org/wikipedia/en/d/d8/Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg' />
                <CarShop/>
            </NavBar>
            <Text weight='100' size='20px'>Food</Text>
            <Text weight='900' size='40px' borderBottom="5px solid #F5CA48" >Delivery</Text>
            <SearchDiv>
                
                <SearchIcon/>
                <SearchInput placeholder='Search...' onChange={handleFoodName}/>
            </SearchDiv>

            <Text weight='700' size='16px' color='#000'>Categories</Text>
            <CategoriesDiv>
                <CategoriesCard selected={typefood === 'pizzas'}>
                    <IconSVG src={pizzaIcon}/>
                    <Text weight='700' size='14px'>
                        Pizza
                    </Text>
                    <button onClick={() => handleTypeFood('pizzas')}>
                        <ArrowRightIcon/>
                    </button>
                </CategoriesCard>
                <CategoriesCard selected={typefood === 'sodas'}>
                    <IconSVG src={sodaIcon}/>
                    <Text weight='700' size='14px'>
                        Soda
                    </Text>
                    <button onClick={() => handleTypeFood('sodas')}>
                        <ArrowRightIcon/>
                    </button>
                </CategoriesCard>
            </CategoriesDiv>
            {foods !== [] && 
            <>
                <Text weight='700' size='16px' color='#000'>Result Search</Text>
                <List>
                {foods.map(food => {
                    return <CardUser key={foods.indexOf(food)} {...food} onClick={() => handleAddFood(food)}/>
                })}
                </List>
                {foods.length == 0 && 
                <>
                <Text weight='300' size='12px' color='#615f5f'>NO RESULT...</Text>
                </>}

            </>}
            
        </Container>
    );
}

export default Home