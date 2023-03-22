import React from 'react'
import Header from '../Header'
import { AuthContextProvider } from '@/context/AuthContext'

const MainLayout = ({ children }) => {
	return (
		<AuthContextProvider>
			<div className='w-full h-screen flex flex-col bg-slate-500 justify-center items-center'>
				<Header />
				{children}
			</div>
		</AuthContextProvider>
	)
}

export default MainLayout
