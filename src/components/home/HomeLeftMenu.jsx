import { Avatar, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CiStreamOn } from "react-icons/ci";
import { FaSave, FaUserFriends } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiGameControllerFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

function HomeLeftMenu() {
    const navigate = useNavigate();
    const [menuItems, setMenuItems] = useState([]);

    const [shortcuts, setShortcuts] = useState([]);


    useEffect(() => {
        
        setMenuItems([
            {icon: <Avatar width={"32px"} height={"32px"} src=""/>, linkURL: "/profile", title: "Profile"},
            {icon: <FaUserFriends size={32} color="green" />, linkURL: "/friends", title: "Friends"},
            {icon: <HiMiniUserGroup size={32} color="green"/>, linkURL: "/profile", title: "Groups"},
            {icon: <CiStreamOn size={32} color="green"/>, linkURL: "/profile", title: "Streams"},
            {icon: <PiGameControllerFill size={32} color="green"/>, linkURL: "/profile", title: "Games"},
            {icon: <FaSave size={32} color="green"/>, linkURL: "/profile", title: "Saved"},
        ])

        setShortcuts([
            {thumbnail: 'https://res.cloudinary.com/thienan-cloud/image/upload/v1728233266/tbbrchgo2p10bbzaxya0.jpg', title: "Thiết Mê Ly"},
            {thumbnail: 'https://res.cloudinary.com/thienan-cloud/image/upload/v1728233266/tbbrchgo2p10bbzaxya0.jpg', title: "Tiên Phong"},
            {thumbnail: 'https://res.cloudinary.com/thienan-cloud/image/upload/v1728233266/tbbrchgo2p10bbzaxya0.jpg', title: "Tiên Phong"},
            {thumbnail: 'https://res.cloudinary.com/thienan-cloud/image/upload/v1728233266/tbbrchgo2p10bbzaxya0.jpg', title: "Tiên Phong"},
            {thumbnail: 'https://res.cloudinary.com/thienan-cloud/image/upload/v1728233266/tbbrchgo2p10bbzaxya0.jpg', title: "Tiên Phong"},
        ])
    }, [])
 
    return (
        <Flex w={"25vw"} my={1} ml={8} h={"60vh"} flexDirection={"column"} height={"full"} overflowY={"auto"}>
            <Flex className="upper-menu" flexDirection={"column"} flex={60}>
                {menuItems.length > 0
                && menuItems.map((item, id) => {
                    return <Button key={`menu-item-${id}`} w={"full"} height={"48px"} bg={"gray.dark"} onClick={() => navigate(item?.linkURL)} 
                    backgroundColor={"#242424"}
                    _hover={{border: "0.5px solid white", backgroundColor: "rgba(255, 255, 255, 0.16)"}} justifyContent={"start"} gap={4}
                >
                    {item?.icon}
                    {item?.title}
                </Button>
                })}
            </Flex>

            <Divider my={3} size={8}/>
            <Flex className="lower-menu" flex={40} flexDirection={"column"} alignItems={"flex-start"}>
                <Flex w={"full"} justifyContent={"space-between"}>
                    <Text fontSize={"24px"} fontStyle={"italic"}>Shortcuts</Text>
                    <Link to={"/shortcuts"} _hover={{textDecoration: "underline"}}>Edit</Link>
                </Flex>

                <Flex w={"full"}  my={2} flexDirection={"column"} alignItems={"flex-start"} gap={1}>
                {shortcuts.length > 0 
                && shortcuts.slice(0, 5).map((shortcut, id) => {
                    return (
                        <Flex w={"full"} as={Button} key={`shortcut-${id}`} justifyContent={"flex-start"} 
                            p={4} height={"48px"}
                        >
                            <Image width={"36px"} height={"36px"} src={shortcut.thumbnail} alt="Shortcut thumbnail"/>
                            <Text>{shortcut.title}</Text>
                        </Flex>
                    )
                })}
                </Flex>
            </Flex>
        </Flex>
    );
}

export default HomeLeftMenu;