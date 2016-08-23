import React from 'react'
import {connect} from 'react-redux'
import {addImg} from '../actions'

function submitImg (e, dispatch) {
    if (e.keyCode === 13) {
        dispatch(addImg(e.currentTarget.value))
        e.currentTarget.value = ''
    }
}

let AddImg = ({dispatch}) => (
    <input
        placeholder="Enter a url squirrel"
        onKeyUp={e=> {
            submitImg(e, dispatch)
        }}
        />
)

AddImg = connect()(AddImg)

export default AddImg
