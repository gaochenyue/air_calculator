// JavaScript Document../WebService
Ext.namespace('math');

var Service_url="Service.asmx";//服务器地址,在不同环境测试时做相应修改  http://localhost:1744/Air%20Calculator%20Website/Service.asmx
var result=0;
var varlist="";//变量列表,字符串格式“name|type|value&|name2|type2|value2&……“
var historylist="";//历史记录列表,字符串格式“name1|date1|time1&name2|date2|time2……“
var xmlhttp;
function createXmlhttp(){
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
			}
			else if(window.ActiveXObject){
			try{
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			}catch(e){
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
		if(!xmlhttp){
		window.alert("Your broswer not support XMLHttpRequest!");
		}
	return xmlhttp;

}

//符号计算
function createQueryString(expression)
{
	//var expression=str_to_server;
	var queryString="expression="+expression.replace(/\+/g,"%2B");
        //Replace(expression,"+","%2B")
        //Ext.MessageBox.alert("计算结果","计算结果："+queryString);
	return queryString;
}

//上传变量
function createQueryString_AV(varlist)
{
	
	var queryString="varlist="+varlist.replace(/\+/g,"%2B");//alert(queryString);
        //Replace(expression,"+","%2B")
	return queryString;
}