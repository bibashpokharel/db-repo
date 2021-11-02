const path = require('path');
module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'bibash',
  password: 'bibash',
  database: 'sakchha_migration',
  entities: [path.resolve(__dirname, '..') + '/**/**/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['migrations/*.{js,ts}'],
  cli: {
    migrationsDir: 'migrations/',
  },
};
