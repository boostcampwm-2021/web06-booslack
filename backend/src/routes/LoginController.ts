import { Router } from 'express';
import passport from 'passport';

const loginRouter = Router();

loginRouter.get('/', ((req, res) => {
  res.header({ 'Access-Control-Allow-Origin': '*' });
  if (req.session) {
    res.redirect('http://localhost:3001/workspace');
  } else {
    res.redirect('http://localhost:3001/login');
  }
}));
loginRouter.get('/github/callback',
  passport.authenticate(
    'github',
    { failureRedirect: '/' },
  ),
  ((req, res) => {
    res.header({ 'Access-Control-Allow-Origin': '*' });
    res.redirect('http://localhost:3001/workspace');
  }));

export default loginRouter;
