# TV Guide - API

The proporse of this project is because we dont have any API services in order to get TV guide information in real time in Brazil. This API works with web scrapper that gets the information from a website, saves the data in the database and returns to the user.

This is the website: https://meuguia.tv/




## Tech Stack

**Server:** Node, Express, MongoDB, jsdom, 


## Use

You should check the channel URL and use the same URL to fecth the information.

Per example: 
To see the guide for https://meuguia.tv/programacao/canal/MGM:

```bash
  GET call to /MGM
```
    
