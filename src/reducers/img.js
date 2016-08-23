const imgs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMG':
    return [
      ...state,
      {
        id: action.id,
        img: action.img
      }
    ]
    default:
      return state
  }
}

export default imgs
