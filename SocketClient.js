import io from 'socket.io-client';
import {SERVER_API} from 'react-native-dotenv';

export default class Socket {
  socket;

  constructor() {
    this.socket = io.connect(SERVER_API);

    // TODO: add socket on methods here to listen to events from server
  }

  // TODO: create socket emmit methods here
}
