Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = () => { };

const specs = Object.keys(__karma__.files)
  .filter(p => /\.spec\.(.*\.)?js$/.test(p))
  .filter(p => '.js' === p.slice(-3) && [
    '/base/build/',
  ].reduce((k, bp) => k || (p.substr(0, bp.length) === bp), false));

SystemJS.config({
  baseURL: 'base/build',
  map: Object.assign([
    'animations',
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
  ].reduce((map, module) => Object.assign(map, {
    [`@angular/${module}/testing`]:
      `ng:${module}/bundles/${module}-testing.umd.js`,
  }), {}), {}),
  packages: {
    'testing': {
      main: 'index.js',
      defaultExtension: 'js',
    },
  },
  paths: {
    'ng:': 'npm:@angular/',
  },
});

System.import('system.conf.js')
  .then(() => Promise
    .all([
      '@angular/core/testing',
      '@angular/platform-browser-dynamic/testing',
    ].map(m => System.import(m))).then(([core, browser]) => core
      .TestBed
      .initTestEnvironment(browser.BrowserDynamicTestingModule,
                           browser.platformBrowserDynamicTesting())))
  .then(() => Promise
    .all(specs.map(m => System.import(m).catch(e => console.error(e.message))))
    .then(__karma__.start, __karma__.error)
    .catch(e => console.error(e.message)))
  .catch(e => console.error(e.message));
