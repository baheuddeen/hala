import User from '../../models/db/User';
import generateJWT from '../../utilities/generateJWT';
import express, { Request, Response } from 'express';

const router = express.Router();
const user = new User();


const login = async (req: Request, res: Response) => {  
  try { 
    const reqUser = await user.getUserByEmail(req.body.email);    
    const valid = req.body.password == reqUser.password;    
    if (!valid) {
      return res.status(401).json({ msg: 'wrong username or password' });
    }
    res.cookie('_jwt', generateJWT(reqUser));
    return res.status(200).json({ msg: 'logged in successfly' });
  } catch(err) {    
    return res.status(401).json({ msg: 'invalid user information' });
  }
};

router.post('/login', login);

export default router;
