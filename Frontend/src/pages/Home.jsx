import { Box,Flex,Text } from "@chakra-ui/react";
//import {Button} from "@/components/ui/Button";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/Navbar/ImageSlider";
import Notice from "../components/Navbar/Notice";

export default function Home(){

        return <>
                <Navbar/>
                <ImageSlider/>
                <Notice/>
                <h1>Home</h1>
                
        </>
}