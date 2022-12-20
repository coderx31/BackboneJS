const Player = Backbone.Model.extend();

const player1 = new Player({
    name: 'Player 1',
    team: 'Team A',
    no: '111'
});


const player2 = new Player({
    name: 'Player 2',
    team: 'Team B',
    no: '222'
});


const player3 = new Player({
    name: 'Player 3',
    team: 'Team C',
    no: '333'
});

const PlayerCollection = Backbone.Collection.extend({
    model: Player
});

const objCollection = new PlayerCollection([player1, player2, player3]);

const ProjectView = Backbone.View.extend({
    el: '#content',
    template: _.template($('#tmpl-first').html()),
    collection: objCollection,
    initialize: function() {
        this.render();
    }, render: function() {
        // console.log(this.collection.toJSON());
        // _.each(this.collection.toJSON(), function(model) {
        //     console.log(model.name);
        // })

        this.$el.html(this.template({
            collection: this.collection.toJSON()
        }));
    }
});


const mview = new ProjectView();
