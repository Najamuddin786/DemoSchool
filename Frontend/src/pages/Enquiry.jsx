import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Text,Flex,Box } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContectUs from "../components/ContectUs";



export default function Enquiry() {
  useEffect(() => {
    // Automatically trigger the dialog open when the component mounts
    // const triggerButton = document.querySelector('[data-dialog-trigger]');
    // if (triggerButton) {
    //   triggerButton.click();
    // }
  }, []);

  return (
    <DialogRoot size={{base:"100vw",lg:"cover"}}placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild data-dialog-trigger>
        <Text cursor={'pointer'} fontWeight={'500'} _hover={{fontWeight:"600",textUnderlineOffset:"4px",textDecoration:"underline"}} borderRadius={'sm'} p='5px' bg={"red"}>Enquiry Now</Text>
      </DialogTrigger>
      <DialogContent  h={{base:"100vh",lg:"80vh"}}>
        <DialogHeader>
          <Flex  fontSize={'2xl'} fontWeight={'700'} justifyContent={'center'}>
            <Box borderRadius={'md'}  p='10px' color={'green.700'} >Enquiry Now</Box></Flex>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
            <ContectUs/>
         </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}
