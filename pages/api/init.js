const { Client } = require('pg');

const credentials = {
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    ssl: {
        rejectUnauthorized: false,
    }
};

const client = new Client(credentials);

export default async function handler(request, response) {
    await client.connect();

    client.query(`
        CREATE TABLE IF NOT EXISTS datasource (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
            name TEXT NOT NULL, 
            metadata JSONB
        )`, []).then(() => {

        client.query("INSERT INTO datasource (name, metadata) VALUES ($1, $2)", ["Postgres", credentials])
            .then(async () => {
                await client.end();
                response.status(200).json({ 'message': 'Vizual db initialized' });
            }).catch(async (err) => {
                await client.end();
                console.log('failed to write data', err);
                response.status(400).json({ 'message': 'failed to write data' });
            });


    }).catch(async (err) => {
        await client.end();
        console.log('failed to create schema', err);
        response.status(400).json({ 'message': 'failed to create schema' });
    });
}