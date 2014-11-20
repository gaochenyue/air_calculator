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
	if(expression!=""&&x1.value!=""&&x2.value!=""&&gridx!=""&&filetype!="�ļ�����"&&filename!="")
	{
		ACImage2D();
	}
	else
	{
		Ext.Msg.show
			(
			   {
				  title:"��ʾ",
				  msg:"�����������������Ƿ�Ϊ��!",
				  buttons:Ext.Msg.OK,
				  icon:Ext.MessageBox.INFO
				}
			 );
	}
}

function ACImage2D()
//���ܣ�
//������
//     
{
	createXmlhttp();
	var url=Service_url+"/ACImage2D";//��������ַ+����
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
			result=xmlhttp.responseXML.getElementsByTagName("string")[0].firstChild.data;//���صĽ��
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
              Ext.MessageBox.alert("<font color=red>���棡����</font>","<font color=red>Զ�̷�����û��Ӧ,�볢�ԣ�<p/>1.ˢ��ҳ�����µ�½!<br/>2.����Webservice�Ƿ����! <br/><a href=Service.asmx>http://localhost/Service.asmx</a> </font>"); 
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