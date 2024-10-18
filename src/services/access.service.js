import axios from '../configs/axios.config';

class AccessService {
    static async handleLogin(email, password) {
        const response = await axios.post(`api/v1//access/login`, { email, password });
        if(!response) {
            throw new Error("No response data");
        }
        if (response?.errorStack) {
            throw new Error(response.message);
        }

        return response;
    }
}

export default AccessService;