/**
 * DT_MM03310_SSPFPUR_PIC.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package kr.co.serveone.EAI.MMM.SSPF;

public class DT_MM03310_SSPFPUR_PIC  implements java.io.Serializable {
    /* IF회사코드 */
    private java.lang.String IF_CO_CD;

    /* 상품ID */
    private java.lang.String PRD_ID;

    /* 구매담당자 사번 */
    private java.lang.String PURG_CHRPSN_ID;

    public DT_MM03310_SSPFPUR_PIC() {
    }

    public DT_MM03310_SSPFPUR_PIC(
           java.lang.String IF_CO_CD,
           java.lang.String PRD_ID,
           java.lang.String PURG_CHRPSN_ID) {
           this.IF_CO_CD = IF_CO_CD;
           this.PRD_ID = PRD_ID;
           this.PURG_CHRPSN_ID = PURG_CHRPSN_ID;
    }


    /**
     * Gets the IF_CO_CD value for this DT_MM03310_SSPFPUR_PIC.
     * 
     * @return IF_CO_CD   * IF회사코드
     */
    public java.lang.String getIF_CO_CD() {
        return IF_CO_CD;
    }


    /**
     * Sets the IF_CO_CD value for this DT_MM03310_SSPFPUR_PIC.
     * 
     * @param IF_CO_CD   * IF회사코드
     */
    public void setIF_CO_CD(java.lang.String IF_CO_CD) {
        this.IF_CO_CD = IF_CO_CD;
    }


    /**
     * Gets the PRD_ID value for this DT_MM03310_SSPFPUR_PIC.
     * 
     * @return PRD_ID   * 상품ID
     */
    public java.lang.String getPRD_ID() {
        return PRD_ID;
    }


    /**
     * Sets the PRD_ID value for this DT_MM03310_SSPFPUR_PIC.
     * 
     * @param PRD_ID   * 상품ID
     */
    public void setPRD_ID(java.lang.String PRD_ID) {
        this.PRD_ID = PRD_ID;
    }


    /**
     * Gets the PURG_CHRPSN_ID value for this DT_MM03310_SSPFPUR_PIC.
     * 
     * @return PURG_CHRPSN_ID   * 구매담당자 사번
     */
    public java.lang.String getPURG_CHRPSN_ID() {
        return PURG_CHRPSN_ID;
    }


    /**
     * Sets the PURG_CHRPSN_ID value for this DT_MM03310_SSPFPUR_PIC.
     * 
     * @param PURG_CHRPSN_ID   * 구매담당자 사번
     */
    public void setPURG_CHRPSN_ID(java.lang.String PURG_CHRPSN_ID) {
        this.PURG_CHRPSN_ID = PURG_CHRPSN_ID;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DT_MM03310_SSPFPUR_PIC)) return false;
        DT_MM03310_SSPFPUR_PIC other = (DT_MM03310_SSPFPUR_PIC) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.IF_CO_CD==null && other.getIF_CO_CD()==null) || 
             (this.IF_CO_CD!=null &&
              this.IF_CO_CD.equals(other.getIF_CO_CD()))) &&
            ((this.PRD_ID==null && other.getPRD_ID()==null) || 
             (this.PRD_ID!=null &&
              this.PRD_ID.equals(other.getPRD_ID()))) &&
            ((this.PURG_CHRPSN_ID==null && other.getPURG_CHRPSN_ID()==null) || 
             (this.PURG_CHRPSN_ID!=null &&
              this.PURG_CHRPSN_ID.equals(other.getPURG_CHRPSN_ID())));
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
        if (getIF_CO_CD() != null) {
            _hashCode += getIF_CO_CD().hashCode();
        }
        if (getPRD_ID() != null) {
            _hashCode += getPRD_ID().hashCode();
        }
        if (getPURG_CHRPSN_ID() != null) {
            _hashCode += getPURG_CHRPSN_ID().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DT_MM03310_SSPFPUR_PIC.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://serveone.co.kr/EAI/MMM/SSPF", ">DT_MM03310_SSPF>PUR_PIC"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("IF_CO_CD");
        elemField.setXmlName(new javax.xml.namespace.QName("", "IF_CO_CD"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PRD_ID");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PRD_ID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PURG_CHRPSN_ID");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PURG_CHRPSN_ID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
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
