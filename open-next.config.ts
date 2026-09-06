// OpenNext Cloudflare Workers configuration
// Install @opennextjs/cloudflare before deploying: npm install -D @opennextjs/cloudflare
const config = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
};

export default config;
