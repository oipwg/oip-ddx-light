import {useReducer} from 'react'
import PublishPage from '../components/PublishPage'
import Wallet from '../components/Wallet'
import Explorer from '../components/Explorer'

const EXPLORER = 'EXPLORER'
const PUBLISH = 'PUBLISH'
const WALLET = 'WALLET'

const inistialState = {
  activeLink: EXPLORER
}

function reducer(state, action) {
  switch (action.type) {
    case EXPLORER:
      return {activeLink: action.type}
    case PUBLISH:
      return PublishPage
    case WALLET:
      return Wallet
    default:
      return Explorer
  }
}


const [state, dispatch] = useReducer(reducer, inistialState);

function useNavigation() {

}
