

import React, { useEffect} from 'react';

import { Slot, useRouter, useSegments } from 'expo-router';

import "../global.css";

import { AuthContextProvider, useAuth } from '../context/authContext';

import { MenuProvider } from 'react-native-popup-menu';


const MainLayout = () => {

    const { isAuthenticated } = useAuth();

    const segments = useSegments();

    const router = useRouter();


    useEffect(() => {

        if (typeof isAuthenticated == 'undefined') return;

        const inApp = segments[0] == '(app)';

        if (isAuthenticated && !inApp) {
            router.replace('home');
        } else if(isAuthenticated == false) {
            router.replace('signIn');
        }
    }, [isAuthenticated])

    return <Slot />
}

export default function RootLayout() {
    return(
        <MenuProvider>
            {/*AuthContextProvider oferece o contexto de autenticação
            para todo aplicativo*/}
            <AuthContextProvider>
                {/* MainLayout gerencia a navegação baseada na autenticação*/}
                <MainLayout />
            </AuthContextProvider>      
        </MenuProvider>
    )
}