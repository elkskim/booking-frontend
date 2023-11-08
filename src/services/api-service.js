
import axios from 'axios';

class APIService {
    static instance;

    static createInstance() {
      var apiService = new APIService()
      return apiService
    }

    static getInstance() {
      if (!this.instance) {
        this.instance = this.createInstance()
      }
      return this.instance
    }
    
       async getResources(){
        try {
            const response = await axios.get('https://localhost:7212/api/Resources');
            return response.data;
          } catch (error) {
            console.error('GET request error:', error);
            throw error;
          }
        }
        
        async postResource(data){
            try {
                const response = await axios.post('https://localhost:7212/api/Resources', data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                    );
                return response.data
            }
            catch (error) {
                console.error(`POST request error:`, error)
                throw error
            }
        }
        
    
}

const apiService = APIService.getInstance()
export default apiService