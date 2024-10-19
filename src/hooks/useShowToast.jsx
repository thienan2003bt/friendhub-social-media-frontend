import { useToast } from "@chakra-ui/react";

function useShowToast() {
    const toast = useToast();

    const showToast = (title, description, status = "success") => {
        toast({
            title: title,
            description: description,
            status: status,
            duration: 5000,
            isClosable: true,
            position: "bottom-right"
        });
    }

    return showToast;
}

export default useShowToast;