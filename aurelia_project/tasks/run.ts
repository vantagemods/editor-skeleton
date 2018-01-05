import * as gulp from 'gulp';
import * as browserSync from 'browser-sync';
import * as historyApiFallback from 'connect-history-api-fallback/lib';
import {CLIOptions} from 'aurelia-cli';
import * as project from '../aurelia.json';
import build from './build';
import watch from './watch';

let serve = gulp.series(
  build,
  done => {
    browserSync({
      online: false,
      open: false,
      port: 9050,
      notify: false,
      logLevel: 'silent',
      server: {
        baseDir: [project.platform.baseDir],
        middleware: [historyApiFallback(), function(req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          next();
        }]
      }
    }, function (err, bs) {
      if (err) return done(err);
      let urls = bs.options.get('urls').toJS();
      log('Editor available in Vantage');
      done();
    });
  }
);

function log(message) {
  console.log(message);
}

function reload() {
  log('Refreshing the editor');
  browserSync.reload();
}

let run;

if (CLIOptions.hasFlag('watch')) {
  run = gulp.series(
    serve,
    done => { watch(reload); done(); }
  );
} else {
  run = serve;
}

export default run;
