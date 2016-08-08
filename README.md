synchronize_text 文字同步功能
=========================
### 演示
[ http://virtools.github.io/synchronize_text/v1/index.html ]
### 設置
|設置|默認值|描述|
|---|---|---|
|text|`""`|文字|

### API
|設置|默認值|描述|
|---|---|---|
|setShared([對象1,對象2,...])|`""`|設定同步對象|
### 例

    var Text01 = ReactDOM.render(
    <InputText text={"欄位01"} />,
        document.getElementById('example01')
    );
    var Text02 = ReactDOM.render(
        <InputText text={"欄位02"}  />,
        document.getElementById('example02')
    );
    var Text03 = ReactDOM.render(
        <InputText text={"欄位03"} />,
        document.getElementById('example03')
    );
    Text01.setShared([Text02,Text03]);
    
### 許可

MIT