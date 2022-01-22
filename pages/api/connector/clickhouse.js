const { ClickHouse } = require('clickhouse');

export default async function handler(request, response) {

    const clickhouse = new ClickHouse({
        url: request.body.db.host,
        port: request.body.db.port,
        debug: false,
        basicAuth: null,
        isUseGzip: false,
        format: "json",
        raw: false,
        config: {
            session_timeout: 60,
            database: request.body.db.database
        }
    });

    clickhouse.query(request.body.query)
        .then(res => {
            return response.status(200).json(res.rows);
        })
        .catch(err => {
            console.log('fetching data failed', err);
            return response.status(500).json({ err: "failed to fetch data for panel" });
        });
}