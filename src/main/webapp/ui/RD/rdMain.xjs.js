//XJS=rdMain.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"RD::rdUtils.xjs");
        this.addIncludeScript(path,"RD::rdValidation.xjs");
        this.addIncludeScript(path,"RD::rdMsg.xjs");
        this.addIncludeScript(path,"RD::rdDate.xjs");
        this.addIncludeScript(path,"RD::rdForm.xjs");
        this.registerScript(path, function() {
        this.executeIncludeScript("RD::rdUtils.xjs"); /*include "RD::rdUtils.xjs"*/;
        this.executeIncludeScript("RD::rdValidation.xjs"); /*include "RD::rdValidation.xjs"*/;
        this.executeIncludeScript("RD::rdMsg.xjs"); /*include "RD::rdMsg.xjs"*/;
        this.executeIncludeScript("RD::rdDate.xjs"); /*include "RD::rdDate.xjs"*/;
        this.executeIncludeScript("RD::rdForm.xjs"); /*include "RD::rdForm.xjs"*/;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
