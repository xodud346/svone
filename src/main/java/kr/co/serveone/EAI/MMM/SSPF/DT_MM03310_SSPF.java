/**
 * DT_MM03310_SSPF.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package kr.co.serveone.EAI.MMM.SSPF;


/**
 * 구매담당자 변경정보 송신 (R&D)
 */
public class DT_MM03310_SSPF  implements java.io.Serializable {
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

    private kr.co.serveone.EAI.MMM.SSPF.DT_MM03310_SSPFPUR_PIC[] PUR_PIC;

    public DT_MM03310_SSPF() {
    }

    public DT_MM03310_SSPF(
           java.lang.String XBUKRS,
           java.lang.String XLANG,
           java.lang.String XROWS,
           java.lang.String XDATE,
           java.lang.String XTIME,
           kr.co.serveone.EAI.MMM.SSPF.DT_MM03310_SSPFPUR_PIC[] PUR_PIC) {
           this.XBUKRS = XBUKRS;
           this.XLANG = XLANG;
           this.XROWS = XROWS;
           this.XDATE = XDATE;
           this.XTIME = XTIME;
           this.PUR_PIC = PUR_PIC;
    }


    /**
     * Gets the XBUKRS value for this DT_MM03310_SSPF.
     * 
     * @return XBUKRS   * 회사코드
     */
    public java.lang.String getXBUKRS() {
        return XBUKRS;
    }


    /**
     * Sets the XBUKRS value for this DT_MM03310_SSPF.
     * 
     * @param XBUKRS   * 회사코드
     */
    public void setXBUKRS(java.lang.String XBUKRS) {
        this.XBUKRS = XBUKRS;
    }


    /**
     * Gets the XLANG value for this DT_MM03310_SSPF.
     * 
     * @return XLANG   * 언어코드
     */
    public java.lang.String getXLANG() {
        return XLANG;
    }


    /**
     * Sets the XLANG value for this DT_MM03310_SSPF.
     * 
     * @param XLANG   * 언어코드
     */
    public void setXLANG(java.lang.String XLANG) {
        this.XLANG = XLANG;
    }


    /**
     * Gets the XROWS value for this DT_MM03310_SSPF.
     * 
     * @return XROWS   * 전송 레코드 갯수
     */
    public java.lang.String getXROWS() {
        return XROWS;
    }


    /**
     * Sets the XROWS value for this DT_MM03310_SSPF.
     * 
     * @param XROWS   * 전송 레코드 갯수
     */
    public void setXROWS(java.lang.String XROWS) {
        this.XROWS = XROWS;
    }


    /**
     * Gets the XDATE value for this DT_MM03310_SSPF.
     * 
     * @return XDATE   * 호출날짜(YYYYMMDD)
     */
    public java.lang.String getXDATE() {
        return XDATE;
    }


    /**
     * Sets the XDATE value for this DT_MM03310_SSPF.
     * 
     * @param XDATE   * 호출날짜(YYYYMMDD)
     */
    public void setXDATE(java.lang.String XDATE) {
        this.XDATE = XDATE;
    }


    /**
     * Gets the XTIME value for this DT_MM03310_SSPF.
     * 
     * @return XTIME   * 호출시간(HHMMSS, 24H)
     */
    public java.lang.String getXTIME() {
        return XTIME;
    }


    /**
     * Sets the XTIME value for this DT_MM03310_SSPF.
     * 
     * @param XTIME   * 호출시간(HHMMSS, 24H)
     */
    public void setXTIME(java.lang.String XTIME) {
        this.XTIME = XTIME;
    }


    /**
     * Gets the PUR_PIC value for this DT_MM03310_SSPF.
     * 
     * @return PUR_PIC
     */
    public kr.co.serveone.EAI.MMM.SSPF.DT_MM03310_SSPFPUR_PIC[] getPUR_PIC() {
        return PUR_PIC;
    }


    /**
     * Sets the PUR_PIC value for this DT_MM03310_SSPF.
     * 
     * @param PUR_PIC
     */
    public void setPUR_PIC(kr.co.serveone.EAI.MMM.SSPF.DT_MM03310_SSPFPUR_PIC[] PUR_PIC) {
        this.PUR_PIC = PUR_PIC;
    }

    public kr.co.serveone.EAI.MMM.SSPF.DT_MM03310_SSPFPUR_PIC getPUR_PIC(int i) {
        return this.PUR_PIC[i];
    }

    public void setPUR_PIC(int i, kr.co.serveone.EAI.MMM.SSPF.DT_MM03310_SSPFPUR_PIC _value) {
        this.PUR_PIC[i] = _value;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DT_MM03310_SSPF)) return false;
        DT_MM03310_SSPF other = (DT_MM03310_SSPF) obj;
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
            ((this.PUR_PIC==null && other.getPUR_PIC()==null) || 
             (this.PUR_PIC!=null &&
              java.util.Arrays.equals(this.PUR_PIC, other.getPUR_PIC())));
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
        if (getPUR_PIC() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getPUR_PIC());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getPUR_PIC(), i);
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
        new org.apache.axis.description.TypeDesc(DT_MM03310_SSPF.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://serveone.co.kr/EAI/MMM/SSPF", "DT_MM03310_SSPF"));
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
        elemField.setFieldName("PUR_PIC");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PUR_PIC"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://serveone.co.kr/EAI/MMM/SSPF", ">DT_MM03310_SSPF>PUR_PIC"));
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
