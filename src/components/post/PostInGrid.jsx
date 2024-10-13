import { Avatar, AvatarBadge, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Post({ _post }) {
    const MAX_TITLE_LENGTH = 20;
    const navigate = useNavigate();
    const [post, setPost] = useState();

    useEffect(() => {
        setPost({
            ..._post, 
            title: (_post.title.length > MAX_TITLE_LENGTH) ? _post.title.slice(0, MAX_TITLE_LENGTH) + " ..." : _post.title
        });
        console.log("Post data: ");
        console.log(_post);
    }, [_post])

    return (
        <Flex w={"full"} flexDirection={"column"} gap={1} justifyContent={"space-between"} 
            bg={"gray.dark"} borderRadius={"lg"} cursor={"pointer"} onClick={() => navigate(`/posts/${post?.id}`)}
        >
            {/* <Image w={"full"} src={post?.images?.length > 0 ? post?.images[0] : ""} borderRadius={"2xl"} /> */}
            <Image w={"full"} src={post?.images[0]} borderRadius={"2xl"} />
            <Flex justifyContent={"space-between"} p={1}>
                <Avatar flex={2} src={post?.owner?.avatar} cursor={"pointer"}>
                    {post?.owner?.isOnline === true
                    && <AvatarBadge bg={"green.500"} boxSize={4}/>
                    }
                </Avatar>

                <Flex flex={7} flexDir={"column"} gap={1}>
                    <Text fontSize={14} fontWeight={"bold"}>{post?.title}</Text>
                    <Text fontSize={12} fontWeight={"thin"}>{post?.createdAt}</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Post;