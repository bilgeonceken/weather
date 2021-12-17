# Weather App
  Displays sample weather forecast data from openweathermap.org.

  Temporarily live on ```http://167.99.249.197```

<img src="https://github.com/bilgeonceken/weather/blob/main/screenshots/screenshot.png" width="520">

#### CORS Problem
Since the sample openweathermap url do not send necessary headers, we will be using a flask server as proxy.
###  Start in development mode

We need to run two processes simultaneously:
#### Webpack dev server
```
$ nvm use
$ yarn
$ yarn start
```
#### Flask dev server
```
$ python3 -m venv venv
$ . venv/bin/activate
$ pip3 install -r requirements.txt
$ flask run
```

Now the app should be accessible from ```localhost:3000``` (webpack dev server) or ```localhost:5000``` (flask dev server)
###  Run Tests
```
$ yarn test
```
###  Run Storybook
```
$ yarn storybook
```
