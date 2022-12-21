// view 1
const View1 = Backbone.View.extend({
    el: '#content',
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html('This is view 1 running');
    }
});


// view 2
const View2 = Backbone.View.extend({
    el: '#content',
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html('This is view 2 running');
    }
});


// view 3
const View3 = Backbone.View.extend({
    el: '#content',
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html('This is view 3 running');
    }
});


//const obj3 = new View2();

const ProjectRouter = Backbone.Router.extend({
    routes: {
        "": "ShowView1",
        "view2": "ShowView2",
        "view3": "ShowView3"
    },
    ShowView1: function() {
        //console.log('We are here to step 1');
        const viewObj = new View1();
    },
    ShowView2: function() {
        //console.log('We are here to step 2');
        const view2Obj = new View2();
    },
    ShowView3: function() {
       // console.log('We are here to step 3');
       const view3Obj = new View3();
    }
});

const projRouterObj = new ProjectRouter();

Backbone.history.start();