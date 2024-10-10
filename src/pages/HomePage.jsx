
import { Avatar, Button, Divider, Flex, Text } from '@chakra-ui/react';
import HomeLeftMenu from '../components/home/HomeLeftMenu';
import HomeRightMenu from '../components/home/HomeRightMenu';
import { BiSolidVideoRecording, BiSolidVideos } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { ImProfile } from 'react-icons/im';
import { FaBusinessTime } from 'react-icons/fa';
import MultiElementCarousel from '../components/common/Carousel/MultiElementCarousel';
import { useEffect, useState } from 'react';

function HomePage() {
    const STORIES_PER_TIME = 5;
    const navigate = useNavigate();
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            setStories([
                {thumb: "https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg", owner: {avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", isOnline: true, fullname: "Lee Chong Wei"}},
                {thumb: "https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg", owner: {avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", isOnline: false, fullname: "Lee Chong Wei"}},
                {thumb: "https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg", owner: {avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", isOnline: true, fullname: "Lee Chong Wei"}},
                {thumb: "https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg", owner: {avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", isOnline: true, fullname: "Lee Chong Wei"}},
                {thumb: "https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg", owner: {avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", isOnline: true, fullname: "Lee Chong Wei"}},
                {thumb: "https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg", owner: {avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", isOnline: true, fullname: "Lee Chong Wei"}},
                {thumb: "https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg", owner: {avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", isOnline: true, fullname: "Lee Chong Wei"}},
                {thumb: "https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg", owner: {avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", isOnline: true, fullname: "Lee Chong Wei"}},
                {thumb: "https://didongviet.vn/dchannel/wp-content/uploads/2022/12/story-facebook-didongviet@2x.jpg", owner: {avatar: "https://res.cloudinary.com/thienan-cloud/image/upload/v1727977438/pciqvmmvpszmmro1gzow.jpg", isOnline: true, fullname: "Lee Chong Wei"}},
            ])
        }

        fetchStories();
    }, []);

    return (
        <Flex mt={"75px"} w={"95vw"} minH={"90vh"} justifyContent={"space-between"}>
            <HomeLeftMenu flex={30} />

            <Flex className='main-menu-homepage' flex={40} w={"50vw"} mx={"25vw"} px={2}  borderBottom={"2px solid white"}
                flexDirection={"column"} justifyContent={"flex-start"}
            >
                <Flex className='user-content-creator-toolkit' w={"full"}
                    bg={"gray.dark"} borderRadius={"md"} px={4} py={2} 
                    flexDirection={"column"} justifyContent={"flex-start"}
                >
                    <Flex w={"full"} px={2} className='upper-toolkit' justifyContent={"flex-start"} gap={2}>
                        <Avatar flex={1} src="" width={"36px"} height={"36px"}/>

                        <Button flex={19} ml={2} borderRadius={"3xl"} justifyContent={"start"}>
                            <Text fontSize={16} px={1} textAlign={"start"} fontWeight={"thin"} fontStyle={"italic"}>How was your day? Express it to us!</Text> 
                        </Button>
                    </Flex>

                    <Divider my={3} size={4}/>

                    <Flex w={"full"} p={2} className='lower-toolkit' justifyContent={"space-evenly"}>
                        <Button className='record-toolkit' onClick={() => navigate("/streams/create")} gap={1}>
                            <BiSolidVideoRecording size={24} color='red'/>
                            <Text _hover={{color: "white.800"}}>Start a streaming</Text>
                        </Button>

                        <Button className='story-toolkit' onClick={() => navigate("/stories/create")} gap={1}>
                            <BiSolidVideos size={24} color='orange'/>
                            <Text _hover={{color: "white.800"}}>Create a story</Text>
                        </Button>

                        <Button className='page-toolkit' onClick={() => navigate("/pages/create")} gap={1}>
                            <ImProfile size={24} color={"#3068e3"}/>
                            <Text _hover={{color: "white.800"}}>Publish a page</Text>
                        </Button>

                        <Button className='memory-toolkit' onClick={() => navigate("/memories/create")} gap={1}>
                            <FaBusinessTime size={24} color={"yellowgreen"}/>
                            <Text _hover={{color: "white.800"}}>Save a memory</Text>
                        </Button>
                    </Flex>
                </Flex>

                <MultiElementCarousel className="story-carousel-homepage" data={stories} length={STORIES_PER_TIME}/>
            </Flex>

            <HomeRightMenu flex={30}/>
        </Flex>
    );
}

export default HomePage;