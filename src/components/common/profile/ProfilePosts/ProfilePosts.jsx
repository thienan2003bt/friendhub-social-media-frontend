import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";

import { useOutletContext, useParams } from "react-router-dom";
import ProfilePostsIntro from "./ProfilePostsIntro";
import ProfilePostPhotos from "./ProfilePostPhotos";
import ProfilePostsFriends from './ProfilePostsFriends';

function ProfilePosts() {
    const [currentUser, selectedToolbar, setSelectedToolbar] = useOutletContext();
    const {userSlug} = useParams();

    useEffect(() => {
        if(!selectedToolbar !== "Posts") {
            setSelectedToolbar(selectedToolbar)
        }
    }, [selectedToolbar, setSelectedToolbar]);


    return (
        <Flex className="posts-profile-page" w={"75%"} mx={"12.5%"} 
            gap={1} justifyContent={"space-between"} py={2} mb={4}
        >
            <Flex flex={4} className="profile-info-section" flexDirection={"column"} gap={4} p={3}>
                <ProfilePostsIntro currentUser={currentUser} userSlug={userSlug} />
                <ProfilePostPhotos currentUser={currentUser} userSlug={userSlug} />
                <ProfilePostsFriends currentUser={currentUser} userSlug={userSlug} />
            </Flex>

            <Flex className="posts-section" flex={6}>

            </Flex>
        </Flex>
    );
}

export default ProfilePosts;