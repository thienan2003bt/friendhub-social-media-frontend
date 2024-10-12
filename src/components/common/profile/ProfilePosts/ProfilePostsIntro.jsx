import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { IoSchoolSharp, IoTimerSharp } from "react-icons/io5";
import { SiWorkplace } from "react-icons/si";
import {format} from "date-fns";
import { Link } from "react-router-dom";

function ProfilePostsIntro({ currentUser, userSlug }) {
    const [user, setUser] = useState({});
    const  [introData, setIntroData] = useState({});

    useEffect(() => {
        if(currentUser?.slug === user?.slug && introData?.bio) {
            return;
        }

        const fetchIntroData = async () => {
            // TODO: Call API here
            setIntroData({
                bio: "Datuk Lee Chong Wei of Malaysia",
                workplace: "BAM - Badminton Association of Malaysia",
                school: "University of Malaya, Kuala Lumpur",
                city: "Kuala Lumpur, Malaysia",
                hometown: "Perak, Malaysia",
                marital: {
                    status: "Married to ",
                    partner: " Wong Mew Chow",
                    partnerSlug: "wmcMalaysia",
                    since: format("2024-08-21T04:13:05.316+00:00", "MMMM yyyy"),
                },
                createdAt: format("2024-08-21T04:13:05.316+00:00", "MMMM yyyy"),
            });
        };

        fetchIntroData();
        
    }, [currentUser, user.slug, introData]);

    useEffect(() => {
        if(!user?.slug || user?.slug !== currentUser.slug) {
            setUser(currentUser);
        }
    }, [currentUser, user])


    
    const handleEditIntroBio = () => {

    }

    const handleEditIntroDetail = () => {

    }

    return (
        <Flex className="intro-section" flexDirection={"column"} textAlign={"start"} gap={4}  bg={"gray.dark"} p={"16px 8px"}>
                    <Flex className="intro-bio" flexDirection={"column"}>
                        <Text fontSize={24} fontWeight={"bold"}>Intro</Text>
                        <Text textAlign={"center"}>{introData?.bio}</Text>
                        {currentUser?.slug === userSlug
                        && <Button onClick={() => handleEditIntroBio()} my={1}>Edit bio</Button>}
                    </Flex>

                    <Flex className="intro-workplace" gap={3}>
                        <SiWorkplace size={24} />
                        <Text>Working at 
                            <Text as={Link} to={"#"}>{` ${introData?.workplace}`}</Text>
                        </Text>
                    </Flex>
                    <Flex className="intro-school" gap={3}>
                        <IoSchoolSharp size={24} />
                        <Text>Going to 
                            <Text as={Link} to={"#"}>{` ${introData?.school}`}</Text>
                        </Text>
                    </Flex>
                    <Flex className="intro-marital-status" gap={3}>
                        <FaHeartPulse size={24} />
                        <Text as={Flex}>
                            {introData?.marital?.status}

                            {introData?.marital?.partner
                            && <>
                                <Text as={Link} to={"#"} pl={1}> {` ${introData?.marital?.partner}`}</Text>
                                <Text>, from {introData?.marital?.since ?? introData?.createdAt}</Text>
                            </>}
                        </Text>
                    </Flex>
                    <Flex className="intro-join" gap={3}>
                        <IoTimerSharp size={24} />
                        <Text>Joined from {introData?.createdAt}</Text>
                    </Flex>

                    {currentUser?.slug === userSlug 
                    && <Button onClick={() => handleEditIntroDetail()}>Edit details</Button>}
                </Flex>
    );
}

export default ProfilePostsIntro;