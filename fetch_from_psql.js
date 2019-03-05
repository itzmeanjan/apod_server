const pg = require('pg');

module.exports = {
    getAll: async () => {
        let pool = new pg.Pool(
            {
                user: 'postgres',
                host: '127.0.0.1',
                database: 'nasa_apod',
                password: 'password',
                port: 5432
            }
        );
        let client = await pool.connect();
        data = [];
        try{
            let result = await client.query('select * from apod_data order by date desc');
            data = result.rows;
        }
        finally{
            client.release();
            pool.end();
        }
        return data;
    },
    getByDate: async (dateString) => {
        let pool = new pg.Pool(
            {
                user: 'postgres',
                host: '127.0.0.1',
                database: 'nasa_apod',
                password: 'password',
                port: 5432
            }
        );
        let client = await pool.connect();
        data = {};
        try{
            let result = await client.query('select * from apod_data where date=$1::text', [dateString]);
            data = result.rows[0];
        }
        finally{
            client.release();
            pool.end();
        }
        return data;
    }
}
