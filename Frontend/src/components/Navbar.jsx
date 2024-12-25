import { Box,Flex,Text ,HStack,Image, Spacer} from "@chakra-ui/react";
//import {Button} from "@/components/ui/Button";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import Enquiry from "../pages/Enquiry";


export default function Navbar(){
    const NAV_ITEMS = [
        { title: 'About Us', link: '/about' },
        { title: 'Academic', link: '/academic' },
        { title: 'Facilities', link: '/facilities' },
        { title: 'Admission', link: '/admission' },
        { title: 'Gallery', link: '/gallery' },
        { title: 'Contact', link: '/contact' }
      ];
      

        return <>
                <Flex zIndex={'1000'} position={'sticky'} top='0px' py='2' _hover={{bg:"green.800"}} bg={"green.700"} color={'white'} px={{base:"3%",lg:"5%"}} alignItems={'center'} w='100vw' justifyContent={'space-between'}>
                        <HStack borderRadius={'md'} w='150px' bg='white'>
                            <Link>
                            <Image src='https://www.jaipuriaschoolpatna.in/wp-content/uploads/2024/01/Jaipuria-Patna-logo.png'/>
                            </Link>
                        </HStack>
                        
                        <Flex display={{base:"none",lg:'Flex'}} alignItems={'center'}  gap='4'>
                            {NAV_ITEMS.map((e,i)=>{
                                return <Link to={e.link} key={i}><Text fontWeight={'500'} _hover={{fontWeight:"600",textUnderlineOffset:"4px",textDecoration:"underline"}} borderRadius={'sm'} p='5px' bg={e.title=="Enquiry Now" ? "red" :''}>{e.title}</Text></Link>
                            })}
                            <Enquiry/>
                        </Flex> 
                        <Box display={{base:"Flex",lg:'none'}}>
                            <Drawer/>
                        </Box>
                </Flex>
                
        </>
}