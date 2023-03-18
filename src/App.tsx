import { Route, Routes } from 'react-router'

import { PostDetail, Posts } from './pages'

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/post/:id' element={<PostDetail />} />
      </Routes>
    </main>
  )
}

export default App
