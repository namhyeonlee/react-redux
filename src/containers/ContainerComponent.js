import {connect} from 'react-redux'
import PresentationComponent from '../components/PresentationComponent'

const mapStateToProps =(state, props)=>{
    return {
        userName: state.collection.entities[props.id],
        entity: state.collection.entities[props.id]
    }
}

export default connect(mapStateToProps)(PresentationComponent)