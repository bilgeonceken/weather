# Weather App
  Displays sample weather forecast data from openweathermap.org.

#### CORS Problem
Since the sample openweathermap url do not send necessary headers, we will be using a flask server as proxy.
###  Start in development mode
#### Process 1
```
$ python3 -m venv venv
$ . venv/bin/activate
$ pip3 install -r requirements.txt
$ flask run
```
#### Process 2
```
$ nvm use
$ yarn
$ yarn start
```

Now the app is accessible from ```localhost:3000``` (webpack dev server) or ```localhost:5000``` (flask dev server)
###  Run Tests
```
$ yarn test
```
###  Run Storybook
```
$ yarn storybook
```
