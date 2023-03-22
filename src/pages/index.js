import MainLayout from '@/components/Layouts/MainLayout'
import Head from 'next/head'

import addData from '@/firebase/firestore/addData'

const Home = () => {
	return (
		<>
			<Head>
				<title>Main</title>
			</Head>
			<MainLayout>
				<h1>Main</h1>
				<button
					onClick={async () => {
						const data = {
							name: 'John snow',
							house: 'Stark',
						}
						const { result, error } = await addData('users', 'user-id', data)

						if (error) {
							return console.log(error)
						}
						console.log(result)
					}}
					className='bg-black text-white'>
					Send
				</button>
			</MainLayout>
		</>
	)
}

export default Home
