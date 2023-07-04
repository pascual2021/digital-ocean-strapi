module.exports = ({ env }) => ({
    // ...
    graphql: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME', 'dtn0j2bls'),
        api_key: env('CLOUDINARY_KEY', '485392695668716'),
        api_secret: env('CLOUDINARY_SECRET', 'wehQBEkGQ5S0SGU8JL1ek9AObpY'),
      },
    },
    // ...
  });
