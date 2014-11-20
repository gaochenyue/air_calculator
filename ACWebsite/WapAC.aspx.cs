using System;
using System.Collections;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Web;
using System.Web.Mobile;
using System.Web.SessionState;
using System.Web.UI;
using System.Web.UI.MobileControls;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Xml;
public partial class Default2 : System.Web.UI.MobileControls.MobilePage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        
    }
    protected void cmdCalc_Click(object sender, EventArgs e)
    {
        WapACService.Service  ACws = new WapACService .Service() ;
        string expression;
        if (txtCmd.Text.ToString().Trim() != "")
        {
            expression = txtCmd.Text.ToString().Trim() + ";";
            lblResult.Text = ACws.SymbolCalc(expression);
        }
    }

    
}
