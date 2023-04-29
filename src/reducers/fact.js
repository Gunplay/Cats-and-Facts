const initialState = {
  fact: [
    {
      fact: 'string',
      length: 0,
    },
  ],
  factLoadingStatus: 'idle',
}

const fact = (state = initialState, action) => {
  switch (action.type) {
    case 'FACT_LOADING_STATUS':
      return {
        ...state,
        factLoadingStatus: 'loading',
      }
    case 'FACT_FETCHED':
      return {
        ...state,
        fact: action.payload.fact,
        length: action.payload.length,
        factLoadingStatus: 'idle',
      }
    case 'CAT_FETCHING_ERROR':
      return {
        ...state,
        catLoadingStatus: 'error',
      }
    default:
      return state
  }
}

export default fact
