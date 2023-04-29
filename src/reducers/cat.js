const initialState = {
  cat: [
    {
      id: '4k2',
      url: 'https://cdn2.thecatapi.com/images/4k2.gif',
      width: 440,
      height: 320,
    },
  ],
  catLoadingStatus: 'idle',
}

const cat = (state = initialState, action) => {
  switch (action.type) {
    case 'CAT_FETCHING':
      return {
        ...state,
        catLoadingStatus: 'loading',
      }
    case 'CAT_FETCHED':
      return {
        ...state,
        cat: [
          {
            id: action.payload.id,
            url: action.payload.url,
            width: action.payload.width,
            height: action.payload.height,
          },
        ],
        catLoadingStatus: 'idle',
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

export default cat
