/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import passport from 'passport';
import LocalStrategy from 'passport-local';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repository/UserRepository';

function settingLocalPassport() {
  function verifyInform(username: string, password: string, password2: any) {
    if (username.length > 20 || password.length > 20) return false;
    return !(password2 && password !== password2);
  }
  passport.use(
    <passport.Strategy> new LocalStrategy
      .Strategy(async (username: string, passwordLocal: string, done) => {
        try {
          const user = await getCustomRepository(UserRepository).find({
            where: { account: username, password: passwordLocal },
          });
          // @ts-ignore
          const { password } = user;
          if (!verifyInform(username, passwordLocal, password)) return done(null, false);
          if (user.length === 1) return done(null, user);
          return done(null, false);
        } catch (e) {
          return done(null, false);
        }
      }),
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });
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
