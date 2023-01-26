export const pg = {
    host: process.env.PG_HOST ?? 'localhost',
    port: process.env.PG_PORT ?? '5432',
    username: process.env.PG_USER ?? '',
    password: process.env.PG_PASS ?? '',
    database: process.env.PG_DATABASE ?? ''
}

export const port = +(process.env.PORT ?? '9000');