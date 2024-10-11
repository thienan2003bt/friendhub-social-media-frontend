import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function ProfilePosts() {
    const [selectedToolbar, setSelectedToolbar] = useOutletContext();

    useEffect(() => {
        if(!selectedToolbar !== "Posts") {
            setSelectedToolbar(selectedToolbar)
        }
    }, [selectedToolbar, setSelectedToolbar]);

    return (
        <Flex>
            
        </Flex>
    );
}

export default ProfilePosts;