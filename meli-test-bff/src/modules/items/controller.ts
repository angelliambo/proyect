import { Request, Response } from 'express';
import Service from './service';

class Controller {
  private service: Service;

  constructor() {
    this.service = new Service();
  }

  async searchItems(req: Request, res: Response) {
    try {
      const data = await this.service.searchItems(req);
      res.json(data);
    } catch (error) {
      console.error('Error! searchItems.')
      res.status(500).json({ error: 'Error al obtener los datos.' });
    }
  }

  async getItemById(req: Request, res: Response) {
    try {
      const data = await this.service.getItemById(req);
      res.json(data);
    } catch (error) {
      console.error('Error! getItemById.')
      res.status(500).json({ error: 'Error al obtener los datos.' });
    }
  }

  async getItemDescription(req: Request, res: Response) {
    try {
      const data = await this.service.getItemDescription(req);
      res.json(data);
    } catch (error) {
      console.error('Error! getItemDescription.')
      res.status(500).json({ error: 'Error al obtener los datos.' });
    }
  }
}

export default Controller;
