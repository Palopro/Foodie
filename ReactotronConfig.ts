import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

export const reactotron = Reactotron.configure({ name: 'Foodie App' })
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux()) //  <- here i am!
  .connect(); //Don't forget about me!

export default reactotron;
