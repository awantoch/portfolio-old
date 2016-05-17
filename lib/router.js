FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'homePage'});
    },
    name: "home"
});

