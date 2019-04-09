# apod_server
A simple Express App to be used as API endpoint to facilitate query of Astronomy Picture of the Day

## Documentation ::
  
  - This express app fetches data from a local PostgreSQL database, which is already set up and inflated with data.
  - It's listening at **0.0.0.0** in port number **8000**.
  - So that clients present in local network can access this express server easily by typing in *IPAddress:PortNumber*, which is allocated to that computer, which is running this app.
  - It has two API endpoints, where it listens for incoming requests.
  - If we query at **/apod**, we'll get a list of all available records in databse.
  - Querying at **/apodbydate/:date** will result into receiving of [Astronomy Picture of the Day](https://apod.nasa.gov/apod/), where the day is defined in Request Parameter *date* in form of **YYYY-MM-DD**.
  - And ofcourse all the responses sent back from server, are JSON.
  - Well if a record is not found for a certain date, then ```{"msg": "noRecord"}``` is sent back to client.
  - If a date is not properly formatted, then ```{"msg": "badDate"}``` is sent back to client.
  - In *fetch_from_psql.js*, I've created a Javascript Object which is imported in apod_server.js.
  - So, there're two methods *getAll()* and *getByDate()* which pulls data from local PostgreSQL database.
  - *getAll()* returns list of all records, where dates are descending.
  - *getByDate()* returns only the APOD for a certain requested date.
  - And that's it ;)
  
## How to Run ?

  - To run this app on you computer first clone this repo.
    
    ```bash
    >> git clone https://github.com/itzmeanjan/apod_server.git
    ```
  
  - Make sure you've latest version of [NodeJS](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) installed on your system.
  - Download all project dependencies by running, which will download all dependencies by reading *package.json*.
    
    ```bash
    >> npm install
    ```
    
  - Then run [apod_server.js](https://github.com/itzmeanjan/apod_server/blob/master/apod_server.js).
    
    ```bash
    >> node apod_server.js
    ```
    
  - So the server is up and running now.
  
  - To test, head to your browser, and type *IPAddress:PortNumber/apod*, and you see a lot of data.
  
  - Here IPAddress is IP of your computer in localnetwork, which is running the express app.
  
  - PortNumber can be anything greater than 1024. I set 8000, just put your choice.
  

## How to get Data ?

  So I've opened up another [repo](https://github.com/itzmeanjan/apod_fetcher), which will help you in fetching **Astronomy Picture of the Day** from NASA.


## Courtesy ::
  Last but not least, thanks to [NASA](https://www.nasa.gov/) for providing us with such a great service([NASA APOD](https://apod.nasa.gov/apod/)), which could be used as a great resource for learning thing related to Astronomy. 
  Thanks to [NodeJS](https://nodejs.org/en/), [NPM](https://www.npmjs.com/) and [ExpressJS](http://expressjs.com/) for providing such a great ecosystem, which has made it really easy to write web apps/ API endpoints, with few lines of code.
  Finally thanks to [PostgreSQL](https://postgresql.org/).


Hope it was helpful :)
