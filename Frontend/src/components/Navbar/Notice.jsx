import {Box,Flex,Text} from '@chakra-ui/react'
import './Nav.css'
export default function Notice(){

    return <>
            <Flex m='2' boxShadow={'xl'} alignItems={'center'} gap='2' w='100vw' justifyContent={'space-between'}>
                <Text className='blinking-text' boxShadow={'xl'} borderRadius={'sm'} fontWeight={500} px='5' py='2'  bg={'green.300'}>Notice</Text>
                <Text borderRadius={'md'} bg='green.300' w='100vw' p='6px'>
                    <marquee>
                    Welcome to DemoSchool & Admission are Open 1th to 10th
                    </marquee>
                    </Text>
            </Flex>
    </>
}