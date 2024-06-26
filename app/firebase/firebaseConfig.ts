// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_H14GWzJhS_Fxi0xwslWNwO_EikSA-Ec',
  authDomain: 'books-and-breakfast.firebaseapp.com',
  databaseURL: 'https://books-and-breakfast-default-rtdb.firebaseio.com',
  projectId: 'books-and-breakfast',
  storageBucket: 'books-and-breakfast.appspot.com',
  messagingSenderId: '956828958362',
  appId: '1:956828958362:web:0dd4919df6efa2d3f96923',
  measurementId: 'G-4RXE4MQX6L',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
