import axios, {AxiosRequestConfig} from 'axios';
import IFood from './interfaces/food.interface';

const BASE_URL = 'http://localhost:3000'
const END_POINTS = ['pizzas', 'sodas']

export default {
    searchByFood : async (food : string, typeFood : string, setList : React.Dispatch<React.SetStateAction<IFood[]>>) => {
        let data : IFood[][] = [];
        if(food === ''){
            setList([])
            return
        }
        if(typeFood === ''){ // CASE USER DON'T SELECTED NONE TYPE FOOD 
            
            for(let tfood of END_POINTS){ // MAKE REQUEST ON ALL END POINTS OF API 
                let response : IFood[] = await (await axios.get(`${BASE_URL}/${tfood}`)).data
                data.push(response)
                
            }
        }else{
            let response : IFood[] = await (await axios.get(`${BASE_URL}/${typeFood}`)).data
            data.push(response)
        }
        let objData : IFood[] = [] 
        for(let d of data){
            objData.push(...d) // UNIQUE MATRIX IN ARRAY OF 1 DIMENSION
        }
        
        
        let selectedFoods : IFood[] = []
        for(let foodData of objData){
            if(foodData.name.toLocaleLowerCase().indexOf(food.toLowerCase()) > -1){ // CHECK IF FOOD IN ARRAY OF FOODS
                selectedFoods.push(foodData)
            }
        }
        setList(selectedFoods)
        
    },
}