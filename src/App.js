import {Title,  Search, Characters} from './components/index.jsx'
import * as dotenv from 'dotenv'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
dotenv.config()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,

    }
  }
})

function App() {
  const title = process.env.ENV === 'PROD' ? 'Hello Prod' : 'Hello Dev'
  const years = ["19BBY", "57BBY"]
  const names = ["Skywalker", "Kenobi"]
  return (
    <BrowserRouter>
      {/* <QueryClientProvider client={queryClient}/> */}
        <Routes>
          <Route path="/" element={<Title title={title}/>}  />
          <Route path="/search" element={ <Search years={years} names={names} />} />
          <Route path="/characters/:id" element={<Characters />}/>
        </Routes>
      {/* <QueryClientProvider/> */}
    </BrowserRouter>
  );
}

export default App;
