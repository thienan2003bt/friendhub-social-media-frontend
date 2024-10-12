import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProfilePostsIntro({ currentUser }) {
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const  [eventData, setEventData] = useState([]);

    useEffect(() => {
        if(currentUser?.slug === user?.slug && eventData?.total) {
            return;
        }

        const fetchEventData = async () => {
            // TODO: Call API here
            setEventData([
                {title: "Win Beijing Olympic Silver 2008", postUrl: "/posts/post-1000000", iconUrl: 'https://img.icons8.com/3d-fluency/94/medal.png', since: format("2024-08-21T04:13:05.316+00:00", "MMMM yyyy")}
            ]);
        };

        fetchEventData();
        
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
                    <Text fontSize={24} fontWeight={"bold"}>Events</Text>
                </Flex>
                <Button as={Link} to={`/profile/${user?.slug}/events`}>See all events</Button>
            </Flex>
            
            <Flex w={"full"} justifyContent={"space-between"} gap={"5%"}>
                {eventData?.slice(0, 3).map((eve, id) => {
                    return (<Flex w={"45%"}  key={`event-profile-${id}`}
                        bg={"#242424"} cursor={"pointer"} _hover={{opacity: 0.7, }}
                        onClick={() => navigate(eve.postUrl)} height={"250px"}
                        flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={2}
                    >   
                        <Image src={eve.iconUrl} w={"40px"} />
                        <Text w={"full"} fontSize={16} fontWeight={"bold"} wordBreak={"break-word"}>{eve.title}</Text>
                        <Text w={"full"} fontSize={12} fontWeight={"thin"}>{eve.since}</Text>
                    </Flex>)
                })}
            </Flex>
        </Flex>
    );
}

export default ProfilePostsIntro;