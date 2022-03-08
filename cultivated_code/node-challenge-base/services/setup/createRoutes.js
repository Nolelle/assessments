const createRoutes = (app, allRouters) => allRouters.forEach(({ path, router }) => app.use(path, router))

module.exports = createRoutes;
