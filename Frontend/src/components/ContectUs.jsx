import { Button,Box,Image, Fieldset,Center, Input, Stack,VStack,Flex,Text, Textarea } from "@chakra-ui/react"
import { LuMapPin } from "react-icons/lu";
import { FaMobile } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

export default function ContectUs(){
  return <>
            <Flex gap='10' justifyContent={'space-around'} flexDirection={{base:"column",lg:"row"}}>
                <Center w={{base:"100%",lg:"35%"}}>
                <form action="" style={{width:"100%"}}>
                <Flex flexDirection={'column'} w='100%' gap='5'>
                        <Flex flexDirection={'column'}>
                        <Text display={'inline-block'} fontWeight={'600'}>Name</Text>
                        <Input required  placeContent={'Enter Your Name'}/>
                        </Flex>
                        <Flex flexDirection={'column'}>
                        <Text display={'inline-block'} fontWeight={'600'}>Number</Text>
                        <Input  required placeContent={'Mobile Number'}/>
                        </Flex>
                        <Flex flexDirection={'column'}>
                        <Text  display={'inline-block'} fontWeight={'600'}>Message</Text>
                        <Textarea required/>
                        
                        </Flex>
                        <Button type="submit">Submit</Button>
                </Flex>
                </form>
                </Center>
                <Flex gap={'5'} flexDirection={'column'} opacity={{base:"0.8",lg:"1"}}>
                   <VStack display={{base:"none",lg:"Flex"}} fontSize={'2xl'} fontWeight={'600'}>DemoScool</VStack>
                    <Flex justifyContent={'center'} alignItems={'center'} display={{base:"none",lg:"Flex"}}>
                        <Image w='250px' src='https://www.euroschoolindia.com/wp-content/uploads/2023/06/importance-of-school-education.jpg'/>
                    </Flex>
                    <Flex gap='1' alignItems={'center'}>
                        <Box fontSize={'xl'} color={'red'}><LuMapPin/></Box>
                        <Text>
                        Md Najamuddin (Niva) , Santpur,Nautan Dubey,Bettiah,845438
                        </Text>
                    </Flex>
                    <Flex gap='1' alignItems={'center'}>
                        <Box fontSize={'xl'} color={'red'}><FaMobile/></Box>
                        <Text>
                        +8210942893
                        </Text>
                    </Flex>
                    <Flex gap='1' alignItems={'center'}>
                        <Box fontSize={'xl'} color={'red'}><MdOutlineMarkEmailUnread/></Box>
                        <Text>
                         786mdnajamuddin@gmail.com
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
  </>
}
