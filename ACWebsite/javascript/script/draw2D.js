// JavaScript Document
Ext.namespace('math');

var type="2d";//2d
var filename;//name
var expression;//x^2
var axisx;//[-2:2]
var gridx;//50
var filetype;//jpeg
var image_index=0;
var draw_time=0;

function draw2D()
{
	var e=document.getElementById('2D_fxy');
	var x1=document.getElementById('2D_x1');
	var x2=document.getElementById('2D_x2');
	var a="["+x1.value+":"+x2.value+"]";
	var gx=document.getElementById('2D_x');
	var t=document.getElementById('2D_select');
	var ft=t.options[t.selectedIndex];//alert(ft);
	var fn=document.getElementById('2D_filename');
	
	expression=e.value;
	filename=fn.value;
	filetype=ft.text;
	gridx=gx.value;
	axisx=a;
	type="."+ft.text;
	var path=user_path.slice(0,user_path.lastIndexOf("/"));
	path+="/image/"+filename+type;
	type=path;
	//alert(type);
	if(expression!=""&&x1.value!=""&&x2.value!=""&&gridx!=""&&filetype!="文件类型"&&filename!="")
	{
		ACImage2D();
	}
	else
	{
		Ext.Msg.show
			(
			   {
				  title:"提示",
				  msg:"输入有误，请检查输入是否为空!",
				  buttons:Ext.Msg.OK,
				  icon:Ext.MessageBox.INFO
				}
			 );
	}
}

function ACImage2D()
//功能：
//参数：
//     
{
	createXmlhttp();
	var url=Service_url+"/ACImage2D";//服务器地址+方法
	var queryString=createQueryString_A2D(username,password);
        //queryString=Server.Urlencode(queryString);
	xmlhttp.open("POST",url,true);
	xmlhttp.onreadystatechange=handleStateChange_A2D;
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
	xmlhttp.send(queryString);
}

function createQueryString_A2D(username,password)
{
	//var expression=str_to_server;
	var queryString="type="+type+"&filename="+filename;
        queryString+="&expression="+expression.replace(/\+/g,"%2B")+"&axisx="+axisx;
        queryString+="&gridx="+gridx+"&filetype="+filetype;
        //"a="+a+"&b="+b;
        //alert(queryString);
        //Replace(expression,"+","%2B")
	return queryString;
}

function handleStateChange_A2D()
{

	if(xmlhttp.readyState==4)
	{
		if(xmlhttp.status==200)
		{
			result=xmlhttp.responseXML.getElementsByTagName("string")[0].firstChild.data;//返回的结果
		    //alert(result);
			image_data.proxy=new Ext.data.HttpProxy(
																		  {
																			  url: user_path
																		   }
																		  );
			image_data.load();
			
		}
		else
        {
              Ext.MessageBox.alert("<font color=red>警告！！！</font>","<font color=red>远程服务器没响应,请尝试：<p/>1.刷新页面重新登陆!<br/>2.请检查Webservice是否可用! <br/><a href=Service.asmx>http://localhost/Service.asmx</a> </font>"); 
		 }
	}
}



//
function reset2D()
{
	document.getElementById('2D_fxy').value="";
	document.getElementById('2D_x1').value="";
	document.getElementById('2D_x2').value="";
	
	document.getElementById('2D_x').value="";
	
	document.getElementById('2D_filename').value="";
}