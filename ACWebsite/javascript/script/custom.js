// JavaScript Document
Ext.namespace('math');


//�û��Զ��庯��,����type=0����ʾ������,type=1,��ʾ˽�к���
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


/**********************�����ǽ�str_to_server�������������result����ʾ*******************************/
function ACProgram()
//���ܣ�
//������
//     
{
	createXmlhttp();
	var url=Service_url+"/ACProgram";//��������ַ+����
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
			result=xmlhttp.responseXML.getElementsByTagName("string")[0].firstChild.data;//���صĽ��
			document.getElementById('func_info').value+="��ǰ����������Ϣ��\n"+result+'\n';
			
			//������
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
					Ext.getCmp('tree').getRootNode().findChild('text','������������').loader=new Ext.app.BookLoader2({
	                                                                        dataUrl:'shared/shared.asp'
	                                                                });
					Ext.getCmp('tree').getRootNode().findChild('text','������������').loader.load(Ext.getCmp('tree').getRootNode().findChild('text','������������'),function(){});
				}
			}
		}
		else
        {
              Ext.MessageBox.alert("<font color=red>���棡����</font>","<font color=red>Զ�̷�����û��Ӧ,�볢�ԣ�<p/>1.ˢ��ҳ�����µ�½!<br/>2.����Webservice�Ƿ����! <br/><a href=Service.asmx>http://localhost/Service.asmx</a> </font>"); 
		 }
	}
}