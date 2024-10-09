import { Flex, Image, Input } from "@chakra-ui/react";
import logo from '../../../assets/react.svg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TbHomeFilled } from "react-icons/tb";
import { CiStreamOn } from "react-icons/ci";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiGameControllerFill } from "react-icons/pi";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";

function Header() {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");

    return (
        <Flex w={"100vw"} className="app-header" justifyContent={"space-between"} gap={4}>
            <Flex className="left-side-header" flex={30} w={"full"} justifyContent={"center"} gap={2}>
                <Image src={logo} alt="App logo" onClick={navigate("/")}/>
                <Input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search here ..." w={"300px"} borderRadius={"2xl"}
                />
            </Flex>

            <Flex className="center-side-header" flex={40} justifyContent={"space-evenly"}>
                <TbHomeFilled size={32} />
                <CiStreamOn size={32} />
                <HiMiniUserGroup size={32} />
                <PiGameControllerFill size={32} />
            </Flex>

            <Flex className="right-side-header" flex={30} justifyContent={"center"} gap={2}>
                <BsFillMenuButtonWideFill size={32} />
                <BiSolidMessageRoundedDetail size={32} />
                <MdNotificationsActive size={32} />

            </Flex>
        </Flex>
    );
}

export default Header;