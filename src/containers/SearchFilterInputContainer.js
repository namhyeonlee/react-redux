import {connect} from 'react-redux'
import {setFilter} from '../actions/searchFilterAction'

import Input from '../ui/Input'

// const mapStateToProps = (state, props)=>{

//     const value = state.searchFilter[props.name] || '';

//     return{
//         value,
//     }
// }

const mapDispatchToProps = {
    onchange: setFilter
}

export default connect(null, mapDispatchToProps)(Input)