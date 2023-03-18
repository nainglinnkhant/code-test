import { Route, Routes } from 'react-router'

import { NotFound, PostDetail, Posts } from './pages'

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/post/:id' element={<PostDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
