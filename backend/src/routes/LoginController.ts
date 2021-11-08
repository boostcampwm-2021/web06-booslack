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

loginRouter.get('/info', (req, res) => {
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
    req.logout();
    res.clearCookie('connect.sid', { path: '/', domain: 'localhost' });
    req.session.destroy((err) => {
      res.redirect(`${frontUrl}/login`);
    });
  } catch (e) {
    res.json({ message: 'session is not destroy' });
  }
});

loginRouter.post('/signup', passport.authenticate('local', {
  failureRedirect: `${frontUrl}/login`,
  failureFlash: true,
}), (req, res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { user } = req.session.passport;
  const findUser = user[0];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const query = querystring.stringify(findUser);
  if (query === '') res.redirect(`${frontUrl}/workspace`);
  res.redirect(`${frontUrl}/workspace?${query}`);
});

loginRouter.post('/login', passport.authenticate('local', {
  successRedirect: `${frontUrl}/workspace`,
  failureRedirect: `${frontUrl}/login`,
  failureFlash: true,
}));

export default loginRouter;
