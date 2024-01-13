import axios from 'axios';
import { Request } from 'express';

class ExampleService {
  async searchItems(req: Request) {
    try {
      const response = await axios.get(`${process.env.MELI_API}/sites/MLA/search?q=${req.query.q}&limit=4`);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error to handle it in the controller
    }
  }

  async getItemById(req: Request) {
    try {
      const response = await axios.get(`${process.env.MELI_API}/items/${req.params.id}`);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error to handle it in the controller
    }
  }

  async getItemDescription(req: Request) {
    try {
      const response = await axios.get(`${process.env.MELI_API}/items/${req.params.id}/description`);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error to handle it in the controller
    }
  }
}

export default ExampleService;
