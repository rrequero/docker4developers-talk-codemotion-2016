const Koa = require('koa');
const koaLogger = require('koa-logger');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const views = require('koa-views');
const convert = require('koa-convert');
const serve = require('koa-static');
const mongoUri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

const koaBody = require('koa-body')();


async function onDbReady(err) {
    if (err) {
        console.error(err);
        throw new Error(err);
    }
    // set promises in mongoose with bluebird
    mongoose.Promise = bluebird;
    
    const app = new Koa();
    app.use(serve(`${__dirname}/static`));
    app.use(views(`${__dirname}/views`, {
        map: {
            html: 'ejs',
        },
    }));
    app.use(convert(koaBody));

    app.use(koaLogger());
    
    app.use(require('routes/map.router').middleware());
    var port = process.env.PORT || 8000;
    app.listen(port);
    console.log('Server started in ', port);
}

mongoose.connect(mongoUri, onDbReady);