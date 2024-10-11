import { Button, Flex, FormControl, FormLabel, Heading, Image, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import banner from '../assets/auth_banner.jpeg';
import { FaGithub } from "react-icons/fa";

function AuthPage() {
    // TODO: move it into .env file
    const APP_SERVER_URL = "http://localhost:5000";
    
    const [authState, setAuthState] = useState("login");
    const [isShowingPassword, setIsShowingPassword] = useState(false);
    const [searchParams] = useSearchParams();

    const [inputs, setInputs] = useState({email: "", password: ""});


    const handleLoginWith = (platform) => {
        let fetchingURL = `${APP_SERVER_URL}/auth/${platform}`;
        
        try {
            // TODO: Call API here
            console.log("Fetching URL: " + fetchingURL);
        } catch (error) {
            console.error("Error logging in with platform " + platform + ": " + error);
            window.alert("Error logging in with platform " + platform + ": " + error.message);
        }
    }

    const handleSubmitLogin = async () => {
        // TODO: Call API here
        const response = "fetch data here!"
        window.alert("Response: " + response)
    }

    useEffect(() => {
        const newState = searchParams.get("state");
        if(newState && newState !== authState) {
            setAuthState(newState);
        }
    }, [searchParams, authState])


    return (
        <Flex w={"99vw"} justifyContent={"stretch"} overflow={"hidden"}>
            <Image src={banner ?? ""} height={"100vh"} />
            <Flex className="auth-form">

            </Flex>

            <Flex p={16} align={'center'} justify={'center'} w={"full"}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'3xl'} mb={1}>{"Login to your account 💖"}</Heading>
                    <FormControl id="email">
                        <FormLabel fontStyle={"italic"} htmlFor="email">Email address</FormLabel>
                        <Input type="email" required
                            value={inputs?.email} onChange={(e) => setInputs({...inputs, email: e.target.value})} 
                        />
                    </FormControl>

                    <FormControl id="password">
                        <FormLabel fontStyle={"italic"} htmlFor="password">Password</FormLabel>
                        <InputGroup>
                            <Input type={isShowingPassword === true ? "text" : "password"} required
                                value={inputs?.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}
                            />
                            <InputRightElement h={'full'}>
                                <Button
                                    variant={'ghost'}
                                    onClick={() => setIsShowingPassword((isShowingPassword) => !isShowingPassword)}>
                                    {isShowingPassword === true ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>

                    <Stack spacing={6} borderBottom={"1px solid white"} pb={4}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}
                        >
                            <Text as={Link} to={"/auth/reset"} color={'blue.500'}>Forgot password?</Text>
                            <Text as={Link} to={"/auth?signup"} color={'blue.500'}>{"Don't have any account?"}</Text>
                        </Stack>

                    </Stack>


                    <Flex flexDirection={"column"} justifyContent={"center"} borderBottom={"1px solid white"} pb={4}>
                        <Text mx={"25%"} w={"50%"} pb={2} fontWeight={"thin"} fontSize={"16px"}>Or login with</Text>
                        <Flex mt={1} justifyContent={"space-evenly"}>
                            <Image src="https://img.icons8.com/color/48/google-logo.png" cursor={"pointer"} onMouseDown={() => handleLoginWith("google")} />
                            <Image src="https://img.icons8.com/color/48/facebook-circled--v1.png" cursor={"pointer"} onMouseDown={() => handleLoginWith("facebook")}/>
                            <FaGithub size={40} fill={"white"} cursor={"pointer"} onMouseDown={() => handleLoginWith("facebook")}/>
                        </Flex> 
                    </Flex>

                    <Button height={"48px"} colorScheme={'blue'} variant={'solid'} onClick={() => handleSubmitLogin()}>
                        Login
                    </Button>
                </Stack>
            </Flex>
        </Flex>
    );
}

export default AuthPage;