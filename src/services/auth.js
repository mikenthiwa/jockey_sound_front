import jockeySoundAPI from '.';
import dotenv from 'dotenv';

dotenv.config();

export class api {
  static signUp(userCred){
    return jockeySoundAPI.post('http://localhost:4000/register', userCred);
  }
}

