import { AddIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaCameraRetro } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ProfilePage() {
    // TODO: Open this to context
    // const currentUser = useContext(userContext);
    const currentUser = useMemo(() => {
        return {
        id: "u-0001", 
        fullname: "Lee Chong Wei", 
        avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg",
        friends: [
           {fullname: "Lin Dan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg"},
           {fullname: "Lin Dan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg"},
           {fullname: "Lin Dan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg"},
           {fullname: "Lin Dan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg"},
           {fullname: "Lin Dan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg"},
           {fullname: "Lin Dan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg"},
           {fullname: "Lin Dan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg"},
           {fullname: "Lin Dan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg"},
           {fullname: "Lin Dan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg"},
           {fullname: "Lin Dan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg"},
        ],
        friendCount: 2000,
    }}, []);

    const [profileData, setProfileData] = useState({});
    const [ownPosts, setOwnPosts] = useState([]);
    const [isShowingSuggestedFriends, setIsShowingSuggestedFriends] = useState(false);



    const handleToggleCoverPhoto = () => {

    }

    const handleToggleAvatar = () => {

    }

    const handleUploadAvatar = () => {
        window.alert("Upload avatar!")
    }




    useEffect(() => {
        if(!currentUser) {
            return;
        }

        setProfileData({
            cover_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U28B2DBEAjY5TFfQPJZa98m-CS1fMdDcUA&s",
        })

        setOwnPosts([
            {},
        ])
    }, [currentUser]);


    return (
        <Flex className="app-profile-page" flexDirection={"column"} justify={"flex-start"} 
            mt={"75px"} w={"80vw"} mx={"10vw"} minH={"90vh"}
        >
            <Flex className="cover-photo-section" width={"90%"} mx={"5%"} height={"45vh"} position={"relative"} >
                <Image src={profileData?.cover_photo} w={"full"} height={"45vh"} 
                    cursor={"pointer"} onClick={() => handleToggleCoverPhoto()} 
                    _hover={{opacity: 0.6}}
                />
                <Button position={"absolute"} bottom={4} right={6} 
                    bg={"white"} color={"gray.dark"} border="none"
                    _hover={{ opacity: 0.8 }}
                    >
                    Edit cover photo
                </Button>
            </Flex>

            <Flex className="main-info-section" 
                width={"75%"} mx={"12.5%"} pt={2}
            >
                <Flex position={"relative"} className="brief-info" w={"full"} borderBottom={"1px dotted gray"}>
                    <Avatar top={-20} left={0} position={"absolute"} src={currentUser?.avatar} w={48} h={48} overflow={"visible"}
                        cursor={"pointer"} onClick={() => handleToggleAvatar()} _hover={{opacity: 0.6}}
                    >
                        <AvatarBadge as={FaCameraRetro} size={40} right={6} cursor={"pointer"} onClick={() => handleUploadAvatar()}/>
                    </Avatar>

                    <Flex className="user-info" flexDirection={"column"} justifyContent={"space-evenly"}
                        w={"full"} ml={48} pl={4} height={"150px"}
                    >
                        <Text textAlign={"start"} w={"full"} fontSize={28} fontWeight={"bold"}>{currentUser?.fullname}</Text>
                        <Text textAlign={"start"} w={"full"} fontSize={16} color={"gray"}>{currentUser?.friendCount} friends</Text>
                        <Flex className="friend-avatar-list">
                            {currentUser?.friends.length > 0
                            && currentUser?.friends.slice(0, 8)
                            .map((friend, id) => {
                                return (
                                    <Avatar key={`friend-avatar-${id}`} src={friend.avatar} width={8} height={8} 
                                        cursor={"pointer"} _hover={{opacity: 0.8}} title={friend.fullname}
                                    />
                                )
                            })}
                        </Flex>

                    </Flex>

                    <Flex className="user-profile-action" alignItems={"flex-end"} justifyContent={"flex-end"} pb={4} gap={2}>
                        <Button colorScheme="blue" variant={"solid"} gap={2}>
                            <AddIcon boxSize={4}/>
                            <Text>Add to story</Text>
                        </Button>
                        <Button colorScheme="green" variant={"solid"} gap={2}>
                            <AiFillEdit boxSize={4}/>
                            <Text>Edit profile</Text>
                        </Button>
                        <Button gap={2} onClick={() => setIsShowingSuggestedFriends(!isShowingSuggestedFriends)}>
                            <Text>You may know</Text>
                            {isShowingSuggestedFriends === true
                            ? <IoIosArrowUp boxSize={4}/>
                            : <IoIosArrowDown boxSize={4}/>}
                        </Button>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    );
}

export default ProfilePage;