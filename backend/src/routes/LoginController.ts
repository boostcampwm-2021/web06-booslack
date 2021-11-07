import { Router } from 'express';
import passport from 'passport';
import * as querystring from 'querystring';

const loginRouter = Router();

loginRouter.get('/', ((req, res) => {
  res.header({ 'Access-Control-Allow-Origin': '*' });
  if (req.session) {
    res.redirect('http://localhost:3001/workspace');
  } else {
    res.redirect('http://localhost:3001/login');
  }
}));

loginRouter.get('/github/callback',
  passport.authenticate(
    'github',
    { failureRedirect: 'http://localhost:3001/login' },
  ),
  ((req, res) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { user } = req.session.passport;
    const findUser = user[0];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const query = querystring.stringify(findUser);
    res.redirect(`http://localhost:3001/workspace?${query}`);
  }));

loginRouter.get('/inform', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { user } = req.session.passport;
    const findUser = user[0];
    if (findUser) res.json(findUser);
  } catch (e) {
    res.json({ message: 'User is not Login' });
  }
});

export default loginRouter;
