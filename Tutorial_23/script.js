const Player = Backbone.Model.extend({
    defaults: {
        name: 'Shenal Fernando',
        team: 'Sri Lanka',
        no: 10,
    }
});

const player = new Player({
    name: 'Suresh Raina',
    team: 'India',
    no: 13
});


const player2 = new Player({
    name: 'Yuvraj Singh',
    team: 'India',
    no: 15
});

//view

const View = Backbone.View.extend({
    el: '#content',
    model: player2,
    template: Handlebars.compile($('tmpl-handlerbar').html()),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

const view = new View();