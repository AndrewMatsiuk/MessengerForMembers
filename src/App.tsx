import { Provider } from 'react-redux'
import { NavigationContainer } from './routes'
import store from './store'
import { RouterListener } from './common'

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterListener>
          <NavigationContainer />
        </RouterListener>
      </Provider>
    </>
  )
}

export default App
