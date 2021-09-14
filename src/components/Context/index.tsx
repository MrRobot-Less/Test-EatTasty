import React from "react";
import { useState } from "react";
import IFood from "../../interfaces/food.interface";

interface PropsFoodContext {
    state: IFood[],
    setState: React.Dispatch<React.SetStateAction<IFood[]>>
}

const DEFAULT_VALUE = {
    state: [],
    setState: () => {}
}

const FoodContext = React.createContext<PropsFoodContext>(DEFAULT_VALUE)

const FoodContextProvider : React.FC = ({children}) => {
    const [state, setState] = useState<IFood[]>(DEFAULT_VALUE.state)
    return (<FoodContext.Provider value={{state, setState}}> {children} </FoodContext.Provider>)
}

export {FoodContextProvider}
export default FoodContext