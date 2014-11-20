Ext.namespace('math');
var active_time=0;
var sm1=new Ext.grid.CheckboxSelectionModel();
var sm2=new Ext.grid.CheckboxSelectionModel();
var sm3=new Ext.grid.CheckboxSelectionModel();

var history_store=new Ext.data.Store(
									 { 
									        proxy: new Ext.data.HttpProxy(
																		  {
																			  url: user_path
																		   }
																		  ), 
											reader: new Ext.data.XmlReader(
																		   { 
																		       record: 'operation'
																			},
																			   [ 'name', 'date', 'time' ]
																			  ) 
									  });

 
 var varibles_store = new Ext.data.Store(
									 { 
									        proxy: new Ext.data.HttpProxy(
																		  {
																			  url: user_path
																		   }
																		  ), 
											reader: new Ext.data.XmlReader(
																		   { 
																		       record: 'var'
																			},
																			   [ 'name', 'type', 'value' ]
																			  ) 
									  });
 

var varibles_clo = new Ext.grid.ColumnModel(
										 [ sm1,
										  
										      {header: "变量名", width: 120, dataIndex: 'name'}, 
											  {header: "变量类型", width: 180, dataIndex: 'type'},
											  {header: "变量值", width: 115, dataIndex: 'value'}
										 ]);


var image_data=new Ext.data.Store(
									 { 
									        listeners:{
												
				"load":function ()
				{//alert('ok');
				if(active_time!=0){
					var io=document.getElementById('image_out');
			var n=image_data.getTotalCount();
			var rec=image_data.getAt(n-1);
			var s=rec.data.name+'.';
			var r=new RegExp();r.compile(s);
			var im_path=rec.data.type.replace(r,'_'+s);//alert(im_path);
			io.innerHTML+="<span  style=width:110;height:110;margin-left:15 id=image"+image_index+" onmouseover=image_mouseon(this.id,"+image_index+") onmouseout=image_mouseout(this.id) onclick=image_click(this.id,"+image_index+") > <image id=image"+image_index+"x src="+im_path+"  style=height:100;width:100;margin-left:5;margin-top:5></image></span>";
			
			
			var tip_html="<span id='tip'><p>图&nbsp;&nbsp;片&nbsp;&nbsp;名: "+rec.data.name+"<br><br>函数表达式: "+rec.data.expression+"</p></span><image src="+rec.data.type+"></image>";
			image_index++;
	
	var bod=popup.document.body;
	bod.setAttribute("ondrag",function(){popup.top=window.event.y;});
	bod.innerHTML=tip_html;
	bod.style.padding="10px";
	bod.style.border="solid 2px #99FFCC";
	bod.style.fontsize="24pt";
	bod.style.background="#A7B4E7";
	
	popup.show(-50,100,670+rec.data.expression.length,600,document.all.photo_panel);
				}
												}
			},
									        proxy: new Ext.data.HttpProxy(
																		  {
																			  url: user_path
																		   }
																		  ), 
											reader: new Ext.data.XmlReader(
																		   { 
																		       record: 'image'
																			},
																			   [ 'name', 'expression', 'type' ]
																			  ) 
									  });


