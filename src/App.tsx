import { SearchProvider } from './components/Header/SearchContext'
import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return (
    <>
      <SearchProvider>{routeElements} </SearchProvider>
    </>
  )
}

export default App
