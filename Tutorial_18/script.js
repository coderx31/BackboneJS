let Player = Backbone.Model.extend();

let player1 = new Player({
    name: 'Player 1',
    team: 'Team A',
    no: '111'
});

let player2 = new Player({
    name: 'Player 2',
    team: 'Team B',
    no: '222'
});

let player3 = new Player({
    name: 'Player 3',
    team: 'Team C',
    no: '333'
});

let PlayerCollection = Backbone.Collection.extend({
    model: Player
});

let collectionObj = new PlayerCollection();

//collectionObj.add(player1);
//collectionObj.add(player2);

// add will add the data into the end of collection (at the end of array)

//collectionObj.unshift(player1);
//collectionObj.unshift(player2);

// unshift will add the element at the beginning of array

//collectionObj.push(player1);
//collectionObj.push(player2);

// same as add method, 

// to add specific position in collection
collectionObj.add([player1, player2]);
collectionObj.add(player3, { at:1 });


// remove elements from collection

//collectionObj.remove(player1);
//collectionObj.pop(); // remove the last element
collectionObj.shift(); // remove the first element

let ProjectView = Backbone.View.extend({
    collection: collectionObj,
    initialize: function() {
        this.render();
    },
    render: function() {
        console.log(this.collection.toJSON());
    }
});


let projectViewObj = new ProjectView();