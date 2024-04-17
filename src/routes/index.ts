import bodyParser from 'body-parser';
import express from 'express';
import serviceRequest from './handlers/ServiceRequest';
import InitSource from './handlers/initSource';
import user from './handlers/User';
import cookies from 'cookie-parser';
import path from 'path';
import history from 'connect-history-api-fallback';

const dirAbs = path.resolve();
var router = express.Router();

router.use(bodyParser.json());
router.use(cookies());

router.use('/api/service-request', serviceRequest);
router.use('/api/init-source', InitSource);
router.use('/api/user', user);



router.use(history());

router.use(express.static(path.join(dirAbs, 'public')));


export default router;