// JavaScript Document
Ext.namespace('math');
var login_time=0;
var user_path="users/anonymous/user.asp"
var username="anonymous";//�û���
var password="";//����
var update=0;

function AClogin(username,password)
//���ܣ��û���¼
//������username--�û���;password--����
//     
{
	if(username=="")username="anonymous";
	createXmlhttp();
	var url=Service_url+"/AClogin";//��������ַ+����
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
			user_path=xmlhttp.responseXML.getElementsByTagName("string")[0].firstChild.data;//���صĽ��
            //alert(user_path);
			if(user_path=="error")
										  {
										     username='anonymous';
											 Ext.getCmp('north_panel').setIconClass('user');
											 user_path="users/anonymous/user.asp";
											 Ext.Msg.show
	                                         (
                                                {
			                                        title:"��ʾ",
			                                        msg:"Username is wrong!<br>Anonymous logined ok!",
			                                        buttons:Ext.Msg.OK,
			                                        icon:Ext.MessageBox.INFO
		                                         }
	                                           );
										   }
										  if(Ext.getCmp('north_panel')){//alert(user_path);
										  Ext.getCmp('north_panel').setIconClass('user');
										  Ext.getCmp('north_panel').setTitle("Welcome,"+username+" logined"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='ACHelp.html' target=_blank><font color=white>�鿴����</font></a>");}
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
              Ext.MessageBox.alert("<font color=red>���棡����</font>","<font color=red>Զ�̷�����û��Ӧ,�볢�ԣ�<p/>1.ˢ��ҳ�����µ�½!<br/>2.����Webservice�Ƿ����! <br/><a href=Service.asmx>http://localhost/Service.asmx</a> </font>"); 
		 }
	}
}
