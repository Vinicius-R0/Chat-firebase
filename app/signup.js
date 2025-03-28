import {View, Text, TextInput, Pressable, TouchableOpacity, Pressable, Alert} from 'react-native';
import React, {useState, useRef} from 'react';
import { widhtPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octions } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Loading from '../components/loading';
import CustomKeyboardView from '../components/customKeyboard';
import { useAuth } from '../contexts/auth'; 