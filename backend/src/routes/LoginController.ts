import { Router } from 'express';
import passport from 'passport';
import * as querystring from 'querystring';

const frontUrl = process.env.GITHUB_FRONTEND_URL || 'http://localhost:3001';
const loginRouter = Router();

loginRouter.get('/', ((req, res) => {
  res.header({ 'Access-Control-Allow-Origin': '*' });
  if (req.session) {
    res.redirect(`${frontUrl}/workspace`);
  } else {
    res.redirect(`${frontUrl}/login`);
  }
}));

loginRouter.get('/github/callback',
  passport.authenticate(
    'github',
    { failureRedirect: `${frontUrl}/login` },
  ),
  ((req, res) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { user } = req.session.passport;
    const findUser = user[0];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const query = querystring.stringify(findUser);
    res.redirect(`${frontUrl}/workspace?${query}`);
  }));

loginRouter.post('/inform', (req, res) => {
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

loginRouter.get('/logout', (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) throw err;
    });
    res.redirect(`${frontUrl}/login`);
  } catch (e) {
    res.json({ message: 'session is not destroy' });
  }
});

export default loginRouter;
