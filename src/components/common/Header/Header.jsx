import { Avatar, Button, Flex, Image, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import logo from '../../../assets/react.svg';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TbHomeFilled } from "react-icons/tb";
import { CiStreamOn } from "react-icons/ci";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiGameControllerFill } from "react-icons/pi";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { RxDropdownMenu } from "react-icons/rx";

import './Header.scss';
import { RiDeleteBinLine, RiHistoryFill } from "react-icons/ri";
import { SearchIcon } from "@chakra-ui/icons";



function Header() {
    const ICON_SIZE = 32;
    const SELECTED_NAVIGATOR_COLOR = "#3068e3";


    const [searchText, setSearchText] = useState("");
    const [suggestedSearchResults, setSuggestedSearchResults] = useState([{text: 'Hello world!'}]);
    const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
    
    const [selectedNavigator, setSelectedNavigator] = useState("Home");

    


    const handleChangeTextSearch = (e) => {
        setSearchText(e.target.value);
        setIsSearchMenuOpen(true);
    }

    const handleSearch = async (e) => {
        if (e.key !== "Enter" && e.key !== 'NumpadEnter') {
            return;
        }

        window.alert("Has enter!");
        // TODO: add calling API here
        const data = [{
            text: "Demo text",
        }];
        setSuggestedSearchResults(data);
    }

    const handleChooseSuggestedResult = async (id) => {
        window.alert("Has chosen the suggested result: " + id);
        const searchResult = suggestedSearchResults[id]?.text;
        setSearchText(searchResult);

        // TODO: call API here
        setIsSearchMenuOpen(false);
    }

    const handleDeleteSuggestedResult =  async (e, id) => {
        e.preventDefault();
        window.alert("Has deleted the suggested result: " + id);
    }

    useEffect(() => {
        setSuggestedSearchResults([
            {text: 'Hello world!'},
            {text: 'Hello world!'},
            {text: 'Hello world!'},
            {text: 'Hello world!'},
            {text: 'Hello world!'},
            {text: 'Hello world!'},
            {text: 'Hello world!'},
            {text: 'Hello world!'},
            {text: 'Hello world!'},
        ])
    }, [])
    

    return (
        <Flex zIndex={1000000} w={"100vw"} className="app-header" justifyContent={"space-between"} gap={4}
            position={"fixed"} top={"0"} left={"0px"} bg={"gray.800"} paddingY={3}
        >
            <Flex className="left-side-header" flex={30} w={"full"} justifyContent={"flex-start"} gap={2} pl={2}
                position={"relative"}>
                <Flex pl={2} justifyContent={"flex-start"} gap={2}>
                    <Link to={"/"}>
                        <Image src={logo} alt="App logo" cursor={"pointer"} _hover={{opacity: 0.7}} />
                    </Link>
                    <Flex flexDirection={"column"} alignItems={"center"}>
                        <InputGroup>
                        <InputLeftElement>
                            <SearchIcon size={16} />
                        </InputLeftElement>
                            <Input type="text" value={searchText} onChange={(e) => handleChangeTextSearch(e)} onKeyDown={(e) => handleSearch(e)}
                                placeholder="Search here ..." w={"250px"} borderRadius={"2xl"} 
                                onFocus={() => setIsSearchMenuOpen(true)}
                                onBlur={() => setIsSearchMenuOpen(false)}
                                
                            />
                        </InputGroup>
                    </Flex>
                </Flex>
                <Flex width={"20vw"} position={"absolute"} top={"48px"} hidden={isSearchMenuOpen === false} 
                    p={2} borderRadius={"0 0 12px 12px"} bg={"gray.900"} flexDirection={"column"}>
                        {suggestedSearchResults.length > 0 
                        && suggestedSearchResults.slice(0, 8).map((result, id) => {
                            return (
                                <Flex key={`search-result-${id}`} w={"full"} justifyContent={"space-between"} 
                                    cursor={"pointer"} p={2} width={"full"} bg={"#242424"}
                                >
                                    <Button onMouseDown={(e) => e.preventDefault()} flex={9} onClick={() => handleChooseSuggestedResult(id)}
                                        bg={"#242424"}>
                                        <Text w={"full"} p={2} textAlign={"start"} >
                                            {result?.text}
                                        </Text>
                                    </Button>
                                    <RiDeleteBinLine flex={1} size={40} style={{padding: '8px'}} 
                                        _hover={{backgroundColor: "rgba(255, 255, 255, 0.08)"}} 
                                        onClick={(e) => handleDeleteSuggestedResult(e, id)}
                                        onMouseDown={(e) => e.preventDefault()}
                                    />
                                </Flex>
                            )
                        })}
                </Flex>
            </Flex>

            <Flex className="center-side-header" flex={40} justifyContent={"space-evenly"}>
                <Button px={"40px"} py={"8px"} onClick={() => setSelectedNavigator("Home")}>
                    <TbHomeFilled size={ICON_SIZE} className="header-icon" title="Home" 
                    fill={selectedNavigator === "Home" ? SELECTED_NAVIGATOR_COLOR : "white"} />
                </Button>
                <Button px={"40px"} py={"8px"} onClick={() => setSelectedNavigator("Streams")}>
                    <CiStreamOn size={ICON_SIZE} className="header-icon" title="Streams" 
                    fill={selectedNavigator === "Streams" ? SELECTED_NAVIGATOR_COLOR : "white"} />
                </Button>
                <Button px={"40px"} py={"8px"} onClick={() => setSelectedNavigator("Stories")}>
                    <RiHistoryFill size={ICON_SIZE} className="header-icon" title="Stories" 
                    fill={selectedNavigator === "Stories" ? SELECTED_NAVIGATOR_COLOR : "white"} />
                </Button>
                <Button px={"40px"} py={"8px"} onClick={() => setSelectedNavigator("Groups")}>
                    <HiMiniUserGroup size={ICON_SIZE} className="header-icon" title="Groups"
                    fill={selectedNavigator === "Groups" ? SELECTED_NAVIGATOR_COLOR : "white"} />
                </Button>
                <Button px={"40px"} py={"8px"} onClick={() => setSelectedNavigator("Games")}>
                    <PiGameControllerFill size={ICON_SIZE} className="header-icon" title="Games"
                    fill={selectedNavigator === "Games" ? SELECTED_NAVIGATOR_COLOR : "white"} />
                </Button>
            </Flex>

            <Flex className="right-side-header" flex={30} justifyContent={"flex-end"} pr={8} gap={4}>
                <Button className="header-icon" >
                    <RxDropdownMenu size={ICON_SIZE} />
                </Button>
                <Button className="header-icon" >
                    <BiSolidMessageRoundedDetail size={ICON_SIZE} />
                </Button>
                <Button className="header-icon" >
                    <MdNotificationsActive size={ICON_SIZE} />
                </Button>
                
                <Avatar src="" w={"38px"} h={"38px"} _hover={{
                    opacity: 0.8,
                    cursor: "pointer",
                }}
                />
            </Flex>
        </Flex>
    );
}

export default Header;