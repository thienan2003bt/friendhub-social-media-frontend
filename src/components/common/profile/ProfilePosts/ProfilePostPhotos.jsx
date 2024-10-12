import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProfilePostPhotos({ currentUser, userSlug }) {
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
        if(currentUser?.slug === user?.slug && photoData?.length <= 0) {
            return;
        }

        const fetchPhotoData = async () => {
            // TODO: Call API here
            setPhotoData([
                {slug: "photo-00001", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U28B2DBEAjY5TFfQPJZa98m-CS1fMdDcUA&s"},
                {slug: "photo-00001", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U28B2DBEAjY5TFfQPJZa98m-CS1fMdDcUA&s"},
                {slug: "photo-00001", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U28B2DBEAjY5TFfQPJZa98m-CS1fMdDcUA&s"},
                {slug: "photo-00001", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U28B2DBEAjY5TFfQPJZa98m-CS1fMdDcUA&s"},
                {slug: "photo-00001", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U28B2DBEAjY5TFfQPJZa98m-CS1fMdDcUA&s"},
                {slug: "photo-00001", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U28B2DBEAjY5TFfQPJZa98m-CS1fMdDcUA&s"},
                {slug: "photo-00001", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U28B2DBEAjY5TFfQPJZa98m-CS1fMdDcUA&s"},
                {slug: "photo-00001", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U28B2DBEAjY5TFfQPJZa98m-CS1fMdDcUA&s"},
                {slug: "photo-00001", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U28B2DBEAjY5TFfQPJZa98m-CS1fMdDcUA&s"},
                {slug: "photo-00001", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U28B2DBEAjY5TFfQPJZa98m-CS1fMdDcUA&s"},
                {slug: "photo-00001", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U28B2DBEAjY5TFfQPJZa98m-CS1fMdDcUA&s"},
            ]);
        };

        fetchPhotoData();
        
    }, [currentUser, user.slug]);

    useEffect(() => {
        if(!user?.slug || user?.slug !== currentUser.slug) {
            setUser(currentUser);
        }
    }, [currentUser, user])

    return (
        <Flex className="profile-post-photo" flexDirection={"column"} gap={4}  bg={"gray.dark"} p={"16px 8px"}>
            <Flex className="photos-title" justifyContent={"space-between"}>
                <Text fontSize={24} fontWeight={"bold"}>Photos</Text>
                <Button as={Link} to={`/profile/${user?.slug}/photos`}>See all photos</Button>
            </Flex>
            
            <Grid w={"full"} height={user?.slug === userSlug ? "360px" : "120px"}
                templateRows={"repeat(3, 1fr)"} templateColumns={"repeat(3, 1fr)"} gap={1}
            >
                {photoData?.length > 0
                && photoData.slice(0, user?.slug === userSlug ? 9 : 3)
                    .map((photo, id) => {
                        return (<GridItem as={Image} key={`profile-photo-${id}`} w={"120px"} height={"120px"} src={photo.url} 
                            cursor={"pointer"} _hover={{opacity: 0.7}} onClick={() => navigate(`/photos/${photo.slug}`)}
                            borderRadius={"lg"}
                        />)
                    })
                    }
            </Grid>
        </Flex>
    );
}

export default ProfilePostPhotos;