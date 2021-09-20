const { get } = require("http");

module.exports = {
  async init(ctx, next) {
    // get model according to arg list
    const model = ctx.app.$model[ctx.params.list];
    if (model) {
      ctx.list = model;
      await next();
    } else {
      ctx.body = "no this model";
    }
  },
  async list(ctx) {
    ctx.body = await ctx.list.find({});
  },

  async get(ctx) {
    ctx.body = await ctx.list.findOne({ _id: ctx.params.id });
  },

  // More METHODs...
  async create(ctx) {
    // console.log(ctx.request.body);
    const res = await ctx.list.create(ctx.request.body);
    ctx.body = res;
  },
  async update(ctx) {
    const res = await ctx.list.updateOne(
      { _id: ctx.params.id },
      ctx.request.body
    );
    ctx.body = res;
  },
  async del(ctx) {
    const res = await ctx.list.deleteOne({ _id: ctx.params.id });
    ctx.body = res;
  },
};
