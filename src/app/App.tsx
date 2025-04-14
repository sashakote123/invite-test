import React from 'react';
import './index.css'
import Header from '../widgets/header/Header';
import ItemCard from '../widgets/itemCard/ItemCard';
import ItemsList from '../entities/base/itemsList';
import Footer from '../widgets/footer/Footer';
import ShopList from '../pages/shopList/ShopList';
import ItemInShoppingCard from '../widgets/itemInShoppingCard/ItemInShoppingCard';
import TotalPrice from '../widgets/totalPrice/TotalPrice';
import ShoppingCart from '../pages/shoppingCart/ShoppingCart';
import { Route, Routes } from 'react-router';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';

function App() {
  const list = ItemsList


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<ShopList arr={list} />} />
        <Route path='/shoppingCart' element={<ShoppingCart />} />
        <Route path='/notFound' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
