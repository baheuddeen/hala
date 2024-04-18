import InitSource, { InitSourceType } from '../../models/db/initSource';
import express, { Request, Response } from 'express';
import verifyInitSource from '../../utilities/verifyInitSource';

const router = express.Router();
const user = new InitSource();


const create = async (req: Request, res: Response) => {
  const newInitSource = req.body as InitSourceType;
  newInitSource.ip = req.headers['x-forwarded-for']?.toString() || req.connection?.remoteAddress;
  
  console.log('new', newInitSource);
  
  try {
    await user.create(newInitSource);
    return res.json({success: true});
  } catch (err) {
    return res.status(400).send({ status: false, err: `${err}` });
  }
};

const show = async (req: Request, res: Response) => {
  const newRequest = req.body as InitSourceType;
  newRequest.ip = req.ip;
  
  console.log('new', newRequest);
  
  try {
    const requests = await user.show();
    return res.json({data: requests});
  } catch (err) {
    return res.status(400).send({ status: false, err: `${err}` });
  }
};


router.post('/create', verifyInitSource, create);
router.get('/show', show);


export default router;
