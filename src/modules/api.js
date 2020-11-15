const HelpScout = require('helpscout-mailbox-api');

// %%APP_ID%% is our openweathermapp appid which we store in an environment variable
//f09f9fd35e1d61a51ed2b4a1ec6e10cf
//%%APP_ID%%
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather?appid=f09f9fd35e1d61a51ed2b4a1ec6e10cf';


export default function fetchMailBoxData() {
    console.log(process.env.NODE_ENV);
/*
    const helpscout = new HelpScout({
        clientId: 'CUFgxbQTS8mb2Ei88s8EN9YR7wt7NWjr',
        clientSecret: 'x90sXiiknUXymcst20POSqktDJyxa4ne',
        authenticationFlow: 'OAuth2'
    });

    const authorizeUri = helpscout.generateAuthorizationUri();
    
    //const tokens = await helpscout.getTokens(code);

(async () => {
    await helpscout.getTokens(authorizeUri);
    // all of the script.... 

})();

helpscout.on('tokens', tokens => {
    // Save the new tokens somewhere in your database and use them next time.


    //
    console.log(tokens);

    helpscout.setCredentials("Got token : " + tokens);



 });
 */

 const url = "https://api.openweathermap.org/data/2.5/weather?appid=f09f9fd35e1d61a51ed2b4a1ec6e10cf&units=metric&lang=en&lat=40.7143528&lon=-74.0059731";

 return fetch( url )
 .then(response => response.json())
 .then(weatherData => {
   // we only care about a bit of the data
   const weather = {};
   weather.temp = weatherData.main.temp;
   weather.wind = weatherData.wind.speed;
   weather.conditions = weatherData.weather[0].id;
   weather.icon = weatherData.weather[0].icon;

   return weather;
 });

}