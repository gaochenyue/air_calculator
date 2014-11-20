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
	
	if(expression!=""&&x1.value!=""&&x2.value!=""&&y1.value!=""&&y2.value!=""&&gx.value!=""&&gy.value!=""&&filetype!="�ļ�����"&&filename!="")
	{
		ACImage3D();
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

/**********************�����ǽ�str_to_server�������������result����ʾ*******************************/
function ACImage3D()
//���ܣ�
//������
//     
{
	createXmlhttp();
	var url=Service_url+"/ACImage3D";//��������ַ+����
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