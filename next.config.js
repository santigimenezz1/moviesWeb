// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/app/detalle/:id',
          destination: '/app/detalle/[id]',
        },
      ];
    },
  };
  