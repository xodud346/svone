//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.0.html	
//
//==============================================================================
//==============================================================================
// Object : nexacro.webSocketComponent
// Group : Component
//==============================================================================
if (!nexacro.webSocketComponent)
{
    nexacro.WebSocketMessageEventInfo = function (obj, id, msgtype, msg) 
    {
        this.id = this.eventid = id || "onmessage";
        this.fromobject = this.fromreferenceobject = obj;

        this.msgtype = msgtype;
        this.msg = msg;
	};
    
    var _pWebSocketMessageEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.WebSocketMessageEventInfo);
    nexacro.WebSocketMessageEventInfo.prototype = _pWebSocketMessageEventInfo;
    _pWebSocketMessageEventInfo._type_name = "WebSocketMessageEventInfo";
    
    delete _pWebSocketMessageEventInfo;

    //==============================================================================
    // nexacro.webSocketComponent
    //==============================================================================
    nexacro.webSocketComponent = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Static.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pwebSocketComponent = nexacro._createPrototype(nexacro.Static, nexacro.webSocketComponent);
    nexacro.webSocketComponent.prototype = _pwebSocketComponent;
    _pwebSocketComponent._type_name = "webSocketComponent";
   
   _pwebSocketComponent._event_list = 
   {
		"onmessage" : 1
	};	
	
    //===============================================================
    // nexacro.webSocketComponent : Properties
    //===============================================================
	
	//property 추가 (property 추가시에는 아래와 같이 반드시 추가해야 한다.) 
	_pwebSocketComponent.url = "";
	_pwebSocketComponent.set_url = function(v)
	{
		_pwebSocketComponent.url = v;
	};
	
    //===============================================================
    // nexacro.webSocketComponent : Methods
    //===============================================================
    
	/*
	method 추가
	
	_pwebSocketComponent.usermethod = function ()
    {
		TODO:        
    };
	*/
	
	//char-ws.jsp 구현
	_pwebSocketComponent.wsocket = null;
	
	var gv_entryName;
	var gv_exitName;
	
	var gv_userName;
	var gv_totalCount;
	var gv_controlFlag = 0;
	
	_pwebSocketComponent.connect = function()
    {
		this.wsocket = new WebSocket(this.url);
		this.wsocket.onopen = this.on_wsopen;
		this.wsocket.onmessage = this.on_wsmessage;
		this.wsocket.onclose = this.on_wsclose;
		this.wsocket.parent = this;
	}
	
	_pwebSocketComponent.disconnect = function() 
    {
		if(this.wsocket!=null)this.wsocket.close();
		this.wsocket = null;
	}
	
	_pwebSocketComponent.sendmessage = function(textMessage)
    {
		this.wsocket.send(textMessage);
	}	
    
	_pwebSocketComponent.on_wsopen = function(evt) 
    {
		
	}
	
	_pwebSocketComponent.on_wsmessage = function(evt) 
    {		
		var data = evt.data;		
		this.parent._fire_onmessage(this, "msg", data);
	}
	
	_pwebSocketComponent.on_wsclose = function(evt) 
    {
		this.close();
	}
	
	_pwebSocketComponent._fire_onmessage = function (obj, msgtype, msg) 
    {	
		try 
        {
            if (this.onmessage && this.onmessage._has_handlers) 
            {
                var evt = new nexacro.WebSocketMessageEventInfo(obj, "onmessage", msgtype, msg);
                this.onmessage._fireEvent(this, evt);
            }
        }
        finally
        {
            evt = null;
        }
	};
	
	_pwebSocketComponent.on_destroy_contents = function () 
    {
		if(this.wsocket!=null)this.wsocket.close();
		
		this.wsocket = null;
	}
	
    delete _pwebSocketComponent;
}


