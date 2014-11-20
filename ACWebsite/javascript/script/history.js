// JavaScript Document
Ext.namespace('math');


//上传历史记录
function ACUpdateHistory(historylist)
//功能：
//参数：
{
	
        createXmlhttp();
	var url=Service_url+"/ACUpdateHistory";//服务器地址
	var queryString=createQueryString_AH(historylist);
	xmlhttp.open("POST",url,true);
	xmlhttp.onreadystatechange=handleStateChange_AH;
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
	xmlhttp.send(queryString);
}

function createQueryString_AH(historylist)
{
	
	var queryString="historylist="+historylist.replace(/\+/g,"%2B");
	return queryString;
}

function handleStateChange_AH()
{

	if(xmlhttp.readyState==4)
	{
		if(xmlhttp.status==200)
		{
			result=xmlhttp.responseXML.getElementsByTagName("string")[0].firstChild.data;//得到结果
            Ext.Msg.show
			(
			   {
				  title:"提示",
				  msg:"update&nbsp;&nbsp;"+result,
				  buttons:Ext.Msg.OK,
				  icon:Ext.MessageBox.INFO
				}
			 );
		}
		else
        {
              Ext.MessageBox.alert("<font color=red>警告！！！</font>","<font color=red>远程服务器没响应,请尝试：<p/>1.刷新页面重新登陆!<br/>2.请检查Webservice是否可用! <br/><a href=Service.asmx>http://localhost/Service.asmx</a> </font>"); 
		 }
	}
}