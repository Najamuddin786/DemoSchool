import { Box,Flex,Text ,Separator} from "@chakra-ui/react";
//import {Button} from "@/components/ui/Button";


export default function FotMain(){

        return <>
                <Box gap='5' flexDirection={'column'} display={'flex'} fontSize={'18px'} fontWeight={'500'} color='white' py='10' bg='green.900' px={{base:"2vw",md:'5vw'}}>

                    <Flex p='10px' gap='5' flexDirection={{base:'column',md:"row"}}>
                        <Flex gap='5' flexDirection={'column'}>
                            <Text>About DPS Patna</Text>
                            <Text fontWeight={400} fontSize={'16px'}>
                            Takshila Educational Society laid the foundation of veritable learning in Patna by establishing Delhi Public School in the year 1998 in a collaborative effort with the Delhi Public Schools Society, which is one of the largest chains of CBSE schools in India. DPS Patna is affiliated to CBSE, New Delhi and offers schooling from Nursery to Class XII. The last 26 years have been a journey where perseverance and progress have been the cornerstones. Today it can proudly claim to be one of the most sought after schools in Eastern India.
                            </Text>
                        </Flex>
                        <Box><Separator /></Box>
                        <Flex  boxShadow={'md'} w='300px' gap='5' flexDirection={'column'}>
                            <Text>School Campus</Text>
                            <Flex gap='2' >
                                <Text>Address:</Text>
                                <Text>Vill. Chandmari, P.S. Shahpur Danapur Cantonment Patna - 801 502</Text>
                            </Flex>
                            <Flex gap='2'>
                                <Text>phone:</Text>
                                <Text>+91 8210942893</Text>
                            </Flex>
                            <Flex gap='2'>
                                <Text>Email:</Text>
                                <Text>786mdnajamuddin@gmail.com</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Box><Separator /></Box>
                    <Flex p='10px' gap='1' mt='5' flexDirection={{base:'column',md:"row"}}>
                        <Text>© 2024-2025 DPS Patna. All rights reserved. Powered by </Text>
                        <Text color={'red'}>Takshila Educational Society</Text>
                    </Flex>

                </Box>
                
        </>
}