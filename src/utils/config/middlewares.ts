import { bodyParser, bodyUrlEncoded, corss } from '../middlewares';

export default (app): void => {
  app.use(corss);
  app.use(bodyParser);
  app.use(bodyUrlEncoded);
};