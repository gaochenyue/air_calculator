// JavaScript Document
Ext.namespace('math');
var login_time=0;
var user_path="users/anonymous/user.asp"
var username="anonymous";//用户名
var password="";//密码
var update=0;

function AClogin(username,password)
//功能：用户登录
//参数：username--用户名;password--密码
//     
{
	if(username=="")username="anonymous";
	createXmlhttp();
	var url=Service_url+"/AClogin";//服务器地址+方法
	var queryString=createQueryString_AL(username,password);
        //queryString=Server.Urlencode(queryString);
	xmlhttp.open("POST",url,true);
	xmlhttp.onreadystatechange=handleStateChange_AL;
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
	xmlhttp.send(queryString);
}

function createQueryString_AL(username,password)
{
	//var expression=str_to_server;
	var queryString="username="+username.replace(/\+/g,"%2B")+"&password="+password.replace(/\+/g,"%2B");

	return queryString;
}

function handleStateChange_AL()
{

	if(xmlhttp.readyState==4)
	{
		if(xmlhttp.status==200)
		{
			user_path=xmlhttp.responseXML.getElementsByTagName("string")[0].firstChild.data;//返回的结果
            //alert(user_path);
			if(user_path=="error")
										  {
										     username='anonymous';
											 Ext.getCmp('north_panel').setIconClass('user');
											 user_path="users/anonymous/user.asp";
											 Ext.Msg.show
	                                         (
                                                {
			                                        title:"提示",
			                                        msg:"Username is wrong!<br>Anonymous logined ok!",
			                                        buttons:Ext.Msg.OK,
			                                        icon:Ext.MessageBox.INFO
		                                         }
	                                           );
										   }
										  if(Ext.getCmp('north_panel')){//alert(user_path);
										  Ext.getCmp('north_panel').setIconClass('user');
										  Ext.getCmp('north_panel').setTitle("Welcome,"+username+" logined"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='ACHelp.html' target=_blank><font color=white>查看帮助</font></a>");}
			history_store.proxy=new Ext.data.HttpProxy(
																		  {
																			  url: user_path
																		   }
																		  );//alert('ok');
			history_store.load();
		
			//alert(rec[0].data.name);
			varibles_store.proxy=new Ext.data.HttpProxy(
																		  {
																			  url: user_path
																		   }
																		  );
			varibles_store.load();
			image_data.proxy=new Ext.data.HttpProxy(
																		  {
																			  url: user_path
																		   }
																		  );
			image_data.load();
			private2.loader=new Ext.app.BookLoader1({
	                                                                           dataUrl:user_path
	                                                              });
			
			if(!Ext.getCmp('north_panel')&&login_time!=0)
			myMask.show();
			else
			login_time++;
			
		}
		else
        {
              Ext.MessageBox.alert("<font color=red>警告！！！</font>","<font color=red>远程服务器没响应,请尝试：<p/>1.刷新页面重新登陆!<br/>2.请检查Webservice是否可用! <br/><a href=Service.asmx>http://localhost/Service.asmx</a> </font>"); 
		 }
	}
}
