import Route from '@ember/routing/route';

export default Route.extend({
    session: service(),
    beforeModel(transition) {
        if (!this.get("session.isAuthorized")) {
            transition.abort();
        }
    },
});
