import { Button, Divider, Flex, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useOutletContext, useParams, useSearchParams } from "react-router-dom";
import ProfilePostsIntro from "./ProfilePostsIntro";
import ProfilePostPhotos from "./ProfilePostPhotos";
import ProfilePostsFriends from './ProfilePostsFriends';
import ProfilePostsEvents from './ProfilePostsEvents';
import UserContentCreatorToolkit from "../../common/UserContentCreatorToolkit";
import PostInList from '../../post/PostInList';
import PostInGrid from '../../post/PostInGrid';
import { TbFilterSearch } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { MdOutlineGridOn } from "react-icons/md";

function ProfilePosts() {
    const [posts, setPosts] = useState([]);
    const [gridPosts, setGridPosts] = useState([]);

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
        
        // if(newViewMode === "grid") {
        //     const newPosts = [];
        //     posts.forEach((post) => {
        //         const currentTimeline = post?.timeline;
        //         if(!currentTimeline) {
        //             return;
        //         }
        //         const foundTimeline = newPosts.filter(p => p.timeline === currentTimeline).length > 0;
        //         if(foundTimeline) {
        //             newPosts[currentTimeline]?.posts.push(post);
        //         } else {
        //             newPosts.push({timeline: currentTimeline, posts: []})
        //         }

        //     });
        // }
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

            setGridPosts([{
                timeline: "October 2024", 
                posts: [{
                    id: "p-00001",
                    title: "Hello world from Lee Chong Wei of Malaysia!",
                    images: ["https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg"],
                    owner: {
                        avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", 
                        isOnline: true, 
                    },
                    createdAt: "2 days ago",
                }, {
                    id: "p-00001",
                    title: "Hello world from Lee Chong Wei of Malaysia!",
                    images: ["https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg"],
                    owner: {
                        avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", 
                        isOnline: true, 
                    },
                    createdAt: "2 days ago",
                }, {
                    id: "p-00001",
                    title: "Hello world from Lee Chong Wei of Malaysia!",
                    images: ["https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg"],
                    owner: {
                        avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", 
                        isOnline: true, 
                    },
                    createdAt: "2 days ago",
                }, {
                    id: "p-00001",
                    title: "Hello world from Lee Chong Wei of Malaysia!",
                    images: ["https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg"],
                    owner: {
                        avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", 
                        isOnline: true, 
                    },
                    createdAt: "2 days ago",
                }]
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
                            {currentUser?.slug === userSlug
                            && <Button>
                                <IoSettings />
                                <Text fontSize={14} fontWeight={"semibold"} mx={1}>Manage posts</Text>
                            </Button>
                            }
                            
                        </Flex>
                    </Flex>

                    <Divider my={2}/>

                    {currentUser?.slug === userSlug
                    && <Flex className="view-mode-controller" w={"full"}>
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
                    }

                </Flex>

                {viewMode === "list"
                ? <Flex className="post-list" flexDirection={"column"} gap={1}> 
                    {posts.length > 0
                        && posts.map((post, id) => {
                            return <PostInList key={`post-homepage-${id}`} _post={post}>
                                </PostInList>
                            }
                        )}
                </Flex>
                :  <Flex className="post-grid" flexDirection={"column"} gap={2}>
                    {gridPosts.length
                    && gridPosts.map((post, id) => {
                        return <Flex key={`post-timeline-homepage-${id}`} flexDirection={"column"}
                            w={"full"} bg={"#242424"} borderRadius={"lg"} p={2} gap={3}
                        >
                            <Text textAlign={"start"} fontSize={20} fontWeight={"bold"}>{post.timeline}</Text>
                            <Grid templateColumns={"repeat(3, 1fr)"} gap={2}>
                                {post?.posts?.length > 0 
                                && post?.posts?.map((_post, id) => {
                                    return <PostInGrid key={`post-homepage-${id}`} _post={_post}/>
                                })}
                                
                            </Grid>
                        </Flex>
                    })
                    }
                    
                </Flex>
                }
                
            </Flex>
        </Flex>
    );
}

export default ProfilePosts;