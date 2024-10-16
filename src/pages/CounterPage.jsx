import { Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, incrementByAmount, decrementByAmount, incrementAsync, decrementAsync } from "../redux/counter/counter.reducer";


function CounterPage() {
    const counterValue = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <Flex w={"full"} flexDirection={"column"} gap={3}>
            <Text>Current value: {counterValue}</Text>

            <Flex gap={1}>
                <Button onClick={() => dispatch(increment())}>Increment by 1</Button>
                <Button onClick={() => dispatch(decrement())}>Decrement by 1</Button>
            </Flex>
            
            <Flex gap={1}>
                <Button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</Button>
                <Button onClick={() => dispatch(decrementByAmount(10))}>Decrement by 10</Button>
            </Flex>
            
            <Flex gap={1}>
                <Button onClick={() => dispatch(incrementAsync(20))}>Increment asynchronously by 20</Button>
                <Button onClick={() => dispatch(decrementAsync(20))}>Decrement asynchronously by 20</Button>
            </Flex>
           
        </Flex>
    );
}

export default CounterPage;