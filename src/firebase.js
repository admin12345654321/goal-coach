import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD-MvFmqNb2yVJ-AELSbQcQ19nDyV-O9OY',
  authDomain: 'goalcoach-183b9.firebaseapp.com',
  databaseURL: 'https://goalcoach-183b9.firebaseio.com',
  projectId: 'goalcoach-183b9',
  storageBucket: 'goalcoach-183b9.appspot.com',
  messagingSenderId: '802669690612',
  appId: '1:802669690612:web:194bb9bd2930e03e5ee8a1',
  measurementId: 'G-FVZ0GXTCGS'
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
