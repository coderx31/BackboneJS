let FModel = Backbone.Model.extend({ // parent model
    initialize: function() {
        console.log('Parent model is running');
    },
    playing: function() {
        console.log('parent playing method');
    }
});

//let mymodel = new FModel();


let ChildModel = FModel.extend({
    childMethod: function() {
        console.log('child method called');
    },
    playing: function() {
        console.log('child play method');
    }
}); // child model

let childModel = new ChildModel();
