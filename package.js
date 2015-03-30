Package.describe({
  name: "jackyqiu:meteor-browserify",
  summary: "Thank @island205.. A CommonJS Loader for browserify workflow [ES6 support].",
  version: "0.5.2",
  git: "https://github.com/qunxyz/meteor-browserify.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");
  api.use("mizzao:build-fetcher@0.2.0", 'client');

  api.add_files('browserify.fetch.json', 'client');
});
