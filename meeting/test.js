class HelloMessage extends React.Component {
        render() {
          return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
          );
        }
      }

      ReactDOM.render(React.createElement(HelloMessage, { name: "<script>console.log(test)</script>" }), react);