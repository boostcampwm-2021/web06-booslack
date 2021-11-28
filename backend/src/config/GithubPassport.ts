import passport from 'passport';
import GitHubStrategy, { Profile } from 'passport-github';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repository/UserRepository';
import { LOCALTYPE_GITHUB } from '../enum';

function settingGithubPassport() {
  passport.use(<passport.Strategy> new GitHubStrategy.Strategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || 'ERROR',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || 'ERROR',
      callbackURL:
        process.env.GITHUB_CALLBACK_URL || 'http://localhost:8081/api/login/github/callback',
    },
    async (accessToken: string, refreshToken: string, profile: Profile, cb: any) => {
      try {
        const { _json } = profile;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { login: githubID, html_url: githubUrl } = _json;
        const user = await getCustomRepository(UserRepository).find({
          where: { account: githubID, email: githubUrl },
        });
        if (user.length === 0) {
          const newUser = {
            account: githubID,
            email: githubUrl,
            local: LOCALTYPE_GITHUB,
            password: '',
          };
          await getCustomRepository(UserRepository).save(newUser);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return cb(null, newUser);
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return cb(null, user);
      } catch (e) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return cb(e);
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
      return done(null, false);
    }
  });
}

export default settingGithubPassport;
