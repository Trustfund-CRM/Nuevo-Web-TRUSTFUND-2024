import React from 'react';
import { useRouter } from 'next/router';
import Error404 from './Error404';
import { isValidRoute } from '../routes';
import '../src/styles/globals.css'; 
function MyApp({ Component, pageProps }) {

    const router = useRouter();

    if (!isValidRoute(router.pathname)) {
        return (
            <Error404 />
        );
    }

    return <Component {...pageProps} />;
}

export default MyApp;
