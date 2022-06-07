import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

export const reactotron = Reactotron.configure({ name: 'Foodie App' })
  .useReactNative()
  .use(reactotronRedux())
  .connect();
