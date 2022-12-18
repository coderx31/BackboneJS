let MyModel = Backbone.Model.extend({});

        let mymodel = new MyModel({
            name: 'Shenal Fernando',
            team: 'Team Null',
            age: 23
        });

        const mymodelObj2 = mymodel.clone();

        let MyView = Backbone.View.extend({
            model: mymodelObj2,
            initialize: function() {
                this.render();
            },
            render: function() {

                //mymodelObj2.set("name", "Shenal");
                // mymodelObj2.set({
                //     name: 'Coderx',
                //     age: 26
                // });

                // if(mymodelObj2.hasChanged()) {
                //     // previous values
                //     console.log(`previous value for name - ${this.model.previous('name')}`);
                //     console.log(`previous value for age - ${this.model.previous('age')}`);
                //     console.log(this.model.previousAttributes());
                //     console.log(mymodelObj2.changedAttributes());
                // } else {
                //     console.log('value not changed');
                // }
                // console.log(this.model.toJSON());
                // console.log('Online web tutor view is running...');

                this.listenTo(this.model, 'change', this.modelChange)
            },
            modelChange: function() {
                console.log('model changed');
                console.log(this.model.changedAttributes());
            }
        });

        let myViewObj = new MyView();