
import { Flex } from '@chakra-ui/react';
import HomeLeftMenu from '../components/home/HomeLeftMenu';
import HomeRightMenu from '../components/home/HomeRightMenu';
import MultiElementCarousel from '../components/common/Carousel/MultiElementCarousel';
import { useEffect, useState } from 'react';
import UserContentCreatorToolkit from '../components/common/UserContentCreatorToolkit';
import PostInList from '../components/post/PostInList';

function HomePage() {
    const STORIES_PER_TIME = 5;

    const [stories, setStories] = useState([]);
    const [posts, setPosts] = useState([]);

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

        fetchStories();
        fetchPosts();
    }, []);

    return (
        <Flex mt={"75px"} w={"95vw"} minH={"90vh"} justifyContent={"space-between"}>
            <HomeLeftMenu flex={30} />

            <Flex className='main-menu-homepage' flex={40} w={"50vw"} mx={"25vw"} px={2} 
                flexDirection={"column"} justifyContent={"flex-start"}
            >
                <UserContentCreatorToolkit context={"HomePage"} />

                <MultiElementCarousel className="story-carousel-homepage" data={stories} length={STORIES_PER_TIME}/>

                <Flex className='post-list-homepage' flexDirection={"column"} gap={2} w={"full"}>
                    {posts.length > 0
                    && posts.map((post, id) => {
                        return <PostInList key={`post-homepage-${id}`} _post={post}>
                        </PostInList>
                    })}
                </Flex>
            </Flex>

            <HomeRightMenu flex={30}/>
        </Flex>
    );
}

export default HomePage;