import {connect} from 'react-redux'
import ActionComponent from '../components/ActionComponent02'
import {setLoading, resetLoading} from '../actions/loadingActions'
import {setUser} from '../actions/useActions'
import {setCollection, setAge} from '../actions/collectionActions02'


const mapDispatchToProps = {
    setLoading,
    resetLoading,
    setUser,
    setAge,
    setCollection,
}

export default connect(null, mapDispatchToProps)(ActionComponent)