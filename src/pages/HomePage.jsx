
import { Flex, Text } from '@chakra-ui/react';
import HomeLeftMenu from '../components/home/HomeLeftMenu';

function HomePage() {
    return (
        <Flex w={"95vw"} minH={"65vh"} justifyContent={"space-between"}>
            <HomeLeftMenu flex={30} />

            <Flex className='main-menu-homepage' flex={40}
            >
                <Text w={"full"} textAlign={"center"}>Main menu</Text>
            </Flex>

            <Flex className='right-menu-homepage' flex={30}
            >
                <Text w={"full"} textAlign={"center"}>Right side menu</Text>
            </Flex>
        </Flex>
    );
}

export default HomePage;