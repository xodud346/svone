/**
 * DT_MM03220_SERP.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package kr.co.serveone.EAI.MMM.SSPF;


/**
 * 시약판매업 허가 데이터 (R&D)
 */
public class DT_MM03220_SERP  implements java.io.Serializable {
    /* 회사코드 */
    private java.lang.String XBUKRS;

    /* 언어코드 */
    private java.lang.String XLANG;

    /* 전송 레코드 갯수 */
    private java.lang.String XROWS;

    /* 호출날짜(YYYYMMDD) */
    private java.lang.String XDATE;

    /* 호출시간(HHMMSS, 24H) */
    private java.lang.String XTIME;

    private kr.co.serveone.EAI.MMM.SSPF.DT_MM03220_SERPOUT_TAB[] OUT_TAB;

    public DT_MM03220_SERP() {
    }

    public DT_MM03220_SERP(
           java.lang.String XBUKRS,
           java.lang.String XLANG,
           java.lang.String XROWS,
           java.lang.String XDATE,
           java.lang.String XTIME,
           kr.co.serveone.EAI.MMM.SSPF.DT_MM03220_SERPOUT_TAB[] OUT_TAB) {
           this.XBUKRS = XBUKRS;
           this.XLANG = XLANG;
           this.XROWS = XROWS;
           this.XDATE = XDATE;
           this.XTIME = XTIME;
           this.OUT_TAB = OUT_TAB;
    }


    /**
     * Gets the XBUKRS value for this DT_MM03220_SERP.
     * 
     * @return XBUKRS   * 회사코드
     */
    public java.lang.String getXBUKRS() {
        return XBUKRS;
    }


    /**
     * Sets the XBUKRS value for this DT_MM03220_SERP.
     * 
     * @param XBUKRS   * 회사코드
     */
    public void setXBUKRS(java.lang.String XBUKRS) {
        this.XBUKRS = XBUKRS;
    }


    /**
     * Gets the XLANG value for this DT_MM03220_SERP.
     * 
     * @return XLANG   * 언어코드
     */
    public java.lang.String getXLANG() {
        return XLANG;
    }


    /**
     * Sets the XLANG value for this DT_MM03220_SERP.
     * 
     * @param XLANG   * 언어코드
     */
    public void setXLANG(java.lang.String XLANG) {
        this.XLANG = XLANG;
    }


    /**
     * Gets the XROWS value for this DT_MM03220_SERP.
     * 
     * @return XROWS   * 전송 레코드 갯수
     */
    public java.lang.String getXROWS() {
        return XROWS;
    }


    /**
     * Sets the XROWS value for this DT_MM03220_SERP.
     * 
     * @param XROWS   * 전송 레코드 갯수
     */
    public void setXROWS(java.lang.String XROWS) {
        this.XROWS = XROWS;
    }


    /**
     * Gets the XDATE value for this DT_MM03220_SERP.
     * 
     * @return XDATE   * 호출날짜(YYYYMMDD)
     */
    public java.lang.String getXDATE() {
        return XDATE;
    }


    /**
     * Sets the XDATE value for this DT_MM03220_SERP.
     * 
     * @param XDATE   * 호출날짜(YYYYMMDD)
     */
    public void setXDATE(java.lang.String XDATE) {
        this.XDATE = XDATE;
    }


    /**
     * Gets the XTIME value for this DT_MM03220_SERP.
     * 
     * @return XTIME   * 호출시간(HHMMSS, 24H)
     */
    public java.lang.String getXTIME() {
        return XTIME;
    }


    /**
     * Sets the XTIME value for this DT_MM03220_SERP.
     * 
     * @param XTIME   * 호출시간(HHMMSS, 24H)
     */
    public void setXTIME(java.lang.String XTIME) {
        this.XTIME = XTIME;
    }


    /**
     * Gets the OUT_TAB value for this DT_MM03220_SERP.
     * 
     * @return OUT_TAB
     */
    public kr.co.serveone.EAI.MMM.SSPF.DT_MM03220_SERPOUT_TAB[] getOUT_TAB() {
        return OUT_TAB;
    }


    /**
     * Sets the OUT_TAB value for this DT_MM03220_SERP.
     * 
     * @param OUT_TAB
     */
    public void setOUT_TAB(kr.co.serveone.EAI.MMM.SSPF.DT_MM03220_SERPOUT_TAB[] OUT_TAB) {
        this.OUT_TAB = OUT_TAB;
    }

    public kr.co.serveone.EAI.MMM.SSPF.DT_MM03220_SERPOUT_TAB getOUT_TAB(int i) {
        return this.OUT_TAB[i];
    }

    public void setOUT_TAB(int i, kr.co.serveone.EAI.MMM.SSPF.DT_MM03220_SERPOUT_TAB _value) {
        this.OUT_TAB[i] = _value;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DT_MM03220_SERP)) return false;
        DT_MM03220_SERP other = (DT_MM03220_SERP) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.XBUKRS==null && other.getXBUKRS()==null) || 
             (this.XBUKRS!=null &&
              this.XBUKRS.equals(other.getXBUKRS()))) &&
            ((this.XLANG==null && other.getXLANG()==null) || 
             (this.XLANG!=null &&
              this.XLANG.equals(other.getXLANG()))) &&
            ((this.XROWS==null && other.getXROWS()==null) || 
             (this.XROWS!=null &&
              this.XROWS.equals(other.getXROWS()))) &&
            ((this.XDATE==null && other.getXDATE()==null) || 
             (this.XDATE!=null &&
              this.XDATE.equals(other.getXDATE()))) &&
            ((this.XTIME==null && other.getXTIME()==null) || 
             (this.XTIME!=null &&
              this.XTIME.equals(other.getXTIME()))) &&
            ((this.OUT_TAB==null && other.getOUT_TAB()==null) || 
             (this.OUT_TAB!=null &&
              java.util.Arrays.equals(this.OUT_TAB, other.getOUT_TAB())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getXBUKRS() != null) {
            _hashCode += getXBUKRS().hashCode();
        }
        if (getXLANG() != null) {
            _hashCode += getXLANG().hashCode();
        }
        if (getXROWS() != null) {
            _hashCode += getXROWS().hashCode();
        }
        if (getXDATE() != null) {
            _hashCode += getXDATE().hashCode();
        }
        if (getXTIME() != null) {
            _hashCode += getXTIME().hashCode();
        }
        if (getOUT_TAB() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getOUT_TAB());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getOUT_TAB(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DT_MM03220_SERP.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://serveone.co.kr/EAI/MMM/SSPF", "DT_MM03220_SERP"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("XBUKRS");
        elemField.setXmlName(new javax.xml.namespace.QName("", "XBUKRS"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("XLANG");
        elemField.setXmlName(new javax.xml.namespace.QName("", "XLANG"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("XROWS");
        elemField.setXmlName(new javax.xml.namespace.QName("", "XROWS"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("XDATE");
        elemField.setXmlName(new javax.xml.namespace.QName("", "XDATE"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("XTIME");
        elemField.setXmlName(new javax.xml.namespace.QName("", "XTIME"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("OUT_TAB");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OUT_TAB"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://serveone.co.kr/EAI/MMM/SSPF", ">DT_MM03220_SERP>OUT_TAB"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        elemField.setMaxOccursUnbounded(true);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
