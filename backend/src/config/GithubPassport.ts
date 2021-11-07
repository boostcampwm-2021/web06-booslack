import passport from 'passport';
import GitHubStrategy, { Profile } from 'passport-github';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repository/UserRepository';

function settingGithubPassport() {
  passport.use(<passport.Strategy> new GitHubStrategy.Strategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || 'ERROR',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || 'ERROR',
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    async (accessToken: string, refreshToken: string, profile: Profile, cb: any) => {
      try {
        const { _json } = profile;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { login: githubID, blog: githubUrl } = _json;
        const user = await getCustomRepository(UserRepository).find({
          where: { nickname: githubID, email: githubUrl },
        });
        if (user.length === 0) {
          const newUser = {
            nickname: githubID,
            email: githubUrl,
            type: 'github',
          };
          await getCustomRepository(UserRepository).save(newUser);
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
  passport.deserializeUser(async (user: User, done) => {
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

export default settingGithubPassport;
