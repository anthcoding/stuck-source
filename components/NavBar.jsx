import Link from 'next/link';
import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';

const NavBar = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();

	return (
		<div className="navbar-container">
			<p className="logo">
				<Link href="/">Stock Source</Link>
			</p>
			<button
				className="cart-icon"
				type="button"
				onClick={() => setShowCart(!showCart)}
			>
				<AiOutlineShopping />
				<span className="cart-item-qty">{totalQuantities}</span>
			</button>
			{showCart && <Cart />}
		</div>
	);
};

export default NavBar;
