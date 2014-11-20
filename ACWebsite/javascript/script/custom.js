// JavaScript Document
Ext.namespace('math');


//用户自定义函数,其中type=0，表示共享函数,type=1,表示私有函数
var funcbody;
var format;
var inputdescription;
var outputdescription;
var description;
var example;
var type;
var num_active=0;

function custom()
{
	var fb=document.getElementById('func_text');//alert(fb.value);
	var fm=document.getElementById('func_form');
	var i=document.getElementById('func_illu');
	var o=document.getElementById('func_back');
	var d=document.getElementById('func_desc');
	var e=document.getElementById('func_exam');
	var ty=document.getElementById('func_select');
	var t=ty.selectedIndex;//alert(t);
	
	funcbody=fb.value;
	format=fm.value;
	inputdescription=i.value;
	outputdescription=o.value;
	description=d.value;
	example=e.value;
	type=t;
	
	ACProgram();
	udpdate=1;
}


/**********************下面是将str_to_server发向服务器返回result并显示*******************************/
function ACProgram()
//功能：
//参数：
//     
{
	createXmlhttp();
	var url=Service_url+"/ACProgram";//服务器地址+方法
	var queryString=createQueryString_AP(username,password);
        //queryString=Server.Urlencode(queryString);
	xmlhttp.open("POST",url,true);
	xmlhttp.onreadystatechange=handleStateChange_AP;
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
	xmlhttp.send(queryString);
}

function createQueryString_AP(username,password)
{
	//var expression=str_to_server;
	var queryString="funcbody="+funcbody.replace(/\+/g,"%2B")+"&format="+format;
        queryString+="&inputdescription="+inputdescription+"&outputdescription="+outputdescription;
        queryString+="&description="+description+"&example="+example+"&type="+type;
        //"a="+a+"&b="+b;
        //alert(queryString);
        //Replace(expression,"+","%2B")
	return queryString;
}

function handleStateChange_AP()
{

	if(xmlhttp.readyState==4)
	{
		if(xmlhttp.status==200)
		{
			result=xmlhttp.responseXML.getElementsByTagName("string")[0].firstChild.data;//返回的结果
			document.getElementById('func_info').value+="当前函数编译信息：\n"+result+'\n';
			
			//更新树
			if(type==1)
			{
				private2.loader.load(private2,function(){});
				if(num_active==1)
				{//alert('ok');
					private.loader.load(private,function(){});
				}
			}
			else
			{
				customroot.loader=new Ext.app.BookLoader2({
	                                                                        dataUrl:'shared/shared.asp'
	                                                                });
				customroot.loader.load(customroot,function(){});//
				
				if(num_active==1)
				{
					Ext.getCmp('tree').getRootNode().findChild('text','共享函数工具箱').loader=new Ext.app.BookLoader2({
	                                                                        dataUrl:'shared/shared.asp'
	                                                                });
					Ext.getCmp('tree').getRootNode().findChild('text','共享函数工具箱').loader.load(Ext.getCmp('tree').getRootNode().findChild('text','共享函数工具箱'),function(){});
				}
			}
		}
		else
        {
              Ext.MessageBox.alert("<font color=red>警告！！！</font>","<font color=red>远程服务器没响应,请尝试：<p/>1.刷新页面重新登陆!<br/>2.请检查Webservice是否可用! <br/><a href=Service.asmx>http://localhost/Service.asmx</a> </font>"); 
		 }
	}
}