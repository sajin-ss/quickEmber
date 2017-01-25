import Ember from 'ember';

export default Ember.Route.extend({
	model()
	{
		return ['Linus Torvaldus', 'Donald Knuth', 'Ken Thompson'];
	}
});
