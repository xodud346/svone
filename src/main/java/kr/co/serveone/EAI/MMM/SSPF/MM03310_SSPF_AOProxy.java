package kr.co.serveone.EAI.MMM.SSPF;

public class MM03310_SSPF_AOProxy implements kr.co.serveone.EAI.MMM.SSPF.MM03310_SSPF_AO {
  private String _endpoint = null;
  private kr.co.serveone.EAI.MMM.SSPF.MM03310_SSPF_AO mM03310_SSPF_AO = null;
  
  public MM03310_SSPF_AOProxy() {
    _initMM03310_SSPF_AOProxy();
  }
  
  public MM03310_SSPF_AOProxy(String endpoint) {
    _endpoint = endpoint;
    _initMM03310_SSPF_AOProxy();
  }
  
  private void _initMM03310_SSPF_AOProxy() {
    try {
      mM03310_SSPF_AO = (new kr.co.serveone.EAI.MMM.SSPF.MM03310_SSPF_AOServiceLocator()).getHTTPS_Port();
      if (mM03310_SSPF_AO != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)mM03310_SSPF_AO)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)mM03310_SSPF_AO)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (mM03310_SSPF_AO != null)
      ((javax.xml.rpc.Stub)mM03310_SSPF_AO)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public kr.co.serveone.EAI.MMM.SSPF.MM03310_SSPF_AO getMM03310_SSPF_AO() {
    if (mM03310_SSPF_AO == null)
      _initMM03310_SSPF_AOProxy();
    return mM03310_SSPF_AO;
  }
  
  public void MM03310_SSPF_AO(kr.co.serveone.EAI.MMM.SSPF.DT_MM03310_SSPF MT_MM03310_SSPF) throws java.rmi.RemoteException{
    if (mM03310_SSPF_AO == null)
      _initMM03310_SSPF_AOProxy();
    mM03310_SSPF_AO.MM03310_SSPF_AO(MT_MM03310_SSPF);
  }
  
  
}