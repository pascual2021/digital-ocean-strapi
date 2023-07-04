module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '81.25.112.38'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'comercial'),
        username: env('DATABASE_USERNAME', 'MC065US00003'),
        password: env('DATABASE_PASSWORD', ')B8.u8B5:hr'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
