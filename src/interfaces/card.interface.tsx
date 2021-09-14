import IFood from "./food.interface";
export default interface ICardFood extends IFood {
    onClick: () => void
}