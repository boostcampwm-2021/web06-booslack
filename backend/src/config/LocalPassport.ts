import passport from 'passport';
import LocalStrategy from 'passport-local';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repository/UserRepository';

function settingLocalPassport() {
  function verifyInform(username: string, password: string, password2: any) {
    if (username.length > 20 || password.length > 20) return false;
    if (password2 && password !== password2) return false;
    return true;
  }
  passport.use(<passport.Strategy> new LocalStrategy.Strategy(
    async (username:string, passwordLocal:string, done) => {
      try {
        const user = await getCustomRepository(UserRepository).find({
          where: { email: username, password: passwordLocal },
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { nickname, email, type, password } = user;
        console.log(user);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        if (!verifyInform(username, passwordLocal, password)) return done(null, false);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        if (user.length === 1) return done(null, user);
        const newUser = {
          nickname: nickname || '',
          email: username || email,
          type: 'local',
          password: passwordLocal || '',
        };
        await getCustomRepository(UserRepository).save(newUser);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return done(null, newUser);
      } catch (e) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return done(null, false);
      }
    },
  ));
  passport.serializeUser((user, done) => { done(null, user); });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await getCustomRepository(UserRepository).find({
        where: { id },
      });
      return done(null, user);
    } catch (e) {
      return done(e);
    }
  });
}

export default settingLocalPassport;
