
import { Flex, Text } from '@chakra-ui/react';
import HomeLeftMenu from '../components/home/HomeLeftMenu';
import HomeRightMenu from '../components/home/HomeRightMenu';

function HomePage() {
    return (
        <Flex mt={"75px"} w={"95vw"} minH={"90vh"} justifyContent={"space-between"}>
            <HomeLeftMenu flex={30} />

            <Flex className='main-menu-homepage' flex={40}
            >
                <Text w={"full"} textAlign={"center"}>Main menu</Text>
            </Flex>

            <HomeRightMenu flex={30}/>
        </Flex>
    );
}

export default HomePage;