<?xml version="1.0"?>
<!--
<%Response.ContentType="application/xml"%>
-->
<user username="username">
  <userinformation>
    <totalfunc>
    </totalfunc>
    <totalimage>
    </totalimage>
    <totalvariable>
    </totalvariable>
    <totaloperation>
    </totaloperation>
  </userinformation>
  <!--display in tree-->
  <funclibrary dllpath="users\gcy\library\" sourcepath="users\gcy\source\">
    <toolbox name="privatetoolbox">
    </toolbox>
  </funclibrary>
  <!--display in grid-->
  <imagelibrary ipath="users\gcy\image\">
    <image name="test1">
      <name>test1</name>
      <expression>sin(x^2+y^2)</expression>
      <type>users/gcy/image/test1.jpeg</type>
    </image>
  </imagelibrary>
  <!--display in grid-->
  <variable>
    <var>
      <name>C</name>
      <type>int</type>
      <value>[3,4,6;1,7,9]</value>
    </var>
    <var>
      <name>A</name>
      <type>int</type>
      <value>[1,2,3;4,4,6;7,2,5]</value>
    </var>
    <var>
      <name>B</name>
      <type>float</type>
      <value>[21,32,4;4,12,3]</value>
    </var>
  </variable>
  <!--display in grid-->
  <history>
    <operation>
      <name>delete</name>
      <date>2009.4</date>
      <time>8:00am</time>
    </operation>
  </history>
</user>