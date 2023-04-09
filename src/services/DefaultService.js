/** Dependencies */
import Client from './BaseService';

const client = new Client(process.env.BASE_URL);

class DefaultService {
  // eslint-disable-next-line class-methods-use-this
  getUserInfo = () => client.get('/UserInfo');
}

export default new DefaultService();
