import { Router } from 'express';
import passport from 'passport';
import * as querystring from 'querystring';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repository/UserRepository';

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

function verifyInform(username: string, password: string, password2: any) {
  if (username.length > 20 || password.length > 20) return false;
  if (password2 && password !== password2) return false;
  return true;
}

loginRouter.post('/signup', async (req, res) => {
  try {
    const { username, password, passwordTwo } = req.body;
    if (verifyInform(username, password, passwordTwo)) {
      const user = await getCustomRepository(UserRepository).find({
        where: { email: username, password },
      });
      if (user.length > 0) {
        res.redirect(`${frontUrl}/signup`);
      } else {
        const newUser = {
          nickname: '',
          email: username,
          type: 'local',
          password,
        };
        await getCustomRepository(UserRepository).save(newUser);
        res.redirect(`${frontUrl}/login`);
      }
    } else {
      res.redirect(`${frontUrl}/signup`);
    }
  } catch (e) {
    res.redirect(`${frontUrl}/signup`);
  }
});

loginRouter.post('/login', passport.authenticate('local', {
  successRedirect: `${frontUrl}/workspace`,
  failureRedirect: `${frontUrl}/login`,
  failureFlash: true,
}));

export default loginRouter;
