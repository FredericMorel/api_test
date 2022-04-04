module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '207a08fb32f776779c1225277bfcdf37'),
  },
});
