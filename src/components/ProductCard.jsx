import { useState } from 'react'

const ProductCard = ({ data, onCartChange }) => {
  const [inCart, setInCart] = useState(false)

  function toggleCart() {
    setInCart(!inCart)
    onCartChange(inCart ? -1 : 1)
  }

  return (
    <div className='card'>
        <div>
      <img src={data.image} alt={data.name} className="watchimg" />
      </div>
      <div className="bottom">
        <div>
      <h4 className='watch-name'>{data.name}</h4>
      <p>${data.price}</p>
      <button className={inCart ? "remove-btn" : "but"} onClick={toggleCart}>
        {inCart ? 'Remove from cart' : 'Add to cart'}
      </button>
   </div>
      </div>
    </div>
  )
}

export default ProductCard
