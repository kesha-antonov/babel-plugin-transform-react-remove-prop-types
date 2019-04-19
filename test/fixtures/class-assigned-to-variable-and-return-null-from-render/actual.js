var React, propTypes;

React = require('react');
propTypes = require('prop-types');

var Foo = class Foo extends React.Component {
  render() {
    return null;
  }

};

Foo.propTypes = {
  bar: PropTypes.string.isRequired,
}

export default Foo;
