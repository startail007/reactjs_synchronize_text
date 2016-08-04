var InputText = React.createClass({
  getInitialState: function () {
    return {focus: false}
  },
  handleChange: function (e) {
    this.props.onChange(e.target.value)
  },
  handleFocus: function (e) {
    this.setState({ focus: true });
  },
  handleBlur: function (e) {
    this.setState({ focus: false });
  },
  render: function () {
    if (!this.state.focus) {
      setTimeout(function () {
        var DOMNode = ReactDOM.findDOMNode(this.refs.theInput);
        DOMNode.value = this.props.text;
      }.bind(this), 0)
    }
    return (
      <input type='text' ref="theInput" onFocus = {this.handleFocus} onBlur = {this.handleBlur} onChange={this.handleChange} />
    )
  }
});


var Text = React.createClass({
  getInitialState: function () {
    return {text: '資料~~'}
  },
  onChange: function (value) {
    this.setState({ text: value });
  },
  render: function () {
    var Nodes = new Array();
    for (var i = 0; i < this.props.count; i++) {
      Nodes[i] = <InputText key = {i} type='text' text={this.state.text} onChange = {this.onChange} />
    }
    return (
      <div>
        {Nodes}
      </div>
    )
  }
});

ReactDOM.render(
  <Text count = {4}/>,
  document.getElementById('example01')
);

