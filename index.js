/**
 * @format
 */

import {AppRegistry} from 'react-native';
// Redux
import {Provider} from 'react-redux';
import {store} from './stateManagement/store';

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => (
  <Provider store={store}>{App}</Provider>
));
