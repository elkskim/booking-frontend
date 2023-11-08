import  APIService  from './api-service';

class TestService {
    testData = []
    static instance;

    static createInstance() {
      var testService = new TestService()
      return testService
    }

    static getInstance() {
      if (!this.instance) {
        this.instance = this.createInstance()
      }
      return this.instance
    }

    async createResources() {
        for (let i = 0; i < 2; i++) {
          try {
            const response = await APIService.postResource({
              id: 0,
              name: `testresource${i}`,
              quantity: i * 2,
            });
            this.testData.push(response); // Store the response if needed
          } catch (error) {
            console.error('Error creating Resource:', error);
          }
        }
      }
    }
const testService = TestService.getInstance()
export default testService

