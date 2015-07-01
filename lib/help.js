function printHelp() {
  console.log();
  console.log('Usage:   gistploy              -- deploy index.html from current directory');
  console.log('         gistploy --public     -- make the gist public');
  console.log('         gistploy --help --h   -- shows this help');
}

module.exports = function(args) {
  if (args._.indexOf('help') > -1 || args.help || args.h
    || (args.h && args.e && args.l && args.p) ) {

    printHelp();
    process.exit();

  }
}