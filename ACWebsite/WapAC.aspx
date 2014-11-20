<%@ Page Language="C#" AutoEventWireup="true" CodeFile="WapAC.aspx.cs" Inherits="Default2" %>
<%@ Register TagPrefix="mobile" Namespace="System.Web.UI.MobileControls" Assembly="System.Web.Mobile" %>

<html xmlns="http://www.w3.org/1999/xhtml" >
<script>
funcion hi()
{
alert("hello");
}
</script>
<body>
    &nbsp;<mobile:Form id="frmMain" runat="server"><mobile:Label ID="labTitle" Runat="server"
        Alignment="Center" Font-Name="Arial Rounded MT Bold" Font-Size="Large">Air Calculator</mobile:Label>
        <br />
        <mobile:Label ID="Label1"
        Runat="server" Alignment="Center">Input your expression:</mobile:Label> <mobile:TextBox ID="txtCmd"
        Runat="server" Alignment="Center" StyleReference="" Wrapping="Wrap"></mobile:TextBox> <mobile:Command ID="cmdCalc" Runat="server" OnClick="cmdCalc_Click" Alignment="Center">计算</mobile:Command><br /><mobile:Label
        ID="Label2" Runat="server" Alignment="Center">The result:</mobile:Label><br /><mobile:Label ID="lblResult" Runat="server" Alignment="Center"></mobile:Label><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></mobile:Form>
</body>
</html>
