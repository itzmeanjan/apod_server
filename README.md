# apod_server
A simple Express App to be used a API endpoint to facilitate query of Astronomy Picture of the Day

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
  - In fetch_from_psql.js, I've created a Javascript Object which is imported in apod_server.js.
  - So, there're two methods *getAll()* and *getByDate()* which pulls data from local PostgreSQL database.
  - *getAll()* returns list of all records, where dates are descending.
  - *getByDate()* returns only the APOD for a certain requested date.
  - And that's it ;)
  


Hope it was helpful :)
