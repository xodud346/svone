package kr.co.serveone.EAI.MMM.SSPF;

public class MM03220_SERP_AOProxy implements kr.co.serveone.EAI.MMM.SSPF.MM03220_SERP_AO {
  private String _endpoint = null;
  private kr.co.serveone.EAI.MMM.SSPF.MM03220_SERP_AO mM03220_SERP_AO = null;
  
  public MM03220_SERP_AOProxy() {
    _initMM03220_SERP_AOProxy();
  }
  
  public MM03220_SERP_AOProxy(String endpoint) {
    _endpoint = endpoint;
    _initMM03220_SERP_AOProxy();
  }
  
  private void _initMM03220_SERP_AOProxy() {
    try {
      mM03220_SERP_AO = (new kr.co.serveone.EAI.MMM.SSPF.MM03220_SERP_AOServiceLocator()).getHTTPS_Port();
      if (mM03220_SERP_AO != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)mM03220_SERP_AO)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)mM03220_SERP_AO)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (mM03220_SERP_AO != null)
      ((javax.xml.rpc.Stub)mM03220_SERP_AO)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public kr.co.serveone.EAI.MMM.SSPF.MM03220_SERP_AO getMM03220_SERP_AO() {
    if (mM03220_SERP_AO == null)
      _initMM03220_SERP_AOProxy();
    return mM03220_SERP_AO;
  }
  
  public void MM03220_SERP_AO(kr.co.serveone.EAI.MMM.SSPF.DT_MM03220_SERP MT_MM03220_SERP) throws java.rmi.RemoteException{
    if (mM03220_SERP_AO == null)
      _initMM03220_SERP_AOProxy();
    mM03220_SERP_AO.MM03220_SERP_AO(MT_MM03220_SERP);
  }
  
  
}