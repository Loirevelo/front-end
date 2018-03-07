// These are important and needed before anything else
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import * as compression from 'compression';


// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

const PORT = 80;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Express server
const app = express();

app.use(compression());

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const template = readFileSync(join(DIST_FOLDER, 'index.html')).toString();
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('main.server');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

// app.engine('html', (_, options, callback) => {
// 	const opts = { document: template, url: options.req.url };

// 	renderModuleFactory(AppServerModuleNgFactory, opts)
// 	.then(html => callback(null, html));
// });

app.engine('html', ngExpressEngine({
	bootstrap: AppServerModuleNgFactory,
	providers: [
	provideModuleMap(LAZY_MODULE_MAP)
	]
}));

// app.set('view engine', 'html');
// app.set('views', join(DIST_FOLDER, 'browser'));

app.set('view engine', 'html');
app.set('views', 'src')

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));


// // TODO: implement data requests securely
// app.get('/api/*', (req, res) => {
// 	res.status(404).send('data requests are not supported');
// });

// // Server static files from /browser
// app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// // All regular routes use the Universal engine
// app.get('*', (req, res) => {
// 	res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
// });

app.get('*', (req, res) => {
	res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
	console.log(`Node server listening on http://localhost:${PORT}`);
});