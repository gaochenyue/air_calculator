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
  <funclibrary dllpath="users\wyq\library\" sourcepath="users\wyq\source\">
    <toolbox name="privatetoolbox">
    </toolbox>
  </funclibrary>
  <!--display in grid-->
  <imagelibrary ipath="users\wyq\image\">
    <image name="wyq1">
      <name>wyq1</name>
      <expression>sin(x^2+y^2)</expression>
      <type>users/wyq/image/wyq1.jpeg</type>
    </image>
    <image name="wyq2">
      <name>wyq2</name>
      <expression>sin(x^2)</expression>
      <type>users/wyq/image/wyq2.jpeg</type>
    </image>
  </imagelibrary>
  <!--display in grid-->
  <variable>
    <var>
      <name>C</name>
      <type>int</type>
      <value>[3,5,2;7,4,9]</value>
    </var>
    <var>
      <name>B</name>
      <type>int</type>
      <value>[3]</value>
    </var>
    <var>
      <name>A</name>
      <type>int</type>
      <value>[1,2,3;4,5,6;7,8,9]</value>
    </var>
  </variable>
  <!--display in grid-->
  <history>
    <operation>
      <name>lu([1,2,3;2,3,4;5,6,7],[3])</name>
      <date>2009.2</date>
      <time>22:33</time>
    </operation>
    <operation>
      <name>lu([1.35345,2.3453,3;2,3,4;5,6,7],[3])</name>
      <date>2009.2</date>
      <time>22:33</time>
    </operation>
  </history>
</user>