import  express  from 'express';
import router from './routes';

const app = express();

app.use('/', router);

const PORT = process.env.PORT || 3000;

app.set('trust proxy', true);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);
