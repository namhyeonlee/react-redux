import {connect} from 'react-redux'
import {resetFilter} from '../actions/searchFilterAction'

import Button from '../ui/Button'

// const mapStateToProps =(state) =>{
//     //검색 입력값이 없는 경우 버튼의 disabled를 true로 설정

//     const disabled = Object.values(state.searchFilter).reduce(
//         (result, value) => result && !value,
//         true
//     )

//     return {
//         disabled
//     }
// }

const mapDispatchToProps = {
    onPress: resetFilter,
}

export default connect(null, mapDispatchToProps)(Button)