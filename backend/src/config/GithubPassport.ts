// Passport
import passport from 'passport';
import GitHubStrategy, { Profile } from 'passport-github';
import { getRepository } from 'typeorm';
import { User } from '../model/User';

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
        const user = await getRepository(User).find({
          where: { nickname: githubID, email: githubUrl },
        });
        if (user.length === 0) {
          const newUser = {
            nickname: githubID,
            email: githubUrl,
            type: 'github',
          };
          await getRepository(User).save(newUser);
        }
        return cb(null, user);
      } catch (e) {
        return cb(e);
      }
    },
  ));
  passport.serializeUser((user, done) => { done(null, user); });
  passport.deserializeUser((user: User, done) => { done(null, user); });
}

export default settingGithubPassport;
