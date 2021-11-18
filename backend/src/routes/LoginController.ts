/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Router } from 'express';
import passport from 'passport';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repository/UserRepository';

const frontUrl = process.env.GITHUB_FRONTEND_URL || 'http://localhost:3001';
const loginRouter = Router();

loginRouter.get('/', (req, res) => {
  res.header({ 'Access-Control-Allow-Origin': '*' });
  res.header({ 'Access-Control-Allow-Credentials': true });
  // @ts-ignore
  if (req.session.passport) {
    res.redirect(`${frontUrl}/workspacelist`);
  } else {
    res.redirect(`${frontUrl}/login`);
  }
});

loginRouter.get(
  '/github/callback',
  passport.authenticate('github', {
    successRedirect: `${frontUrl}/workspacelist`,
    failureRedirect: `${frontUrl}/login`,
  }),
);

loginRouter.get('/info', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const user = req.session.passport?.user;
    res.json(user ? user[0] : user);
  } catch (e) {
    res.json({ message: 'Error while checking login status.' });
  }
});

loginRouter.get('/logout', (req, res) => {
  try {
    req.logout();
    res.clearCookie('connect.sid', { path: '/', domain: 'localhost' });
    req.session.destroy((err) => {
      res.json({ url: `${frontUrl}/login` });
    });
  } catch (e) {
    res.json({ message: 'Session is not destroyed.' });
  }
});

function verifyInform(username: string, password: string, password2: any) {
  if (username.length > 20 || password.length > 20) return false;
  if (username.length === 0 || password.length === 0) return false;
  return !(password2 && password !== password2);
}

function makeNickName(username: string) {
  const index = username.indexOf('@');
  return index === -1 ? username : username.substring(0, index);
}

loginRouter.post('/signup', async (req, res) => {
  try {
    const { username, password, passwordTwo } = req.body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (!verifyInform(username, password, passwordTwo)) {
      throw new Error('Given data does not meet the requirements. ');
    }
    const user = await getCustomRepository(UserRepository).find({
      where: { account: username },
    });
    if (user.length > 0) throw new Error('Given username already exists.');
    const newUser = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      account: makeNickName(username),
      email: username,
      local: 1,
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
      where: { account: username },
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    userById.account = makeNickName(username) || userById.account;
    userById.email = username || userById.email;
    userById.password = password || userById.password;
    await getCustomRepository(UserRepository).save(userById);
    res.redirect(`${frontUrl}/login`);
  } catch (e) {
    res.redirect(`${frontUrl}/changepassword`);
  }
});

loginRouter.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: `${frontUrl}/workspacelist`,
    failureRedirect: `${frontUrl}/login`,
    failureFlash: true,
  }),
);

export default loginRouter;
