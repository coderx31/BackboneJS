const FModel = Backbone.Model.extend();

const FCollection = Backbone.Collection.extend({
    model: FModel
});

const player1 = new FModel({
    name: 'Rickey Ponting',
    team: 'Australia',
    no: 1
});

const player2 = new FModel({
    name: 'Sachin',
    team: 'India',
    no: 4
});

const player3 = new FModel({
    name: 'Chris Gayle',
    team: 'West Indies',
    no: 9
});

const fcollection = new FCollection();
fcollection.add([player1, player2, player3]);

const FView = Backbone.View.extend({
    collection: fcollection,
    initialize: function() {
        this.render();
    },
    render: function() {
        // console.log('running');
        // console.log(this.collection.toJSON());

        // _.each -> iterate over the collection
        // _.each(this.collection.toJSON(), function(model) {
        //     console.log(`${model.name}: ${model.team}`);
        // });

        // _.where -> fetch all the data where condition is fulfilled
        // const playerData = _.where(this.collection.toJSON(), { no: 1 });
        // console.log(playerData);

        // _.findWhere -> it will first value of the collection value which fulfilled the condition
        // const playerData = _.findWhere(this.collection.toJSON(), { no: 1 });
        // console.log(playerData);


        // _.find -> return the first value
        // const playerData = _.find(this.collection.toJSON(), function(model) {
        //     if(model.no > 1) {
        //         return model.name
        //     }
        // });

        // console.log(playerData);

        // _.filter -> return all the values
        // const playerData = _.filter(this.collection.toJSON(), function(model) {
        //     if(model.no > 1) {
        //         return model.name
        //     }
        // });

        // console.log(playerData);


        // _.pluck -> return array of names
        const playerData = _.pluck(this.collection.toJSON(), "name");
        console.log(playerData);
    }
});

const fview = new FView();