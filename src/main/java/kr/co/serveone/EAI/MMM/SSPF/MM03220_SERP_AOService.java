/**
 * MM03220_SERP_AOService.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package kr.co.serveone.EAI.MMM.SSPF;

public interface MM03220_SERP_AOService extends javax.xml.rpc.Service {
    public java.lang.String getHTTPS_PortAddress();

    public kr.co.serveone.EAI.MMM.SSPF.MM03220_SERP_AO getHTTPS_Port() throws javax.xml.rpc.ServiceException;

    public kr.co.serveone.EAI.MMM.SSPF.MM03220_SERP_AO getHTTPS_Port(java.net.URL portAddress) throws javax.xml.rpc.ServiceException;
    public java.lang.String getHTTP_PortAddress();

    public kr.co.serveone.EAI.MMM.SSPF.MM03220_SERP_AO getHTTP_Port() throws javax.xml.rpc.ServiceException;

    public kr.co.serveone.EAI.MMM.SSPF.MM03220_SERP_AO getHTTP_Port(java.net.URL portAddress) throws javax.xml.rpc.ServiceException;
}
