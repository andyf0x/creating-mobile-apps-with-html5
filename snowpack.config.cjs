// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/'
  },
  // plugins: [],
  // installOptions: {},
  // devOptions: {
  //   secure: false,
  //   hostname: 'localhost',
  //   port: 80,
  //   open: 'chrome'
  //         Any installed browser, e.g., “chrome”, “firefox”, “brave”. Set “none” to disable.
  // },
  buildOptions: {
    out: 'public'
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018'
  }
}
