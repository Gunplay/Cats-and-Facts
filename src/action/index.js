const apiUrl = process.env.REACT_APP_API_URL // RESTART NPM START
const apiKey = process.env.REACT_APP_API_KEY
const apiFact = process.env.REACT_APP_API_URL_FACT

export const fetchCatAndFact = (request) => async (dispatch) => {
  dispatch(catFetching()) // отправляем действие "CAT_FETCHING"

  try {
    const [catResult, factResult] = await Promise.all([
      request(`${apiUrl}/images/search?api_key=${apiKey}`),
      request(`${apiFact}/fact`),
    ])
    const [{ url }] = catResult
    const { fact } = factResult

    dispatch(catFetched({ url, fact })) // отправляем действие "CAT_FETCHED" с полезной нагрузкой
  } catch (error) {
    // обрабатываем ошибки
    console.error(error)
  }
}

export const catFetching = () => {
  return {
    type: 'CAT_FETCHING',
  }
}

export const catFetched = (cat) => {
  return {
    type: 'CAT_FETCHED',
    payload: cat,
  }
}
