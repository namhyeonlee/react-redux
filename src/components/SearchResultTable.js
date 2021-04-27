import React,  {PureComponent} from 'react'
import PropsTypes from 'prop-types'

class SearchResultTable extends PureComponent {
    render() {
        const {items} = this.props

        return (
            <table>
                <tr>
                    <td>아이디</td>
                    <td>이름</td>
                    <td>나이</td>
                </tr>
                {
                    items.map(({id, name, age})=>(
                        <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        </tr>
                    ))
                }
            </table>
        )
    }
}

SearchResultTable.PropsTypes = {
    items: PropsTypes.arrayOf(
        PropsTypes.shape({
            id:PropsTypes.number,
            name:PropsTypes.name,
            age:PropsTypes.number
        })
    )
}
SearchResultTable.dafaultProps = {
    items:[]
}
export default SearchResultTable