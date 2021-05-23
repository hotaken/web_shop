import { IngredientType } from '../components/Burger/Burger';

type ADD_INGREDIENT = 'ADD_INGREDIENT';
type DELETE_INGREDIENT = 'DELETE_INGREDIENT';
type RESET_INGREDIENT = 'RESET_INGREDIENTS';

interface IAddIngredientAction {
    type: ADD_INGREDIENT;
    ingredient: IngredientType;
}

interface IDeleteIngredientAction {
    type: DELETE_INGREDIENT;
    ingredientIndex: number;
}
interface IResetIngredientsAction {
    type: RESET_INGREDIENT;
}

type ActionTypes = IAddIngredientAction | IDeleteIngredientAction | IResetIngredientsAction;

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

export type resetIngredientsActionType = () => IResetIngredientsAction;

export const resetIngredientsAction: resetIngredientsActionType = () => {
    return {
        type: 'RESET_INGREDIENTS',
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
        case 'RESET_INGREDIENTS': {
            return initialState;
        }
        default:
            return state;
    }
};

export default reducer;
