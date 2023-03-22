import Link from 'next/link'
import React from 'react'

const Nav = () => {
	return (
		<div className='w-full flex flex-row bg-green-600 justify-between'>
			<Link href='/'>Main</Link>
			<Link href='/screens/About/AboutScreen'>About</Link>
		</div>
	)
}

export default Nav
