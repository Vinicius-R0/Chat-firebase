import {View, Text, TextInput, Pressable, TouchableOpacity, Pressable, Alert} from 'react-native';
import React, { useRef} from 'react';
import { widhtPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octions } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Loading from '../components/loading';
import CustomKeyboardView from '../components/customKeyboard';
import { useAuth } from '../contexts/authContext';

export default function signup() {
    const router = useRouter(); //hook do expo-router para navegação
    const [ loading, setLoading ] = useState(false);
    const { signup } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        senha: '',
        username: '',
        profile: ''
    });

    const handleChamge = (field, value) => {
        setFormData(...prev => ({...prev, [field]: value}));
    };
}