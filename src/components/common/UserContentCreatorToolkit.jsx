import { Avatar, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiSolidVideoRecording, BiSolidVideos } from "react-icons/bi";
import { FaBusinessTime } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function UserContentCreatorToolkit({ context }) {
    const navigate = useNavigate();
    const [fontsize, setFontsize] = useState();
    const [iconsize, setIconsize] = useState();

    useEffect(() => {
        switch(context) {
            case "HomePage": setFontsize(16); setIconsize("36px"); break;
            case "ProfilePosts": setFontsize(12); setIconsize("36px"); break;

            default: setFontsize(20); setIconsize("28px"); break;
        }
    }, [context])

    return (
        <Flex className='user-content-creator-toolkit' w={"full"}
                bg={"gray.dark"} borderRadius={"md"} px={4} py={2} 
                flexDirection={"column"} justifyContent={"flex-start"}
        >
            <Flex w={"full"} px={2} className='upper-toolkit' justifyContent={"flex-start"} gap={2}>
                <Avatar flex={2} src="" width={iconsize} height={iconsize} 
                cursor={"pointer"} _hover={{opacity: 0.7}}
                />

                <Button flex={29} ml={2} borderRadius={"3xl"} justifyContent={"start"}>
                    <Text fontSize={16} px={1} textAlign={"start"} fontWeight={"thin"} fontStyle={"italic"}>How was your day? Express it to us!</Text> 
                </Button>
            </Flex>

            <Divider my={3} size={4}/>

            <Flex w={"full"} p={2} className='lower-toolkit' justifyContent={"space-evenly"}>
                <Button className='record-toolkit' onClick={() => navigate("/streams/create")} gap={1}>
                    <BiSolidVideoRecording size={24} color='red'/>
                    <Text fontSize={fontsize} _hover={{color: "white.800"}}>Start a streaming</Text>
                </Button>

                <Button className='story-toolkit' onClick={() => navigate("/stories/create")} gap={1}>
                    <BiSolidVideos size={24} color='orange'/>
                    <Text fontSize={fontsize} _hover={{color: "white.800"}}>Create a story</Text>
                </Button>

                <Button className='page-toolkit' onClick={() => navigate("/pages/create")} gap={1}>
                    <ImProfile size={24} color={"#3068e3"}/>
                    <Text fontSize={fontsize} _hover={{color: "white.800"}}>Publish a page</Text>
                </Button>

                <Button className='memory-toolkit' onClick={() => navigate("/memories/create")} gap={1}>
                    <FaBusinessTime size={24} color={"yellowgreen"}/>
                    <Text fontSize={fontsize} _hover={{color: "white.800"}}>Save a memory</Text>
                </Button>
            </Flex>
        </Flex>
    );
}

export default UserContentCreatorToolkit;