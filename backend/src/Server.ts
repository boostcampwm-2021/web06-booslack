import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import express, { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import logger from './shared/Logger';
import BaseRouter from './routes';
import settingGithubPassport from './config/GithubPassport';
import loginRouter from './routes/LoginController';

const app = express();
const { BAD_REQUEST } = StatusCodes;
/** **********************************************************************************
 *                              Set basic express settings
 ********************************************************************************** */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const options: cors.CorsOptions = {
  origin: 'http://localhost:3001',
  credentials: true,
};
app.use(cors(options));

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

// Add APIs
app.use('/api', BaseRouter);

// Session
const { SECRET_CODE } = process.env;

app.use(session({
  secret: SECRET_CODE || 'ERROR',
  cookie: {
    maxAge: 60 * 60 * 3,
  },
  resave: true,
  saveUninitialized: true,
}));

// Passport
settingGithubPassport();
app.use(passport.initialize());
app.use(passport.session());
app.use('/login', loginRouter);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars

app.use((err: Error, req: Request, res: Response) => {
  logger.err(err, true);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

/** **********************************************************************************
 *                              Serve front-end content
 ********************************************************************************** */

const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));
app.get('*', (req: Request, res: Response) => {
  res.sendFile('index.html', { root: viewsDir });
});

// Export express instance
export default app;
