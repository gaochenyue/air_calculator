// JavaScript Document
Ext.namespace('math');

var expression;//x^2+y^2
var axisx;//[-2:2]
var axisy;//[-2:2]
var grid;//50,50

function draw3D()
{
	var e=document.getElementById('3D_fxyz');
	var x1=document.getElementById('3D_x1');
	var x2=document.getElementById('3D_x2');
	var ax="["+x1.value+":"+x2.value+"]";
	var y1=document.getElementById('3D_y1');
	var y2=document.getElementById('3D_y2');
	var ay="["+y1.value+":"+y2.value+"]";
	var gx=document.getElementById('3D_x');
	var gy=document.getElementById('3D_y');
	var t=document.getElementById('3D_select');
	var ft=t.options[t.selectedIndex];//alert(ft);
	var fn=document.getElementById('3D_filename');
	
	expression=e.value;
    filename=fn.value;
	filetype=ft.text;
	grid=gx.value+','+gy.value;
	axisx=ax;
	axisy=ay;
	type="."+ft.text;
    
	var path=user_path.slice(0,user_path.lastIndexOf("/"));
	path+="/image/"+filename+type;
	type=path;
	
	if(expression!=""&&x1.value!=""&&x2.value!=""&&y1.value!=""&&y2.value!=""&&gx.value!=""&&gy.value!=""&&filetype!="文件类型"&&filename!="")
	{
		ACImage3D();
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

/**********************下面是将str_to_server发向服务器返回result并显示*******************************/
function ACImage3D()
//功能：
//参数：
//     
{
	createXmlhttp();
	var url=Service_url+"/ACImage3D";//服务器地址+方法
	var queryString=createQueryString_A3D(username,password);
        //queryString=Server.Urlencode(queryString);
	xmlhttp.open("POST",url,true);
	xmlhttp.onreadystatechange=handleStateChange_A3D;
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
	xmlhttp.send(queryString);
}

function createQueryString_A3D(username,password)
{
	//var expression=str_to_server;
	var queryString="type="+type+"&filename="+filename;
        queryString+="&expression="+expression.replace(/\+/g,"%2B")+"&axisx="+axisx+"&axisy="+axisy;
        queryString+="&grid="+grid+"&filetype="+filetype;
        //"a="+a+"&b="+b;
        //alert(queryString);
        //Replace(expression,"+","%2B")
	return queryString;
}

function handleStateChange_A3D()
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
function reset3D()
{
	document.getElementById('3D_fxyz').value="";
	document.getElementById('3D_x1').value="";
	document.getElementById('3D_x2').value="";
	
	document.getElementById('3D_y1').value="";
	document.getElementById('3D_y2').value="";
	
	document.getElementById('3D_x').value="";
	document.getElementById('3D_y').value="";
	
	document.getElementById('3D_filename').value="";
}