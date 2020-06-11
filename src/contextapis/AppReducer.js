export default (state,action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state, //yeh current state hai
                //this we are going to change
                transactions: state.transactions.filter(
                    transaction => transaction.id !== action.payload
                )}
        case 'ADD_TRANSACTION':
            return{
                ...state, //already jo maal udhar hai
                transactions :[action.payload,...state.transactions]
            }        
        default:
            return state;
    }
}