import axios from '../configs/axios.config';

class AccessService {
    static async handleLogin(email, password) {
        try {
            const response = await axios.post(`api/v1//access/login`, { email, password });
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