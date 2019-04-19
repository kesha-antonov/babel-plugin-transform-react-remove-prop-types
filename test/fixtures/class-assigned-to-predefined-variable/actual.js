var React, propTypes, Foo;

React = require('react');
propTypes = require('prop-types');

Foo = class Foo extends React.Component {
  render() {
    return <View />;
  }

};

Foo.propTypes = {
  bar: PropTypes.string.isRequired,
}

export default Foo;
