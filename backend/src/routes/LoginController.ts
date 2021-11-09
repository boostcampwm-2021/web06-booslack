import { Router } from 'express';
import passport from 'passport';
import * as querystring from 'querystring';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repository/UserRepository';

const frontUrl = process.env.GITHUB_FRONTEND_URL || 'http://localhost:3001';
const loginRouter = Router();

loginRouter.get('/', ((req, res) => {
  res.header({ 'Access-Control-Allow-Origin': '*' });
  res.header({ 'Access-Control-Allow-Credentials': true });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (req.session.passport) {
    res.redirect(`${frontUrl}/browsechannel`);
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
    res.redirect(`${frontUrl}/browsechannel?${query}`);
  }));

loginRouter.post('/info', (req, res) => {
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
  if (username.length === 0 || password.length === 0) return false;
  if (password2 && password !== password2) return false;
  return true;
}

function makeNickName(username: string) {
  const index = username.indexOf('@');
  return (index === -1) ? username : username.substring(0, index);
}

loginRouter.post('/signup', async (req, res) => {
  try {
    const { username, password, passwordTwo } = req.body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (!verifyInform(username, password, passwordTwo)) throw new Error('no user data verify');
    const user = await getCustomRepository(UserRepository).find({
      where: { email: username },
    });
    if (user.length > 0) throw new Error('user is exist');
    const newUser = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      nickname: makeNickName(username),
      email: username,
      type: 'local',
      password,
    };
    await getCustomRepository(UserRepository).save(newUser);
    res.redirect(`${frontUrl}/login`);
  } catch (e) {
    res.redirect(`${frontUrl}/signup`);
  }
});

loginRouter.post('/changepassword', async (req, res) => {
  try {
    const { username, password, passwordTwo } = req.body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (!verifyInform(username, password, passwordTwo)) throw new Error('no user data verify');
    const userById = await getCustomRepository(UserRepository).findOneOrFail({
      where: { email: username },
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    userById.nickname = makeNickName(username) || userById.nickname;
    userById.email = username || userById.email;
    userById.type = userById.type || 'local';
    userById.password = password || userById.password;
    await getCustomRepository(UserRepository).save(userById);
    res.redirect(`${frontUrl}/login`);
  } catch (e) {
    res.redirect(`${frontUrl}/changepassword`);
  }
});

loginRouter.post('/login', passport.authenticate('local', {
  failureRedirect: `${frontUrl}/login`,
  failureFlash: true,
}), ((req, res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { user } = req.session.passport;
  const findUser = user[0];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const query = querystring.stringify(findUser);
  res.redirect(`${frontUrl}/browsechannel?${query}`);
}));

export default loginRouter;
