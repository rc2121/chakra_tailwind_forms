
import { Box } from '@chakra-ui/react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <>
            <Box display='flex' flexDirection='column' justifyContent='space-between' height='100%' pt='64px'>
                <Header />
                <Box>{children}</Box>
                <Footer />
            </Box>
        </>
    );
}

export default Layout;
