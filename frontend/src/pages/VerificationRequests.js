import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import VerifySingleFarm from '../components/Admin/VerifySingleFarm'
import { get_pending_verifiation_farm } from '../api/farm.api';
const VerificationRequests = () => {
	const [farms, setFarms] = useState([]); // this will contain all farms with pending verification status
	const fetchPendingFarms = async () => {
		const result = await get_pending_verifiation_farm();
		console.log("result is: ", result.data);
		setFarms(result.data)
	}
	useEffect(() => {
		fetchPendingFarms();
	}, [])
	return (
		<Box 
			w="100%"
			h={"100%"}
			m={3}
			p={3}
		>
			{console.log(farms)}
			<Heading as="h1" size={'xl'}>
				Pending Verification Requests
			</Heading>
			{/* <VerifySingleFarm /> */}
			{
			farms.map((farm, index) =>{
				return <VerifySingleFarm key={index} farm={farm} />
			})
			}
			
		</Box>
	)
}

export default VerificationRequests