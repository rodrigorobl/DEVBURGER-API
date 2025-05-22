module.exports = {
  dialect: 'postgres',
  host: 'ep-delicate-snowflake-a54s0f5z.us-east-2.aws.neon.tech',
  port: 5432,
  username: 'neondb_owner',
  password: 'npg_M2LjapmTJ4rI',
  database: 'devburger',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
};
