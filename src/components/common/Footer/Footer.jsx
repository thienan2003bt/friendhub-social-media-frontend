import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
    const CUSTOMER_SERVICE_ADMIN_MAIL = "admin@admin.com";
    const CUSTOMER_SERVICE_ADMIN_PHONE = "0374128258";

    const [languages, setLanguages] = useState([]);
    const [selectedLanguageCode, setSelectedLanguageCode] = useState("UK");

    const [navigators, setNavigators] = useState([]);
    const [policies, setPolicies] = useState([]);

    const handleSelectLanguage = async (langCode) => {
        const foundLanguages = languages.filter(lang => lang.code === langCode);
        if(foundLanguages.length <= 0) {
            return window.alert("Invalid language!");
        }

        console.log("New selected language: ");
        console.log({name: foundLanguages[0].name, code: foundLanguages[0].code});
        setSelectedLanguageCode(foundLanguages[0].code);
    }


    useEffect(() => {
        setLanguages([{name: "English", code: "UK"}, {name: "American", code: "US"}]);
        setPolicies([{name: "Term of services"}, {name: "Cookies"}]);
        setNavigators([{name: "Home", linkURL: "/"}, {name: "Games", linkURL: "/games"}])
    }, [])

    return (
        <Flex className="app-footer" w={"95vw"} justifyContent={"space-evenly"}>
            <Flex className="language-section-footer" flexDirection={"column"} 
                justifyContent={"flex-start"} alignItems={"flex-start"}
                p={3}
            >
                <Text fontSize={24} fontWeight={"bold"}>Languages</Text>
                <Divider marginY={2} />
                <Flex flexDirection={"column"} alignItems={"flex-start"} justifyContent={"flex-start"}>
                { languages.length > 0
                && languages.slice(0, 3).map((lang, id) => {
                    return <Text w={"full"} as={Button} disabled={selectedLanguageCode === lang.code} 
                            key={`lang-${id}`} onClick={() => handleSelectLanguage(lang.code)} marginY={1}>
                            {lang.code} - {lang.name}
                        </Text>
                    })}
                </Flex>
            </Flex>
            <Flex className="navigator-section-footer" flexDirection={"column"} 
                justifyContent={"flex-start"} alignItems={"flex-start"}
                p={3}
            >
                <Text fontSize={24} fontWeight={"bold"}>Policies</Text>
                <Divider marginY={2} />
                <Flex flexDirection={"column"} alignItems={"flex-start"} justifyContent={"flex-start"}>
                { navigators.length > 0
                && navigators.slice(0, 3).map((nav, id) => {
                    return <Text as={Link} w={"full"} textAlign={"start"} marginY={1}
                            key={`nav-${id}`} to={`/${nav.linkURL}`}>
                            {nav.name}
                        </Text>
                    })}
                </Flex>
            </Flex>

            <Flex className="policy-section-footer" flexDirection={"column"} 
                justifyContent={"flex-start"} alignItems={"flex-start"}
                p={3}
            >
                <Text fontSize={24} fontWeight={"bold"}>Policies</Text>
                <Divider marginY={2} />
                <Flex flexDirection={"column"} alignItems={"flex-start"} justifyContent={"flex-start"}>
                { policies.length > 0
                && policies.slice(0, 3).map((policy, id) => {
                    return <Text as={Link} w={"full"} textAlign={"start"} marginY={1}
                            key={`policy-${id}`} to={`/policies/${policy.name}`}>
                            {policy.name}
                        </Text>
                    })}
                </Flex>
            </Flex>

            <Flex className="contact-section-footer" flexDirection={"column"} 
                justifyContent={"flex-start"} alignItems={"flex-start"}
                p={3}
            >
                <Text fontSize={24} fontWeight={"bold"}>Contact us</Text>
                <Divider marginY={2} />
                <Flex flexDirection={"column"} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Text as={"a"} w={"full"} textAlign={"start"} marginY={1} 
                        key={`contact-email`} href={`mailto:${CUSTOMER_SERVICE_ADMIN_MAIL}`}>
                        {CUSTOMER_SERVICE_ADMIN_MAIL}
                    </Text>
                    <Text as={"a"} w={"full"} textAlign={"start"} marginY={1} 
                        key={`contact-phone`} href={`tel:${CUSTOMER_SERVICE_ADMIN_PHONE}`}>
                        {CUSTOMER_SERVICE_ADMIN_PHONE}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Footer;