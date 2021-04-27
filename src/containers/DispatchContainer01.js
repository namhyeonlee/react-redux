import {connect} from 'react-redux'
import ActionComponent from '../components/ActionComponent01'

import {setAge} from '../actions/collectionActions02'

const mapDispatchToProps = dispatch => {
    return{
        // setAge: (id,age) =>dispatch(setAge(id,age))
        setAge
    }
}

export default connect(null, mapDispatchToProps)(ActionComponent)