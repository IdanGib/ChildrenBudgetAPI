import { Api } from '@/api/api';
import { apiConfig } from './config/api.config';

const main = async () => {
    const api = new Api(apiConfig);
    await api.run();
}

void main();


