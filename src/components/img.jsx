import React, {PropTypes} from 'react'

const Img = ({img}) => (
    <div><img src={img}></img> <button type="button">DEL</button></div>
)

Img.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}

export default Img
