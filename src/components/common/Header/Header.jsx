import { Avatar, Button, Flex, Image, Input } from "@chakra-ui/react";
import logo from '../../../assets/react.svg';
import { Link } from "react-router-dom";
import { useState } from "react";
import { TbHomeFilled } from "react-icons/tb";
import { CiStreamOn } from "react-icons/ci";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiGameControllerFill } from "react-icons/pi";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { RxDropdownMenu } from "react-icons/rx";

import './Header.scss';



function Header() {
    const ICON_SIZE = 32;
    const SELECTED_NAVIGATOR_COLOR = "#3068e3";


    const [searchText, setSearchText] = useState("");
    const [selectedNavigator, setSelectedNavigator] = useState("Home");

    return (
        <Flex w={"95vw"} className="app-header" justifyContent={"space-between"} gap={4} margin={"0 auto"}>
            <Flex className="left-side-header" flex={30} w={"full"} justifyContent={"center"} gap={2}>
                <Link to={"/"}>
                    <Image src={logo} alt="App logo" cursor={"pointer"} _hover={{opacity: 0.7}} />
                </Link>
                <Input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search here ..." w={"300px"} borderRadius={"2xl"}
                />
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
                <Button px={"40px"} py={"8px"} onClick={() => setSelectedNavigator("Groups")}>
                    <HiMiniUserGroup size={ICON_SIZE} className="header-icon" title="Groups"
                    fill={selectedNavigator === "Groups" ? SELECTED_NAVIGATOR_COLOR : "white"} />
                </Button>
                <Button px={"40px"} py={"8px"} onClick={() => setSelectedNavigator("Games")}>
                    <PiGameControllerFill size={ICON_SIZE} className="header-icon" title="Games"
                    fill={selectedNavigator === "Games" ? SELECTED_NAVIGATOR_COLOR : "white"} />
                </Button>
            </Flex>

            <Flex className="right-side-header" flex={30} justifyContent={"flex-end"} gap={4}>
                <Button className="header-icon" >
                    <RxDropdownMenu size={ICON_SIZE} />
                </Button>
                <Button className="header-icon" >
                    <BiSolidMessageRoundedDetail size={ICON_SIZE} />
                </Button>
                <Button className="header-icon" >
                    <MdNotificationsActive size={ICON_SIZE} />
                </Button>
                
                {/* <Button className="header-icon" >
                    <MdNotificationsActive size={ICON_SIZE} />
                </Button> */}
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