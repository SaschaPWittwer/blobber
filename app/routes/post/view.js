import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return this.get("store").findRecord("blogpost", params.id, { reload: true, include: 'comments' });
    }
});