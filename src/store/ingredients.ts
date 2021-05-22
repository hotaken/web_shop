import { IngredientType } from '../components/Burger/Burger';

type ADD_INGREDIENT = 'ADD_INGREDIENT';
type DELETE_INGREDIENT = 'DELETE_INGREDIENT';

interface IAddIngredientAction {
    type: ADD_INGREDIENT;
    ingredient: IngredientType;
}

interface IDeleteIngredientAction {
    type: DELETE_INGREDIENT;
    ingredientIndex: number;
}

type ActionTypes = IAddIngredientAction | IDeleteIngredientAction;

export type addIngredientActionType = ({
    ingredient,
}: {
    ingredient: IngredientType;
}) => IAddIngredientAction;

export const addIngredientAction: addIngredientActionType = ({ ingredient }) => {
    return {
        type: 'ADD_INGREDIENT',
        ingredient,
    };
};

export type deleteIngredientActionType = ({
    ingredientIndex,
}: {
    ingredientIndex: IDeleteIngredientAction['ingredientIndex'];
}) => IDeleteIngredientAction;

export const deleteIngredientAction: deleteIngredientActionType = ({ ingredientIndex }) => {
    return {
        type: 'DELETE_INGREDIENT',
        ingredientIndex,
    };
};

// INITIAL STATE
export type IngredientStateType = IngredientType[];
const initialState: IngredientStateType = [];

// REDUX
const reducer = (state = initialState, action: ActionTypes): IngredientType[] => {
    switch (action.type) {
        case 'ADD_INGREDIENT': {
            const newState = [...state];
            newState.unshift(action.ingredient);
            return newState;
        }
        case 'DELETE_INGREDIENT': {
            const newState = [...state];
            newState.splice(action.ingredientIndex, 1);
            return newState;
        }
        default:
            return state;
    }
};

export default reducer;
