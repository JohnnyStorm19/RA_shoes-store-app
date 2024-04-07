import { Route, Routes } from 'react-router-dom'

import { AboutPage, CartPage, CataloguePage, ContactsPage, HomePage, Layout, Page404, ProductPage } from '../pages'

import './App.scss'

const App = () => {

  return (
    <>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/catalogue' element={<CataloguePage />} />
        <Route path='/catalogue/:id' element={<ProductPage />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
