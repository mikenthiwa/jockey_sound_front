import axios from 'axios';

export class api {
  static feed(){
    return axios.get('https://api.mixcloud.com/spartacus/feed/');
  }
}