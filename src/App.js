import React, {PureComponent} from 'react' 
import {Provider} from 'react-redux'
import { setCollection } from './actions/collectionActions01'
import { setAge } from './actions/collectionActions02'
import configureStore from './redux/configureStore'

import PresentationComponent from './components/PresentationComponent'
import ContainerComponent from './containers/ContainerComponent'
import DispatchContainer01 from './containers/DispatchContainer01'
import DispatchContainer3 from './containers/DispatchContainer3'
import SearchFilterInputContainer from './containers/SearchFilterInputContainer'
import SearchResetButtonContainer from './containers/SearchResetButtonContainer'
import SearchResultTable from './components/SearchResultTable'

class App extends PureComponent{

  store = configureStore({loading:false})

  componentDidMount(){
    this.store.dispatch(
      setCollection([
        {id:1, name:'jonh', age:20},
        {id:2, name:'park', age:30}
      ])
    )
    this.store.dispatch(setAge(2,55))

    const {collection} = this.store.getState()
    const {ids, entities} = collection
    const origianlPayload = ids.map(id=>entities[id])
    console.log(origianlPayload)
  }

  render(){
    return <Provider store={this.store}>
      화면 컴포넌트: <PresentationComponent userName="화면컴포넌트"/>
      <br/>
      데이터 컴포넌트 : <ContainerComponent id={2}/>
      hello
      <br/>
      액션 데이터 컴포넌트 : <DispatchContainer01/>
      <br/>
      <DispatchContainer3/>

      <br/>
      <br/>

      <fieldset >
        <SearchFilterInputContainer type="number" name="id" label="아이디 검색"/>
        <SearchFilterInputContainer type="text" name="name" label="이름 검색"/>
        <SearchFilterInputContainer type="number" name="age" label="나이 검색"/>
        <SearchResetButtonContainer>reset</SearchResetButtonContainer>
      </fieldset>

      <br/>
      {/* <SearchResultTable/> */}
    </Provider>
  }
}



export default App;
