import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Button from '../ui/Button'
import { setLoading } from '../actions/loadingActions'
import { setCollection } from '../actions/collectionActions01'

class ActionComponent extends PureComponent {
    render(){
        const {setLoading, resetLoading, setUser, setCollection, setAge} = this.props

        const collection = [
            {id:21, name: 'jonh', age:20},
            {id:2, name: 'justin', age:30},
            {id:3, name: 'mary', age:40}
        ]

        return (
            <React.Fragment>
                <Button onPress={()=>setLoading(true)}>
                    setLoading
                </Button>
                <Button onPress={()=>resetLoading()}>
                    resetLoading
                </Button>
                <Button onPress={()=>setCollection(collection)}>
                    setCollection
                </Button>
                <Button onPress={()=>setUser({name: 'park', age:20})}>
                    setUser
                </Button>
                <Button onPress={()=>setAge(2,55)}>
                   setAge
                </Button>
            </React.Fragment>
        )
    }

    
}

ActionComponent.propTypes = {
    setLoading: PropTypes.func,
    resetLoading: PropTypes.func,
    setUser: PropTypes.func,
    setCollection: PropTypes.func,
    setAge: PropTypes.func
}

export default ActionComponent