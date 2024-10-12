import { Avatar, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CiStreamOn } from "react-icons/ci";
import { FaSave, FaUserFriends } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiGameControllerFill } from "react-icons/pi";
import { RiHistoryFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function HomeLeftMenu() {
    const navigate = useNavigate();
    const [menuItems, setMenuItems] = useState([]);

    const [shortcuts, setShortcuts] = useState([]);


    useEffect(() => {
        
        setMenuItems([
            {icon: <Avatar width={"32px"} height={"32px"} src=""/>, linkURL: "/profile/leechongwei", title: "Profile"},
            {icon: <FaUserFriends size={32} color="green" />, linkURL: "/friends", title: "Friends"},
            {icon: <HiMiniUserGroup size={32} color="green"/>, linkURL: "/profile/leechongwei", title: "Groups"},
            {icon: <CiStreamOn size={32} color="green"/>, linkURL: "/profile/leechongwei", title: "Streams"},
            {icon: <RiHistoryFill size={32} color="green"/>, linkURL: "/stories", title: "Stories"},
            {icon: <PiGameControllerFill size={32} color="green"/>, linkURL: "/profile/leechongwei", title: "Games"},
            {icon: <FaSave size={32} color="green"/>, linkURL: "/profile/leechongwei", title: "Saved"},
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
        <Flex w={"20vw"} my={1} height={"90vh"} flexDirection={"column"} overflowY={"auto"} 
            position={"fixed"} top={"75px"} left={"32px"}
        >
            <Flex className="upper-menu" flexDirection={"column"} flex={50} gap={2} height={"fit-content"}>
                {menuItems.length > 0
                && menuItems.map((item, id) => {
                    return <Button key={`menu-item-${id}`} w={"full"} height={"48px"} onClick={() => navigate(item?.linkURL)} 
                    bg={"none"} zIndex={10} borderRadius={"none"}
                    _hover={{
                        border: "0.5px solid white",
                        backgroundColor: "rgba(255, 255, 255, 0.16)",
                        borderRadius: "8px",
                    }} 
                    justifyContent={"start"} gap={4}
                >
                    {item?.icon}
                    {item?.title}
                </Button>
                })}
            </Flex>

            <Divider my={3} size={8}/>

            <Flex className="lower-menu" flex={50} flexDirection={"column"} alignItems={"flex-start"}>
                <Flex w={"full"} justifyContent={"space-between"} my={2}>
                    <Text fontSize={"16px"} fontStyle={"italic"}>Shortcuts</Text>
                    <Link to={"/shortcuts"} _hover={{textDecoration: "underline"}}>Edit</Link>
                </Flex>

                <Flex w={"full"} flexDirection={"column"} alignItems={"flex-start"} gap={2}>
                {shortcuts.length > 0 
                && shortcuts.slice(0, 5).map((shortcut, id) => {
                    return (
                        <Flex w={"full"} as={Button} key={`shortcut-${id}`} justifyContent={"flex-start"} height={"48px"} gap={4}
                            bg={"none"} marginY={0} borderRadius={"none"}
                            _hover={{
                                border: "0.5px solid white",
                                backgroundColor: "rgba(255, 255, 255, 0.16)",
                                borderRadius: "8px",
                            }} 
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