## DOCUMENTATION ##

- [Github repository](https://github.com/Y0D4RK/flickhouse) 
- [Trello](https://trello.com/b/ByGwh7Nm/flickhouse)
- [Screenshot Welcome](https://ibb.co/mtxxrvY)
- [Screenshot Question](https://ibb.co/PZs7GPx)
- [Screenshot GameOver](https://ibb.co/BsKSc6w)

**Environment**
- node v14.5.4
- npm v6.14.10
- yarn v1.2.13
- react v^17.0.1

**Main modules**
- React, ReactDOM
- Webpack
- Babel
- Loader (-css,-sass,-html)
- Dotenv
- Eslinter

**How to run app ?**

1. Go create an account [HERE](https://www.themoviedb.org/) to get `_YOUR_API_KEY_`
2. Clone project 
```bash
@:> git clone git@github.com:Y0D4RK/flickhouse.git
```
3. Let's go inside
```bash
@:> cd flickhouse && yarn install
@:> echo "API_TMBD_KEY=_YOUR_API_KEY_" >> .env
```
4. Start the local Webpack Dev Server (on port `8080`):
```bash
@:> yarn start
```
5. Open your fav browser and copy/past URL `http://localhost:8080`

**Other available script**
- `yarn start` : start local
- `yarn build` : build `bundle.js` file about env prod
- `yarn test` : exec js test
- `yarn lint` : exec js linter

<! YOJNE !>
