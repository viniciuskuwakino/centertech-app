export default {
    client: 'sqlite3',
    connection: {
        filename: './src/main/database/mydb.sqlite3',
        charset: 'utf8mb4',
    },
    migrations: {
        directory: `${__dirname}/src/main/database/migrations`
    },
    useNullAsDefault: true
}
