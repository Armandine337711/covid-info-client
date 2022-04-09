module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '488cfede5eb61a64bb73b3cd274a3ef6'),
  },
});
