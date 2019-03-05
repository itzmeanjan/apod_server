const express = require('express');
const pgDB = require('./fetch_from_psql');

const server = express();

server.get(
    '/apod', async (req, res) => {
        console.log(`\t[+]Incoming request from ${req.ip} at ${Date().toString()}`);
        await pgDB.getAll().then(
            (value) => {
                res.send(value);
            }
        );
        res.end(); // it's required to call end() on response object after operation is done.
    }
);

server.get(
    '/apodbydate/:date', async (req, res) => {
        console.log(`\t[+]Incoming request from ${req.ip} at ${Date().toString()}`);
        if(isDateFormatted(req.params.date)){
            // date is properly formatted
            await pgDB.getByDate(req.params.date).then(
                (value) => {
                    if(value){
                        res.send(value);
                    }
                    else{
                        // no record found in local database
                        res.send(
                            {
                                msg: 'noRecord'
                            }
                        );
                    }
                }
            );
            res.end(); // it's required to call end() on response object after operation is done.
        }
        else{
            // not properly formatted
            // bad format status code sent back
            res.status(400).send(
                {
                    msg: 'badDate'
                }
            ); // JSON string info sent back
            res.end(); // it's required to call end() on response object after operation is done.
        }
    }
);

server.listen( // server listening for incoming connection request
    8000, '0.0.0.0', () => {
        console.log('\n[+]APOD server listening at 0.0.0.0:8000 ...');
    }
);

// when match is found, i.e. date is properly formatted, true is returned else false is returned
function isDateFormatted(dateString){
    return /^\d{4}-\d{2}-\d{2}$/.test(dateString);
}
