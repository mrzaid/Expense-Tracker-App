import React , {createContext,useReducer,} from 'react'
import AppReducer from './AppReducer'
// import { Transaction } from '../components/Transaction';
//Initial state dummy users
const initialState = {
    transactions:[
        //dummy users
        //   { id: 1, text: 'Flower', amount: -20 },
        //   { id: 2, text: 'Salary', amount: 300 },
        //   { id: 3, text: 'Book', amount: -10 },
        //   { id: 4, text: 'Camera', amount: 150 }
        ]
} 


//creating context
export const GlobalContext = createContext(initialState);

//provider component jo subko maal deiga apnay bachoun ko
                             //children apna jubba
export const GlobalProvider = ({children})=>{
const [state,dispatch] = useReducer(AppReducer,initialState);

//Actions which will call reducer
function deleteTransaction(id){
    dispatch(
        {
            type:'DELETE_TRANSACTION',
            payload:id
        }
    );
}
function addTransaction(transaction){
    dispatch(
        {
            type:'ADD_TRANSACTION',
            payload:transaction
        }
    );
}

return (
    <GlobalContext.Provider value ={
        {
            transactions :state.transactions,
            deleteTransaction,
            addTransaction
        }
    } >
        {children}
    </GlobalContext.Provider>
)
}