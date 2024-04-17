import ServiceRequest, { ServiceRequestType } from '../../models/db/ServiceRequest';
import express, { Request, Response } from 'express';
import verifyRequest from '../../utilities/verifyRequest';

const router = express.Router();
const user = new ServiceRequest();


const create = async (req: Request, res: Response) => {
  const newRequest = req.body as ServiceRequestType;
  newRequest.ip = req.ip;
  
  console.log('new', newRequest);
  
  try {
    await user.create(newRequest);
    return res.json({success: true});
  } catch (err) {
    return res.status(400).send({ status: false, err: `${err}` });
  }
};

const show = async (req: Request, res: Response) => {
  const newRequest = req.body as ServiceRequestType;
  newRequest.ip = req.ip;
  
  console.log('new', newRequest);
  
  try {
    const requests = await user.show();
    return res.json({data: requests});
  } catch (err) {
    return res.status(400).send({ status: false, err: `${err}` });
  }
};


router.post('/create', verifyRequest, create);
router.get('/show', show);


export default router;
