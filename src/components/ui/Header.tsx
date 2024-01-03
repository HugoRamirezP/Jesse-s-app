import { FiShoppingCart } from "react-icons/fi"

import { useCartStore } from "../../stores/useCartStore"
import React from "react";
import useFromStore from "@/hooks/useFromStore"
import Image from "next/image"
import Link from "next/link"




interface Props {
	onCartIconClick: () => void
}



export default function Header({ onCartIconClick }: Props) {
	const cart = useFromStore(useCartStore, state => state.cart)
let total = 0
	if (cart) {
		total = cart.reduce((acc, product) => acc +  (product.quantity as number), 0)
	}
	return (
		<header className='bg-gray-900 text-white py-0 flex items-center justify-between h-18 sticky top-0 z-10 flex shadow-l'
			style={
				{
					backgroundColor: "#621709",
					borderColor: "#FF1493",
					color: "#face44"

				}
			}>


			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
				<Link href="http://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse ">
					<Image width={100} height={80} src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/liquidgold-logo-1.webp" loading="eager" priority={true} className="max-h-20  " alt="Liquid Gold Logo" />

				</Link>
				<div className="flex md:order-2">
				</div></div>



			<nav className='container mx-auto md:w-10/12 px-4 flex justify-between '
				style={
					{
						backgroundColor: "#621709",
						borderColor: "#FF1493",
						color: "#face44"

					}
				}>

				<ul className="flex flex-row p-4 md:p-4 ml-2 font-medium ">
					<li >
						<Link href="/" className=" py-2 px-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 ml-2" aria-current="page"
							style={
								{
									color: "#face44"
								}
							}>Home</Link>
					</li>
					<li>
						<Link href="/products" className=" py-2 px-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 ml-2" aria-current="page"
							style={
								{
									color: "#face44"
								}
							}>Juice</Link>
					</li>
					<li>
						<Link href="#" className=" py-2 px-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 ml-2" aria-current="page"
							style={
								{
									color: "#face44"
								}
							}>Merch</Link>
					</li></ul>
				<span className='text-lg font-semibold'></span>


				<button
					type='button'
					title='Mini Cart'
					className='text-white text-xl flex items-center'
					onClick={onCartIconClick}

					style={
						{
							backgroundColor: "#621709",
							borderColor: "#FF1493",
							color: "#face44"

						}
					}>
					<FiShoppingCart />
					<div className='text-white rounded-full bg-blue-700 w-5 h-5 text-sm -ml-1'
						style={
							{
								backgroundColor: "#621709",
								borderColor: "#FF1493",
								color: "#face44"

							}
						}>{total}</div>
				</button>


			</nav>
		</header>
	)
};