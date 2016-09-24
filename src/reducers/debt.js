import {DEBT_QUERY_SUCCESS, DEBT_QUERIES_ERASE} from '../constants/Debt'

const initialState = {
  sum: 0,
  queries: [],
  numbers: []
}

export default function debtState(state=initialState, action){
  switch(action.type){
    case DEBT_QUERY_SUCCESS:
      if(state.numbers.includes(action.payload.query.zalogNumber)) {
        return state
      }
      return {
        queries: state.queries.concat([action.payload.query]),
        sum: state.sum + action.payload.query.percent,
        numbers: [...state.numbers, action.payload.query.zalogNumber]
      }

    case DEBT_QUERIES_ERASE:
      return initialState

    default:
      return state
  }
}
