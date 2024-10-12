import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProfilePostsIntro({ currentUser, userSlug }) {
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const  [friendsData, setFriendsData] = useState({});

    useEffect(() => {
        if(currentUser?.slug === user?.slug && friendsData?.total) {
            return;
        }

        const fetchFriendsData = async () => {
            // TODO: Call API here
            setFriendsData({
                total: 2000,
                mutualTotal: 500,
                userList: [
                    {slug: "lindan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg", fullname: "Lin Dan", isOnline: true, mutual: 200},
                    {slug: "lindan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg", fullname: "Lin Dan", isOnline: false, mutual: 200},
                    {slug: "lindan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg", fullname: "Lin Dan", isOnline: true, mutual: 200},
                    {slug: "lindan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg", fullname: "Lin Dan", isOnline: true, mutual: 200},
                    {slug: "lindan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg", fullname: "Lin Dan", isOnline: true, mutual: 200},
                    {slug: "lindan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg", fullname: "Lin Dan", isOnline: true, mutual: 200},
                    {slug: "lindan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg", fullname: "Lin Dan", isOnline: true, mutual: 200},
                    {slug: "lindan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg", fullname: "Lin Dan", isOnline: true, mutual: 200},
                    {slug: "lindan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg", fullname: "Lin Dan", isOnline: true, mutual: 200},
                    {slug: "lindan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg", fullname: "Lin Dan", isOnline: true, mutual: 200},
                    {slug: "lindan", avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727795022/fbp2nwftpez86z1dmcgi.jpg", fullname: "Lin Dan", isOnline: true, mutual: 200},
                ]
            });
        };

        fetchFriendsData();
        
    }, [currentUser, user.slug]);

    useEffect(() => {
        if(!user?.slug || user?.slug !== currentUser.slug) {
            setUser(currentUser);
        }
    }, [currentUser, user])


    return (
        <Flex className="profile-post-photo" flexDirection={"column"} gap={4}  bg={"gray.dark"} p={"16px 8px"}>
            <Flex className="photos-title" justifyContent={"space-between"}>
                <Flex flexDirection={"column"} gap={1} justifyContent={"flex-start"} textAlign={"start"}>
                    <Text fontSize={24} fontWeight={"bold"}>Friends</Text>
                    <Text fontSize={16} fontWeight={"thin"} fontStyle={"italic"}>
                        {friendsData?.total} friends {user?.slug === userSlug ? '' :  `, ${friendsData?.mutualTotal} mutual`}
                        </Text>
                </Flex>
                <Button as={Link} to={`/profile/${user?.slug}/friends`}>See all friends</Button>
            </Flex>
            
            <Grid w={"full"} height={user?.slug === userSlug ? "420px" : "150px"}
                templateRows={"repeat(3, 1fr)"} templateColumns={"repeat(3, 1fr)"} gap={1}
            >
                {friendsData?.userList?.length > 0
                && friendsData?.userList.slice(0, user?.slug === userSlug ? 9 : 3)
                    .map((friend, id) => {
                        return (<GridItem as={Flex} key={`profile-friend-${id}`}
                                flexDirection={"column"} justifyContent={"space-between"}
                                cursor={"pointer"} _hover={{opacity: 0.7}} 
                            >
                            <Image w={"120px"} height={"120px"} src={friend?.avatar}
                                onClick={() => navigate(`/profile/${friend?.slug}`)}
                                borderRadius={"lg"}
                            />

                            <Flex justifyContent={"flex-start"} gap={2} alignItems={"center"} px={"2px"}>
                                {/* <BsDot color="blue" size={32} /> */}

                                <div hidden={friend.isOnline === false} style={{borderRadius: "100%", backgroundColor: "green", width: "10px", height: "10px"}}></div>
                                <Text fontSize={11} >{friend.mutual} mutual friends</Text>
                            </Flex>
                        </GridItem>)
                    })
                    }
            </Grid>
        </Flex>
    );
}

export default ProfilePostsIntro;