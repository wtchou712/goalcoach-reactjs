import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDeoaen6u6iDFH-ssi9NQ-crjMAT1-R8es",
  authDomain: "goalcoach-3d437.firebaseapp.com",
  databaseURL: "https://goalcoach-3d437.firebaseio.com",
  projectId: "goalcoach-3d437",
  storageBucket: "",
  messagingSenderId: "148774106208"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');