import {connect} from 'react-redux'

import Imgs from '../components/Imgs'

const mapStateToProps = (state) => {
    return {
        imgs: state.imgs
    }
}

export default connect(
    mapStateToProps
)(Imgs)
