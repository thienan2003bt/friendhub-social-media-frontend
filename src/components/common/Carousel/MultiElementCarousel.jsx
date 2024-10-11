import { Avatar, AvatarBadge, Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

function MultiElementCarousel({data, length}) {
    const [sliderElements, setSliderElements] = useState([]);

    useEffect(() => {
        setSliderElements(data.slice(0, length));
    }, [data, length])

    return (
        <Flex w={"full"} my={2} height={"23vh"} justifyContent={"space-between"}>
            <Flex flex={9} w={"full"} overflow={"hidden"} justifyContent={"flex-start"}>
                {sliderElements.map((element, index) => (
                    <Box position={"relative"} key={index} mx={1} bg={"#242424"} borderRadius={"lg"} 
                        cursor={"pointer"} _hover={{opacity: 0.6}}
                    >
                        <Avatar src={element.owner.avatar} 
                            position={"absolute"} left={"8px"} top={"8px"} w={"36px"} height={"36px"} zIndex={1000} 
                            border={"3px solid blue"} borderRadius={"100%"}
                        >
                            {element.owner.isOnline === true 
                                && <AvatarBadge boxSize={4} bg={"green.500"} />
                            }
                        </Avatar>

                        <Image src={element.thumb} height={"23vh"} borderRadius={"lg"} opacity={"0.8"} zIndex={10} />
                        <Text fontSize={"14px"} fontWeight={"bold"} color={"white.900"} w={"full"} textAlign={"start"} pl={2}
                            position={"absolute"} bottom={4} left={"50%"} transform={"translateX(-50%)"}
                        >
                            {element.owner.fullname}
                        </Text>
                    </Box>
                ))}
                
            </Flex>

            <Flex flex={1}>
            <Box w={"full"} as={Link} mx={1} bg={"#242424"} borderRadius={"lg"} 
                        cursor={"pointer"} _hover={{opacity: 0.6}} alignItems={"center"}
                        to={"/stories/"} position={"relative"}
                    >
                        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
                            position={"absolute"} top={"50%"} left={"0"} transform={"translateY(-50%)"} gap={2}
                        >
                            <Text fontSize={"13px"} fontWeight={"semibold"} color={"white.900"} w={"full"} textAlign={"center"}
                            >
                                See more
                            </Text>
                            <GrLinkNext size={24} />
                        </Flex>
                    </Box>
            </Flex>
        </Flex>
    );
}

export default MultiElementCarousel;