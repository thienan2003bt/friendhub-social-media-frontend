import axios from '../configs/axios.config';

class AccessService {
    static async handleLogin(username, password) {
        try {
            const response = await axios.post(`/login`, { username, password });
            if(!response) {
                throw new Error("No response data");
            }

            return response;
        } catch (error) {
            console.error("API error handling login: ", error.message);
            throw error;
        }
    }
}

export default AccessService;