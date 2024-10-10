
import { Flex, Text } from '@chakra-ui/react';

function HomePage() {
    return (
        <Flex w={"95vw"} minH={"65vh"} justifyContent={"space-between"}>
            <Flex className='left-menu-homepage' flex={30}
            >
                <Text w={"full"} textAlign={"center"}>Left side menu</Text>
            </Flex>

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