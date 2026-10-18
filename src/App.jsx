import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductCard from './components/ProductCard'
import productsData from './assets/data/productsData'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  function changeCartCount(count) {
    setCount((currentCount) => currentCount + count)
  }

  return (
    <>
      <Header count={count} />
      <Banner />
      <div className="cards">
        {productsData.map((data) => (
          <ProductCard
            key={data.id}
            data={data}
            onCartChange={changeCartCount}
          />
        ))}
      </div>
    </>
  )
}

export default App
