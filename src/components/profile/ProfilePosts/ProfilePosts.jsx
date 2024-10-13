import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useOutletContext, useParams, useSearchParams } from "react-router-dom";
import ProfilePostsIntro from "./ProfilePostsIntro";
import ProfilePostPhotos from "./ProfilePostPhotos";
import ProfilePostsFriends from './ProfilePostsFriends';
import ProfilePostsEvents from './ProfilePostsEvents';
import UserContentCreatorToolkit from "../../common/UserContentCreatorToolkit";
import PostInList from '../../post/PostInList';
import { TbFilterSearch } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { MdOutlineGridOn } from "react-icons/md";

function ProfilePosts() {
    const [posts, setPosts] = useState([]);
    const [currentUser, selectedToolbar, setSelectedToolbar] = useOutletContext();
    const {userSlug} = useParams();
    const [viewMode, setViewMode] = useState();

    const [searchParams, setSearchParams] = useSearchParams();
    

    useEffect(() => {
        if(!selectedToolbar !== "Posts") {
            setSelectedToolbar(selectedToolbar)
        }
    }, [selectedToolbar, setSelectedToolbar]);

    useEffect(() => {
        const newViewMode = searchParams.get("viewmode");
        if(!newViewMode) {
            setViewMode("list");
        } else {
            setViewMode(newViewMode);
        }
    }, [searchParams])

    useEffect(() => {
        const fetchPosts = async () => {
            setPosts([{
                id: "p-00001", 
                title: "Hello world from Lee Chong Wei of Malaysia!", 
                images: ["https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg"],
                createdAt: "2 days ago", 
                owner: {
                    avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", 
                    isOnline: true, 
                    fullname: "Lee Chong Wei", 
                },
                reactions: {
                    total: 317, likes: 200, love: 60, haha: 35, wow: 20, sad: 2
                },
                comments: 23,
                shares: 17
            }, {
                id: "p-00001", 
                title: "Hello world from Lee Chong Wei of Malaysia!", 
                images: ["https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg"],
                createdAt: "2 days ago", 
                owner: {
                    avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", 
                    isOnline: true, 
                    fullname: "Lee Chong Wei", 
                },
                reactions: {
                    total: 317, likes: 200, love: 60, haha: 35, wow: 20, sad: 2
                },
                comments: 23,
                shares: 17
            }])
        }

        fetchPosts();
    }, [])


    const handleToggleViewMode = () => {
        const newSearchParams = searchParams;
        const otherViewMode = (viewMode === "list") ? "grid" : "list";
        newSearchParams.set("viewmode", otherViewMode);
        setSearchParams(newSearchParams);
    }





    return (
        <Flex className="posts-profile-page" w={"75%"} mx={"12.5%"} 
            gap={1} justifyContent={"space-between"} py={2} mb={4}
        >
            <Flex flex={4} className="profile-info-section" flexDirection={"column"} gap={4} p={3}>
                <ProfilePostsIntro currentUser={currentUser} userSlug={userSlug} />
                <ProfilePostPhotos currentUser={currentUser} userSlug={userSlug} />
                <ProfilePostsFriends currentUser={currentUser} userSlug={userSlug} />
                {currentUser?.slug === userSlug
                    && <ProfilePostsEvents currentUser={currentUser}/>
                }
            </Flex>

            <Flex className="posts-section" flex={6} 
                flexDirection={"column"} gap={2}
            >
                <UserContentCreatorToolkit context={"ProfilePosts"} />

                <Flex className="post-controller" flexDirection={"column"} gap={1} 
                    bg={"gray.dark"} p={2}
                >
                    <Flex justifyContent={"space-between"} px={2} alignItems={"center"}>
                        <Text fontSize={20} fontWeight={"bold"}>Posts</Text>

                        <Flex gap={2}>
                            <Button>
                                <TbFilterSearch />
                                <Text fontSize={14} fontWeight={"semibold"} mx={1}>Filters</Text>
                            </Button>
                            <Button>
                                <IoSettings />
                                <Text fontSize={14} fontWeight={"semibold"} mx={1}>Manage posts</Text>
                            </Button>
                        </Flex>
                    </Flex>

                    <Divider my={2}/>

                    <Flex className="view-mode-controller" w={"full"}>
                        <Button flex={1} bg={"none"} borderBottom={viewMode === "list" ? "2px solid blue" : "none"}
                            onClick={() => handleToggleViewMode()} _hover={{border: "none", backgroundColor: "#242424"}}
                        >
                            <FaRegListAlt fill={viewMode === "list" ? "blue" : "white"} />
                            <Text color={viewMode === "list" ? "blue" : "white"} mx={1}>
                                List view
                            </Text>
                        </Button>
                        <Button flex={1} bg={"none"} borderBottom={viewMode === "grid" ? "2px solid blue" : "none"}
                            onClick={() => handleToggleViewMode()} _hover={{border: "none", backgroundColor: "#242424"}}
                        >
                            <MdOutlineGridOn fill={(viewMode === "grid") ? "blue" : "white"} />
                            <Text color={viewMode === "grid" ? "blue" : "white"} mx={1}>
                                Grid view
                            </Text>
                        </Button>
                    </Flex>

                </Flex>

                <Flex className="post-list" flexDirection={"column"} gap={1}> 
                    {posts.length > 0
                        && posts.map((post, id) => {
                            if(viewMode === "list") {
                                return <PostInList key={`post-homepage-${id}`} _post={post}>
                                </PostInList>
                            }
                        })}
                </Flex>
            </Flex>
        </Flex>
    );
}

export default ProfilePosts;