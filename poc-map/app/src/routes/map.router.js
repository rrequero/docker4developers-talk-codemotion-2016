const Router = require('koa-router');
const Poc = require('models/poc.model');
const ApiRouter = new Router({
    prefix: '/map',
});

class Map {
    static async mapView(ctx) {
        await ctx.render('map/index', {});
    }

    static async getPocs(ctx) {
        const pocs = await Poc.find().exec();
        ctx.body = pocs;
    }
}

ApiRouter.get('/', Map.mapView);

ApiRouter.get('/poc', Map.getPocs)

module.exports = ApiRouter;