import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/sections/Hero"

const Home: NextPage = () => {
	return (
		<div>
			<>
				<Head>
					<title>Nastty Works Auto</title>
					<meta name="description" content="Nastty Works Home" />
				</Head>
				<Hero />
			</>
		</div>
	)
}

export default Home
