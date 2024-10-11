import { Avatar, AvatarBadge, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeRightMenu() {
    const [onlineFriends, setOnlineFriends] = useState([]);
    const [groupChats, setGroupChats] = useState([]);


    useEffect(() => {
        setOnlineFriends([
            {fullname: "Lee Chong Wei", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg"},
            {fullname: "Lin Dan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg"},
            {fullname: "Lee Chong Wei", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg"},
            {fullname: "Lee Chong Wei", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg"},
            {fullname: "Lee Chong Wei", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg"},
            {fullname: "Lee Chong Wei", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg"},
            {fullname: "Lee Chong Wei", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg"},
            {fullname: "Lee Chong Wei", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg"},
            {fullname: "Lee Chong Wei", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg"},
            {fullname: "Lee Chong Wei", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg"},
        ])

        setGroupChats([
            {title: "Room 802", thumbnail: "https://res.cloudinary.com/thienan-cloud/image/upload/v1725611411/product/shopID/testDemo.jpg"},
            {title: "Web Development", thumbnail: "https://res.cloudinary.com/thienan-cloud/image/upload/v1725611411/product/shopID/testDemo.jpg"},
            {title: "IT Interns", thumbnail: "https://res.cloudinary.com/thienan-cloud/image/upload/v1725611411/product/shopID/testDemo.jpg"},
            {title: "Javascript Coder", thumbnail: "https://res.cloudinary.com/thienan-cloud/image/upload/v1725611411/product/shopID/testDemo.jpg"},
            {title: "League of Legends", thumbnail: "https://res.cloudinary.com/thienan-cloud/image/upload/v1725611411/product/shopID/testDemo.jpg"},
        ])
    }, []);

    return (
        <Flex id="app-right-side-menu" top={"75px"} height={"90vh"} w={"20vw"} position={"fixed"} right={"16px"} 
            overflowY={"scroll"} my={1} flexDirection={"column"}
        >
            <Flex w={"full"} className="online-users-menu" flexDirection={"column"} flex={50} pr={2}>
                <Flex justifyContent={"space-between"} w={"full"}>
                    <Text fontSize={"16px"} fontStyle={"italic"}>Online Friends</Text>
                    <Link to={"/friends/edit"}>Edit</Link>
                </Flex>

                <Flex my={2} flexDirection={"column"} justifyContent={"flex-start"}>
                    {onlineFriends.length > 0
                    && onlineFriends.slice(0, 10).map((friend, id) => {
                        return <Button key={`online-friend-${id}`}  w={"full"} height={"48px"} bg={"gray.dark"} 
                            backgroundColor={"#242424"} zIndex={10} borderRadius={"none"} p={2}
                            _hover={{
                                border: "0.5px solid white",
                                backgroundColor: "rgba(255, 255, 255, 0.16)",
                                borderRadius: "8px",
                            }} 
                            justifyContent={"start"} gap={4}
                        >
                            <Avatar src={friend.avatar} width={"40px"} height={"40px"}>
                                <AvatarBadge bg={"green"} boxSize={"16px"}/>
                            </Avatar>

                            <Text fontSize={"16px"} fontWeight={"bold"}>{friend.fullname}</Text>
                        </Button>
                    })}
                </Flex>
            </Flex>

            <Divider size={4} my={3}/>

            <Flex w={"full"} className="online-users-menu" flexDirection={"column"} flex={50} pr={2}>
            <Flex justifyContent={"space-between"} w={"full"}>
                    <Text fontSize={"16px"} fontStyle={"italic"}>Group chats</Text>
                    <Link to={"/friends/edit"}>Edit</Link>
                </Flex>

                <Flex my={2} flexDirection={"column"} justifyContent={"flex-start"}>
                    {groupChats.length > 0
                    && groupChats.slice(0, 5).map((groupChat, id) => {
                        return <Button key={`online-group-chat-${id}`}  w={"full"} height={"48px"} bg={"gray.dark"} 
                            backgroundColor={"#242424"} zIndex={10} borderRadius={"none"} p={2}
                            _hover={{
                                border: "0.5px solid white",
                                backgroundColor: "rgba(255, 255, 255, 0.16)",
                                borderRadius: "8px",
                            }} 
                            justifyContent={"start"} gap={4}
                        >
                            <Avatar src={groupChat.thumbnail} width={"40px"} height={"40px"}>
                                <AvatarBadge bg={"green"} boxSize={"16px"}/>
                            </Avatar>

                            <Text fontSize={"16px"} fontWeight={"bold"}>{groupChat.title}</Text>
                        </Button>
                    })}
                </Flex>
            </Flex>
        </Flex>
    );
}

export default HomeRightMenu;