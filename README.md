# Scoreboard

## Data Structure
```
players:
  name: "Yonatan"
  avatar: "https://www.imgur.com/asdlkfj"
  rounds:
    {roundKey}: true
    {roundKey}: true
    {roundKey}: true
    {roundKey}: true
    {roundKey}: true

games:
  name: "Rocket League"
  icon: "https://www.slkjdf"
  platform: "Playstation 4"
  genre: "Sports"
  color: "#ABCDEF"
  rounds:
    {roundKey}: true
    {roundKey}: true
    {roundKey}: true
    {roundKey}: true
    {roundKey}: true

rounds:
  gameKey: {gameKey}
  tournamentKey: {tournamentKey}
  date: {Date}
  players:
    {userKey}:
      position: 1
    {userKey}:
      position: 0.666
    {userKey}:
      position: 0.333
    {userKey}:
      position: 0

tournament:
  {tournamentKey}:
    dateStart: {Date}
    dateEnd: {Date}
    rounds:
      {roundKey}: true
      {roundKey}: true
      {roundKey}: true
      {roundKey}: true
      {roundKey}: true
```
