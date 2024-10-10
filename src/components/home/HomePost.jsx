import { Avatar, AvatarBadge, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiSolidHide, BiSolidLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaFaceLaughSquint, FaRegShareFromSquare } from "react-icons/fa6";
import { IoHeartCircleSharp } from "react-icons/io5";
import { MdOutlinePublic } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";

function HomePost({ _post }) {
    const [post, setPost] = useState({});
    const [displayedImages, setDisplayedImages] = useState([]);
    const [imageComponent, setImageComponent] = useState({});

    const handleSettingPost = () => {

    }

    const handleHidePost = () => {

    }


    const handleLike = () => {

    }



    useEffect(() => {
        let renderedImage = <></>;
        switch(displayedImages.length) {
            case 0: renderedImage = (<></>);    break;
            case 1: renderedImage = (<Image src={displayedImages[0]} w={"full"} />);   break;

            default: renderedImage = (<></>);   break;
        }

        setImageComponent(renderedImage);
    }, [displayedImages])


    useEffect(() => {
        setPost(_post);
        setDisplayedImages(_post?.images ?? []);
    }, [_post])

    return (
        <Flex marginY={4} p={2} flexDirection={"column"} w={"full"} bg={"gray.dark"} border={"xl"} gap={3}>
            <Flex className="post-toolbar" justifyContent={"center"} gap={1} >
                <Avatar ml={2} flex={2} src={post?.owner?.avatar} width={"36px"} height={"36px"} border={"3px solid blue"} borderRadius={"100%"}>
                    {post?.owner?.isOnline === true 
                        && <AvatarBadge boxSize={"1em"} bg={"green.500"} />
                    }
                </Avatar>

                <Flex flex={40} ml={1} flexDirection={"column"} height={"36px"} textAlign={"start"}>
                    <Text fontSize={"13px"} fontWeight={"semibold"}>{post?.owner?.fullname ?? "Anonymous"}</Text>
                    <Flex justify={"flex-start"} gap={2}>
                        <Text as={Link} to={`/posts/${post?.id}`} fontSize={"11px"} color={"gray.600"} fontWeight={"bold"}>{post?.createdAt}.</Text>
                        <MdOutlinePublic size={16}/>
                    </Flex>
                </Flex>

                <Flex flex={4} height={"36px"} justifyContent={"space-between"}>
                    <Button borderRadius={"100%"} bg={"none"} border={"none"} onClick={() => handleSettingPost()}>
                        <BsThreeDots size={16} cursor={"pointer"} />
                    </Button>

                    <Button borderRadius={"100%"} bg={"none"} border={"none"} onClick={() => handleHidePost()}>
                        <BiSolidHide size={16} cursor={"pointer"} title="Hide this post"/>
                    </Button>
                </Flex>
            </Flex>

            <Flex className="post-content" flexDirection={"column"} justifyContent={"flex-start"} gap={2}>
                <Text pl={1} textAlign={"start"} fontSize={"16px"} fontWeight={"semibold"}>{post?.title}</Text>

                {displayedImages && displayedImages.length > 0
                    && imageComponent
                }

            </Flex>
            <Divider size={4} />

            <Flex className="reaction-statistics" justifyContent={"space-between"} mx={3}>
                <Flex>
                    <BiSolidLike fill="blue" size={20}/>
                    <IoHeartCircleSharp fill="red" color="white" size={20}/>
                    <FaFaceLaughSquint fill="yellow" color="white" size={20} />
                    <Text pl={2}>{post.reactions?.total}</Text>
                </Flex>

                <Flex gap={2}>
                    <Text>{post.comments} Comments</Text>
                    <Text>{post.shares} Shares</Text>
                </Flex>
            </Flex>

            <Divider size={4} />

            <Flex className="reaction-controller" w={"full"} gap={2}>
                <Button flex={1} bg={"none"} _hover={{border: "1px solid white", backgroundColor: "#242424"}} gap={2} onClick={() => handleLike()}>
                    <SlLike />
                    <Text>Like</Text>
                </Button>

                <Button flex={1} bg={"none"} _hover={{border: "1px solid white", backgroundColor: "#242424"}} gap={2} onClick={() => handleLike()}>
                    <FaRegComment />
                    <Text>Comment</Text>
                </Button>

                <Button flex={1} bg={"none"} _hover={{border: "1px solid white", backgroundColor: "#242424"}} gap={2} onClick={() => handleLike()}>
                    <FaRegShareFromSquare />
                    <Text>Share</Text>
                </Button>
            </Flex>
        </Flex>
    );
}

export default HomePost;