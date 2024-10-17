import { Button, Flex, FormControl, FormLabel, Heading, Image, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import banner from '../assets/auth_banner.jpeg';
import { FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginAccess } from "../redux/access/access.async.thunk";

function AuthPage() {
    const { isLoading } = useSelector((state) => state.access);
    const dispatch = useDispatch();
    
    // TODO: move it into .env file
    const APP_SERVER_URL = "http://localhost:5000";
    
    const [authState, setAuthState] = useState("login");
    const [isShowingPassword, setIsShowingPassword] = useState(false);
    const [searchParams] = useSearchParams();

    const [inputs, setInputs] = useState({email: "", password: "", fullname: "", retypePassword: ""});

    const handleEnter = (e) => {
        if(e.key !== "Enter" && e.key !== 'NumpadEnter') {
            return;
        } else if(authState === "signup") {
            return;
        }

        handleSubmitLogin();
    }

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
        dispatch(loginAccess({ email: inputs?.email, password: inputs?.password }));
    }

    const handleSubmitSignup = async () => {
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

            <Flex p={12} align={'center'} justify={'center'} w={"full"}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'3xl'} mb={1}>{authState === "login" ? "Login to your account" : "Sign up to join us"} 💖</Heading>
                    <FormControl id="email">
                        <FormLabel fontStyle={"italic"} htmlFor="email">Email address</FormLabel>
                        <Input type="email" required
                            value={inputs?.email} onChange={(e) => setInputs({...inputs, email: e.target.value})} 
                        />
                    </FormControl>

                    {authState === "signup"
                        && <FormControl id="fullname">
                            <FormLabel fontStyle={"italic"} htmlFor="fullname">Fullname</FormLabel>
                            <Input type="text" required
                                value={inputs?.fullname} onChange={(e) => setInputs({...inputs, fullname: e.target.value})} 
                            />
                        </FormControl>
                    }

                    <FormControl id="password">
                        <FormLabel fontStyle={"italic"} htmlFor="password">Password</FormLabel>
                        <InputGroup>
                            <Input type={isShowingPassword === true ? "text" : "password"} required
                                value={inputs?.password} onChange={(e) => setInputs({...inputs, password: e.target.value})} onKeyDown={(e) => handleEnter(e)}
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

                    {authState === "signup"
                        && <FormControl id="retype-password">
                            <FormLabel fontStyle={"italic"} htmlFor="retype-password">Retype password</FormLabel>
                            <InputGroup>
                                <Input type={isShowingPassword === true ? "text" : "password"} required
                                    value={inputs?.retypePassword} onChange={(e) => setInputs({...inputs, retypePassword: e.target.value})}
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
                    }

                    <Stack spacing={6} borderBottom={"1px solid white"} pb={4}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}
                        >
                            <Text as={Link} to={"/auth/reset"} color={'blue.500'}>Forgot password?</Text>
                            <Text as={Link} to={`/auth?state=${authState === "login" ? "signup" : "login"}`} color={'blue.500'}>
                                {authState === "login" ? "Don't have any account?" : "Already have an account?"}
                            </Text>
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

                    {authState === "login"
                        ? <Button height={"48px"} colorScheme={'blue'} variant={'solid'}
                            isLoading={isLoading}
                            onClick={() => handleSubmitLogin()}
                        >
                        <Text fontSize={20} fontWeight={"bold"}>Login</Text>
                    </Button>
                    : <Button height={"48px"} colorScheme={'blue'} variant={'solid'} onClick={() => handleSubmitSignup()}>
                        <Text fontSize={20} fontWeight={"bold"}>Signup</Text>

                    </Button>
                    }
                    
                </Stack>
            </Flex>
        </Flex>
    );
}

export default AuthPage;