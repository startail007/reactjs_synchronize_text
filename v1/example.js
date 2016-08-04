var InputText = React.createClass({
  componentWillMount: function () {
    this.focus = false;
    this.shared = []; 
      this.text = "";
  },
  handleChange: function (e) {
    this.text = e.target.value;   
    this.shared.map(function(dom,index){
        dom.setText.call(dom,this.text);
    }.bind(this))
  },
  handleFocus: function (e) {
    this.focus = true;
  },
  handleBlur: function (e) {
    this.focus = false;
  },
  setShared: function (shared) {
    this.shared = this.shared.concat(shared);
    shared.map(function(dom,index){
        dom.shared.push(this);
    }.bind(this));
  },
  setText:function(value){
      if(!this.focus){
        if(this.text != value){
            this.text = value
            var DOMNode = ReactDOM.findDOMNode(this.refs.theInput);
            DOMNode.value = this.text;        
            this.shared.map(function(dom,index){
                dom.setText(this.text);
            }.bind(this))
        }  
    }
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

var Text01 = ReactDOM.render(
  <InputText type='text' text={"欄位01"} />,
  document.getElementById('example01')
);
var Text02 = ReactDOM.render(
  <InputText type='text' text={"欄位02"}  />,
  document.getElementById('example02')
);
var Text03 = ReactDOM.render(
  <InputText type='text' text={"欄位03"} />,
  document.getElementById('example03')
);
Text01.setShared([Text02,Text03]);

