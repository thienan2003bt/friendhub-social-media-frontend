import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {mode} from '@chakra-ui/theme-tools'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

const styles = {
    global: (props) => ({
        body: {
            color: mode("gray.800", "whiteAlpha.900")(props),
            bg: mode("gray.100", "#18191A")(props),
        }
    })
}

const configs = {
    initialColorMode: "dark",
    useSystemColorMode: true,
}

const colors = {
    gray: {
        light: "#616161",
        dark: "#1e1e1e"
    }
}

const theme = extendTheme({configs, styles, colors})

createRoot(document.getElementById('root')).render(
    <>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.configs.initialColorMode}/>
            <App />
        </ChakraProvider>
    </>
)
