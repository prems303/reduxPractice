import React, {PropTypes} from 'react'

import Img from './Img'

const Imgs = ({imgs}) => (
    <div>
        {imgs.map(img =>
          <Img
            key={img.id}
            {...img}
            />
        )}
    </div>
)

Imgs.propTypes = {
    imgs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          img: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default Imgs
