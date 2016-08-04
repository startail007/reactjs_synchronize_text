var InputText = React.createClass({
  componentWillMount: function () {
    this.focus = false;
  },
  handleChange: function (e) {
    this.props.onChange(e.target.value)
  },
  handleFocus: function (e) {
    this.focus = true;
  },
  handleBlur: function (e) {
    this.focus = false;
  },
  setText:function(value){
    var DOMNode = ReactDOM.findDOMNode(this.refs.theInput);
    DOMNode.value = value;
  },
  componentDidMount: function (rootNode){
      this.setText(this.props.text);
  },
  componentDidUpdate:function(prevProps, prevState, rootNode){
    if (!this.focus) {
        this.setText(this.props.text);
    }
  },
  render: function () {    
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

