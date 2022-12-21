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

const ProjectRouter = Backbone.Router.extend({
    // routes:{
    //     "": "showView1",
    //     "view2/:viewid/(:msg)": "showView2",
    //     "view3(/:view3id)": "showView3" // paranthesis will make the parameter optional
    // },
    routes: {
        "": "showView1",
        "view2": "showView2",
        "view3": "showView3"
    },
    showView1: function() {
        const view1 = new View1();
    },
    showView2: function(viewid, msg) {
        console.log(viewid);
        console.log(`message: ${msg}`);
        const view2 = new View2();
    },
    showView3: function(view3id) {
        console.log(`passed params: ${view3id}`);
        const view3 = new View3();
    }
});


const projRouterObj = new ProjectRouter();

Backbone.history.start();