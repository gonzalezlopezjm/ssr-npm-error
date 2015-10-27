MainLayout = React.createClass({
    render() {
        var homepatePath = FlowRouter.path('homepage');
        var testPath = FlowRouter.path('test');

        return <div>
            <header>
                <a href={homepatePath}>Home</a> -
                <a href={testPath}>Test</a>
            </header>
            <main>
                {this.props.content}
            </main>
            <footer>
                Footer
            </footer>
        </div>
    }
});