let Player = Backbone.Model.extend({
    defaults: {
        name: 'Shenal',
        team: 'Team null',
        no: 10
    }
});

let player1 = new Player({
    name: 'Suresh',
    team: 'India',
    no: 13
});

let player2 = new Player({
    name: 'Yuraj',
    team: 'India',
    no: 15
});

let player3 = new Player({
    name: 'Kapil',
    team: 'India',
    no: 20
});

let MyCollection = Backbone.Collection.extend({
    model: Player
});

let myCollectionObj = new MyCollection([player1, player2, player3]);

let ProjectView = Backbone.View.extend({
    collection: myCollectionObj,
    initialize: function() {
        this.render();
    },
    render: function() {
        console.log('project view created');
        //console.log(this.collection.toJSON());
        _.each(this.collection.toJSON(), function(model) {
            console.log(`Name: ${model.name} Team: ${model.team} and number: ${model.no}`);
        })
    }
});

let projectViewObj = new ProjectView();