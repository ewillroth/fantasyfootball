# fantasyfootball

I am the commissioner of a 10 team PPR superflex dynasty fantasy football league. After building a tool to help reformat schedules, I decided to create this repo to store that and other tools to help me manage and/or win the league.

## scheduleFormatter.js

myfantasyleague.com requires manually created schedules to be entered in a specific format (visibile at the bottom of this file). I built this tool to take a group of arrays (copied from a google sheet) containing each team's weekly matchup and generate a schedule in the appropriate format to be entered into the site. Currently the tool just console.logs the schedule to index.html but I will be creating a front-end some time in the next year to allow me to input the matchups rather than hard-code them.