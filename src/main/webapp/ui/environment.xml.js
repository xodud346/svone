if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::default");
        this.set_datatyperule("2.0");
        this.set_filesecurelevel("all");
        this.set_httptimeout("0");
    };
    env.on_initEvent = function ()
    {
        // add event handler

    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "0", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "0", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
        nexacro._addService("svcUrl", "JSP", "http://127.0.0.1:8080/", "none", null, "", "0", "0");
        nexacro._addService("extPrototype", "js", "./nexacro17lib/component/extPrototype/", "session", null, "", "0", "0");
        nexacro._addService("FRAME", "form", "./FRAME/", "session", null, "", "0", "0");
        nexacro._addService("COMM", "form", "./COMM/", "session", null, "", "0", "0");
        nexacro._addService("AD", "form", "./AD/", "session", null, "", "0", "0");
        nexacro._addService("CC", "form", "./CC/", "session", null, "", "0", "0");
        nexacro._addService("CO", "form", "./CO/", "session", null, "", "0", "0");
        nexacro._addService("CO_POP", "form", "./CO/POP/", "session", null, "", "0", "0");
        nexacro._addService("CO_POP_BACK", "form", "./CO/POP_BACK/", "session", null, "", "0", "0");
        nexacro._addService("CP", "form", "./CP/", "none", null, "", "0", "0");
        nexacro._addService("DL", "form", "./DL/", "none", null, "", "0", "0");
        nexacro._addService("DP", "form", "./DP/", "none", null, "", "0", "0");
        nexacro._addService("IV", "form", "./IV/", "none", null, "", "0", "0");
        nexacro._addService("MP", "form", "./MP/", "none", null, "", "0", "0");
        nexacro._addService("OD", "form", "./OD/", "none", null, "", "0", "0");
        nexacro._addService("PC", "form", "./PC/", "none", null, "", "0", "0");
        nexacro._addService("PC_BAK", "form", "./PC/PC_BAK/", "none", null, "", "0", "0");
        nexacro._addService("PR", "form", "./PR/", "none", null, "", "0", "0");
        nexacro._addService("PR_POP", "form", "./PR/POP/", "none", null, "", "0", "0");
        nexacro._addService("RD", "form", "./RD/", "none", null, "", "0", "0");
        nexacro._addService("RD_POP", "form", "./RD_POP/", "none", null, "", "0", "0");
        nexacro._addService("SR", "form", "./SR/", "none", null, "", "0", "0");
        nexacro._addService("SA", "form", "./SA/", "none", null, "", "0", "0");
        nexacro._addService("VO", "form", "./VO/", "none", null, "", "0", "0");
        nexacro._addService("PUB_GUIDE", "form", "./PUB_GUIDE/", "none", null, "", "0", "0");
        nexacro._addService("sample", "form", "./sample/", "none", null, "", "0", "0");
        nexacro._addService("PP", "form", "./PP/", "none", null, "", "0", "0");
        nexacro._addService("PP_POP", "form", "./PP/POP/", "none", null, "", "0", "0");
        nexacro._addService("BA", "form", "./BA/", "none", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"BasicChart", "classname":"nexacro.BasicChart", "type":"JavaScript"},
        		{"id":"RaonkUpload", "classname":"nexacro.RaonkUpload", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables

        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script

					
    env = null;
}
