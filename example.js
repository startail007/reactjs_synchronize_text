var InputText = React.createClass({
  handleChange: function (e) {
    this.props.onChangeRe(e.target.value)
  },
  handleFocus: function (e) {
    this.props.onFocusRe(this.props.index)
  },
  render: function () {
    if (this.props.index != this.props.select) {
      var t = this;
      setTimeout(function () {
        var DOMNode = ReactDOM.findDOMNode(t.refs.theInput);
        DOMNode.value = t.props.text;
      }, 0)
    }
    return (
      <input type='text' ref="theInput" onFocus = {this.handleFocus} onChange={this.handleChange} />
    )
  }
});


var Text = React.createClass({
  getInitialState: function () {
    return { index: -1, text: '資料~~' }
  },
  onChangeRe: function (value) {
    this.setState({ text: value });
  },
  onFocusRe: function (index) {
    this.setState({ index: index });
  },
  render: function () {
    var Nodes = new Array();
    for (var i = 0; i < 3; i++) {
      Nodes[i] = <InputText key = {i} type='text' text={this.state.text}  onFocusRe = {this.onFocusRe} onChangeRe = {this.onChangeRe} index = {i} select = {this.state.index} />
    }
    return (
      <div>
        {Nodes}
      </div>
    )
  }
});

ReactDOM.render(
  <Text />,
  document.getElementById('example01')
);

