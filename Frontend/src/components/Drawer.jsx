import { Button } from "@/components/ui/button"
import { RxHamburgerMenu } from "react-icons/rx";
import { Flex,Text,Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function Drawer() {

    const NAV_ITEMS = [
        { title: 'About Us', link: '/about' },
        { title: 'Academic', link: '/academic' },
        { title: 'Facilities', link: '/facilities' },
        { title: 'Admission', link: '/admission' },
        { title: 'Gallery', link: '/gallery' },
        { title: 'Contact', link: '/contact' },
        { title: 'Enquiry Now', link: '/enquiry' },
      ];

  return (
    <DrawerRoot size='full'>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button bg='white' color='black' >
          <RxHamburgerMenu/>
        </Button>
      </DrawerTrigger>
      <DrawerContent w='100vw'>
        <DrawerHeader>
          <DrawerTitle>All Importent Pages</DrawerTitle>
        </DrawerHeader>
          <Flex justifyContent={'center'} color={'white'} h='full' w='full' flexDirection={'column'} bg='green.700' alignItems={'center'}  gap='4'>
                            {NAV_ITEMS.map((e,i)=>{
                                return <Link to={e.link} key={i}><Text fontWeight={'500'} _hover={{fontWeight:"600",textUnderlineOffset:"4px",textDecoration:"underline"}} borderRadius={'sm'} p='5px' bg={e.title=="Enquiry Now" ? "red" :''}>{e.title}</Text></Link>
                            })}
            </Flex>
        <DrawerCloseTrigger mt='10px' />
      </DrawerContent>
    </DrawerRoot>
  )
}
