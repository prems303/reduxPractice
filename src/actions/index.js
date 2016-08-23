let nextWordId = 0
let nextImgId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const addImg = (img) => {
  return {
    type: 'ADD_IMG',
    id: nextImgId++,
    img
  }
}

export const delFunct = (id) => {
  return {
   type: 'DELETE',
   id
  }
}
