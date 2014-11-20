// JavaScript Document
Ext.namespace('math');

var str_in_text="";  //��¼�������е�����
var str_cmd="";       //��¼�û����������

//function add one column in varible gridpanel
function add_column()
{
	var var_add=Ext.getCmp('add_var').getValue();
    var type_add=Ext.getCmp('add_type').getValue();
    var value_add= Ext.getCmp('add_value').getValue();
	if(var_add!=""&&type_add!=""&&value_add!=""){
	var column_map = Ext.data.Record.create([
    {name: 'name'},
    {name: 'type'},
    {name: 'value'}
]);
	var myNewRecord = new column_map({
    name: Ext.getCmp('add_var').getValue(),
    type: Ext.getCmp('add_type').getValue(),
    value: Ext.getCmp('add_value').getValue()
});
	//alert(column_map.getField("������").mapping);
	//alert(myNewRecord.data.name);
	Ext.getCmp('grid_var_panel').getStore().add(myNewRecord);
	}
	else
	{
		Ext.Msg.show
															(
															     {
																	 title:"��ʾ",
																	 msg:"��������ȱ��!",
																	 buttons:Ext.Msg.OK,
																	 icon:Ext.MessageBox.INFO
																 }
															 );
	}
}

function add_history()
{
	var text=document.getElementById('entryBox_text');
	var today=new Date();
	var column_map = Ext.data.Record.create([
    {name: 'name'},
    {name: 'date'},
    {name: 'time'}
]);
	var myNewRecord = new column_map({
    name: text.value,
    date: today.getFullYear()+'.'+today.getDay(),
    time: today.getHours()+':'+today.getMinutes()
});
	Ext.getCmp('grid_history_panel').getStore().add(myNewRecord);
}

function process_str()
{
	var newstr="";
	var n=0;
	var m=0;
	var rec=Ext.getCmp('grid_var_panel').getStore();
	var length=str_to_server.length;//alert(length);
	var count=rec.getCount();
	var rec1=rec.getRange(0,count);
	//alert(count);
	var r=new RegExp();
	
	for(var i=0;i<count;i++)
	{
		m=str_to_server.indexOf("(");
		n=str_to_server.indexOf(rec1[i].data.name,m);
		
		while(n>-1)
		{
			r.compile(rec1[i].data.name);
			str_to_server=str_to_server.replace(r,rec1[i].data.value);
			n=str_to_server.indexOf(rec1[i].data.name,n+1);
		}
		n=0;
	}
	//alert(str_to_server);
	
}

//��˫���ڵ��¼�
function tree_dbclick(node)
{//alert(node.text);
      var text=document.getElementById('entryBox_text');//alert(node.tip_2);
	  if(node.attributes.tip_1)
	 text.value=node.attributes.tip_1;
	 text.focus();
}

//��ֵ�����������¼�
function command_text()
{
	
	       var text=document.getElementById('entryBox_text');
           var prompt1=document.getElementById('commandPrompt_text');
           var key=0;//alert(text.value);
		   
           document.onkeyup = function(e){  
	           if(e==null){
	           key=event.keyCode;
		   }else{
		       key=e.which;
		   }
		   switch(key)
		   {
		     case 13:
			 {
				 if(text.value!="")
				 {
					 add_history();
					 str_to_server=text.value;//alert(str_to_server);
					 process_str();
		             var cmd=encodeURIComponent(str_to_server);
			         //alert('f');
			         
		             sendMessages(cmd);        //��������������ݺ���
			         //text.value="";
				 }
				 else
				 {
					 prompt1.innerHTML+='<br>'+'AC:\\>&nbsp;&nbsp;';
				 }
			 }
		       break;    
		     default :
		       break;
		   }
          }
}



/**********************�����ǽ�str_to_server������������ؽ��*******************************/
function sendMessages(cmd)
       {
           if(cmd == "cls"){
                var prompt1=document.getElementById('commandPrompt_text');
				var text=document.getElementById('entryBox_text');
                prompt1.innerHTML='AC:\\>&nbsp;&nbsp;';
				text.value="";
           }
		   else
		   {
			   ACNumeric(cmd);
		   }
           
       }


//function read local files
function ReadFiles() 
{ 
     Ext.getCmp('win_add').close();
     var fileopendialog=new Ext.Window(
									   {
										   title:"���ļ�",
										   id:'fileopen',
										   resizable:false,
										   width:350,
										   height:120,
										   modal:true,
										   html:"<br><input id='inputfile' type=file accept='text/html'><br><br><button id='ok' onclick=file_ok()>ȷ��</button><button id='cancel' onclick=file_cancel()>ȡ��</button>"
										   
									   }
									   );
	 fileopendialog.show();
} �� 
function file_ok(){var s=document.getElementById('inputfile').value;alert(s);}
function file_cancel(){Ext.getCmp('fileopen').close();}