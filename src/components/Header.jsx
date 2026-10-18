const Header = ({count}) => {
  
  return (
    <div className='headercontainer'>
      <div className='navleft'>
        <h1 className='logo'>logo</h1>

        <ul className='navmenu'>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
        </ul>

        <ul className='navcart'>
          <li><i className="fa-solid fa-cart-shopping shop"></i>Cart</li>
          <p>{count}</p>
        </ul>
      </div>
    </div>
  )
}

export default Header