FlowRouter.route("/", {
    name: 'homepage',
    action: function() {
        ReactLayout.render(MainLayout, {
            content: 'Homepage'
        })
    }
});

FlowRouter.route("/test", {
    name: 'test',
    action: function() {
        ReactLayout.render(MainLayout, {
            content: <ReactQuill theme="snow"/>
        })
    }
});