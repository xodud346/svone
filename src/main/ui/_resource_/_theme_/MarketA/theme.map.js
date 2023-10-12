(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #1b202b")
            					}
            				}
            			},
            			"titlebar" :
            			{
            				"parent" :
            				{
            					"MainFrame" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#7f848d"),
            								"font" : nexacro.FontObject("bold 11px \"Tahoma\""),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#7f848d"),
            								"font" : nexacro.FontObject("bold 11px \"Tahoma\""),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            							}
            						}
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            					}
            				}
            			},
            			"titleicon" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							}
            						}
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"progressbar" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #afaeae, 1px solid #d2d0d0, 1px solid #d2d0d0, 1px solid #d2d0d0")
            							}
            						}
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_decN.png\")"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_decM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_decM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_decP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_decP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_decD.png\")")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_decN.png\")"),
            								"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_decM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_decM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_decP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_decP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_decD.png\")")
            							}
            						}
            					},
            					"hscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									}
            								}
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscDec.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									}
            								},
            								"class" :
            								[
            									{
            										"grd_LF_Menu" :
            										{
            											"self" :
            											{
            												"mouseover" :
            												{
            												},
            												"pushed" :
            												{
            												},
            												"focused" :
            												{
            												},
            												"selected" :
            												{
            												},
            												"disabled" :
            												{
            												}
            											}
            										}
            									},
            									{
            										"grd_LF_MyMenu" :
            										{
            											"self" :
            											{
            												"mouseover" :
            												{
            												},
            												"pushed" :
            												{
            												},
            												"focused" :
            												{
            												},
            												"selected" :
            												{
            												},
            												"disabled" :
            												{
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_incN.png\")"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_incM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_incM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_incP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_incP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Hscl_WF_incD.png\")")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_incN.png\")"),
            								"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_incM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_incM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_incP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_incP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Vscl_WF_incD.png\")")
            							}
            						}
            					},
            					"hscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_hscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									}
            								}
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_vscInc.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            									}
            								},
            								"class" :
            								[
            									{
            										"grd_LF_Menu" :
            										{
            											"self" :
            											{
            												"mouseover" :
            												{
            												},
            												"pushed" :
            												{
            												},
            												"focused" :
            												{
            												},
            												"selected" :
            												{
            												},
            												"disabled" :
            												{
            												}
            											}
            										}
            									},
            									{
            										"grd_LF_MyMenu" :
            										{
            											"self" :
            											{
            												"mouseover" :
            												{
            												},
            												"pushed" :
            												{
            												},
            												"focused" :
            												{
            												},
            												"selected" :
            												{
            												},
            												"disabled" :
            												{
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"VScrollIndicatorControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"HScrollIndicatorControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"hscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #929292"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_hsclTrackbarImg.png\")")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("1px solid #929292"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_hsclTrackbarImg.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #929292"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_hsclTrackbarImg.png\")")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #6a6a6a")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #6a6a6a")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #6a6a6a")
            									}
            								}
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #929292"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_vsclTrackbarImg.png\")")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("1px solid #929292"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_vsclTrackbarImg.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #929292"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_vsclTrackbarImg.png\")")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #6a6a6a")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #6a6a6a")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #6a6a6a")
            									}
            								},
            								"class" :
            								[
            									{
            										"grd_LF_Menu" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6")
            												},
            												"mouseover" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6")
            												},
            												"pushed" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6")
            												},
            												"focused" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6")
            												},
            												"selected" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6")
            												},
            												"disabled" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6")
            												}
            											}
            										}
            									},
            									{
            										"grd_LF_MyMenu" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6")
            												},
            												"mouseover" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6")
            												},
            												"pushed" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6")
            												},
            												"focused" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6")
            												},
            												"selected" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6")
            												},
            												"disabled" :
            												{
            													"border" : nexacro.BorderObject("2px solid #d6d6d6")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#333333"),
            						"font" : nexacro.FontObject("12px \"Gulim\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#333333"),
            						"font" : nexacro.FontObject("12px \"Gulim\"")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#333333"),
            						"font" : nexacro.FontObject("12px \"Gulim\"")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#333333"),
            						"font" : nexacro.FontObject("12px \"Gulim\"")
            					},
            					"contents" :
            					{
            					}
            				}
            			},
            			"hscrollbar" :
            			{
            				"parent" :
            				{
            					"Form" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c9c6c3, 0px none, 0px none, 0px none"),
            								"padding" : nexacro.PaddingObject("0px 1px 0px 1px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c9c6c3, 0px none, 0px none, 0px none"),
            								"padding" : nexacro.PaddingObject("0px 1px 0px 1px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c9c6c3, 0px none, 0px none, 0px none"),
            								"padding" : nexacro.PaddingObject("0px 1px 0px 1px")
            							}
            						}
            					}
            				}
            			},
            			"vscrollbar" :
            			{
            				"parent" :
            				{
            					"Form" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #c9c6c3"),
            								"padding" : nexacro.PaddingObject("1px 0px 1px 0px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #c9c6c3"),
            								"padding" : nexacro.PaddingObject("1px 0px 1px 0px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #c9c6c3"),
            								"padding" : nexacro.PaddingObject("1px 0px 1px 0px")
            							}
            						},
            						"class" :
            						[
            							{
            								"grd_LF_Menu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										}
            									}
            								}
            							},
            							{
            								"grd_LF_MyMenu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8a8a8a")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8a8a8a")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5b5b5b")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5b5b5b")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5b5b5b"),
            						"padding" : nexacro.PaddingObject("2px 0px 0px 0px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            						"color" : nexacro.ColorObject("#909090")
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_TF_Pre" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Nxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Logout" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#b0b7ba"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#b0b7ba"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#b0b7ba"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#999999")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"font" : nexacro.FontObject("bold 14px \"Gulim\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#959ba3")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_MenuS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443"),
            									"font" : nexacro.FontObject("bold 14px \"Gulim\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443"),
            									"font" : nexacro.FontObject("bold 14px \"Gulim\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443"),
            									"font" : nexacro.FontObject("bold 14px \"Gulim\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443"),
            									"font" : nexacro.FontObject("bold 14px \"Gulim\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443"),
            									"font" : nexacro.FontObject("bold 14px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            									"color" : nexacro.ColorObject("#f2b443"),
            									"font" : nexacro.FontObject("bold 14px \"Gulim\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Home" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Btn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #333b49, 0px none, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 34px 0px 15px"),
            									"color" : nexacro.ColorObject("#a1a7b0")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #333b49, 0px none, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 34px 0px 15px"),
            									"color" : nexacro.ColorObject("#a1a7b0")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #333b49, 0px none, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 34px 0px 15px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #333b49, 0px none, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 34px 0px 15px"),
            									"color" : nexacro.ColorObject("#69717d")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_BtnS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 15px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_X" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Pre" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_preN.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_preN.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_preN.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_preM.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1d2532"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_preM.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_preD.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Nxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_nxtN.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_nxtN.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_nxtN.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_nxtM.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1d2532"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_nxtM.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_nxtD.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Max" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_maxN.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_maxN.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_maxN.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_maxM.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1d2532"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_maxM.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_maxD.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Min" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_minN.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_minN.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_minN.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_minM.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1d2532"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_minM.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_minD.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_V" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_vN.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_vN.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_vN.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_vM.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1d2532"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_vM.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_vD.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_H" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_hN.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_hN.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_hN.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_hM.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1d2532"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_hM.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_hD.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Allx" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_allxN.png\") no-repeat")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_allxN.png\") no-repeat")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_allxN.png\") no-repeat")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_allxM.png\") no-repeat")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1d2532"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_allxM.png\") no-repeat")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #27303d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_allxD.png\") no-repeat")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CRUD" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Input" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Input.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Input_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Input_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Copy" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Copy.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Copy_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Copy_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Delete" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Delete.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Delete_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Delete_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Cancel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Cancel.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Cancel_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Cancel_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Save2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save2.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save2_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save2_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Print" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Print.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Print_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Print_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Excel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Excel.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Excel_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Excel_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Request" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Request.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Request_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Request_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Present" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Present.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Present_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Present_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Draft" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Draft.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Draft_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Draft_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Help" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Help.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Help_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Help_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Favorit" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Favorit.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Favorit_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Favorit_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Guide" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Guide.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Guide_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Guide_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Rule" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Rule.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Rule_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Rule_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #777777"),
            									"color" : nexacro.ColorObject("#1b202b"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Close.png\")"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Close_O.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #424651"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Close_O.png\")")
            								},
            								"pushed" :
            								{
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLN.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLN.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLM.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLM.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleR" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRN.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRN.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRM.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRM.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleT" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTN.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTN.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTM.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTM.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleB" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBN.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBN.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBM.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBM.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_AddFile" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_AddFile.png\")"),
            									"iconPosition" : "left"
            								},
            								"mouseover" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_AddFile.png\")"),
            									"iconPosition" : "left"
            								},
            								"pushed" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_AddFile.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_AddFile.png\")"),
            									"iconPosition" : "left"
            								},
            								"selected" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_AddFile.png\")"),
            									"iconPosition" : "left"
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_DelAll" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DelAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"mouseover" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DelAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"pushed" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DelAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DelAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"selected" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_DelAll.png\")"),
            									"iconPosition" : "left"
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Save" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save.png\")"),
            									"iconPosition" : "left"
            								},
            								"mouseover" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save.png\")"),
            									"iconPosition" : "left"
            								},
            								"pushed" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save.png\")"),
            									"iconPosition" : "left"
            								},
            								"focused" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save.png\")"),
            									"iconPosition" : "left"
            								},
            								"selected" :
            								{
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Save.png\")"),
            									"iconPosition" : "left"
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Add" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Del" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0b4f7c"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0b4f7c"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0b4f7c"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0b4f7c"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #043a5e"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 18px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8d8d8d"),
            									"color" : nexacro.ColorObject("#e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_SearchSmall" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schM.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schM.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Open" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_OpenP.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Open.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Basic" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            									"border" : nexacro.BorderObject("1px solid #1081d3"),
            									"color" : nexacro.ColorObject("#1081d3"),
            									"font" : nexacro.FontObject("12px \"맑은 고딕\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1081d3"),
            									"color" : nexacro.ColorObject("#1081d3")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1081d3"),
            									"color" : nexacro.ColorObject("#1081d3")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1081d3"),
            									"color" : nexacro.ColorObject("#1081d3")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1081d3"),
            									"color" : nexacro.ColorObject("#1081d3")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1081d3"),
            									"color" : nexacro.ColorObject("#1081d3")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_blue_Basic" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 15px 0px 15px"),
            									"border" : nexacro.BorderObject("1px solid #1081d3"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"맑은 고딕\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1081d3")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1081d3")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1081d3")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1081d3")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1081d3"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_CloseP.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8, 1px solid #d8d8d8, 1px solid #d8d8d8, 0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Close.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#b1d3f4"),
            									"font" : nexacro.FontObject("bold 13px \"Tahoma\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#b1d3f4")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_MenuS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 13px \"Tahoma\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 13px \"Tahoma\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 13px \"Tahoma\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 13px \"Tahoma\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 13px \"Tahoma\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#aed6fd")
            								}
            							}
            						}
            					},
            					{
            						"btn_BF_Extend" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#868686"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#868686"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#868686"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#868686"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#868686"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            									"color" : nexacro.ColorObject("#868686"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LOGIN_Login" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LOGIN_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LOGIN_Login2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://btn_LOGIN_Login.png\")"),
            									"iconPosition" : "left",
            									"edge" : nexacro.EdgeImageObject("none"),
            									"textPadding" : nexacro.PaddingObject("10px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"icon" : nexacro.UrlObject("URL(\"theme://btn_LOGIN_Login.png\")"),
            									"iconPosition" : "left",
            									"edge" : nexacro.EdgeImageObject("none"),
            									"textPadding" : nexacro.PaddingObject("10px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_MultiCombo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://cmb_WF_Drop.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://cmb_WF_Drop.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://cmb_WF_Drop.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://cmb_WF_Drop_O.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://cmb_WF_Drop_O.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://cmb_WF_Drop_D.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Btn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("url(\"theme://btn_POP_Btn_N.png\") 5px 9px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"edge" : nexacro.EdgeImageObject("url(\"theme://btn_POP_Btn_N.png\") 5px 9px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"edge" : nexacro.EdgeImageObject("url(\"theme://btn_POP_Btn_O.png\") 5px 9px")
            								},
            								"selected" :
            								{
            									"edge" : nexacro.EdgeImageObject("url(\"theme://btn_POP_Btn_O.png\") 5px 9px")
            								},
            								"pushed" :
            								{
            									"edge" : nexacro.EdgeImageObject("url(\"theme://btn_POP_Btn_P.png\") 5px 9px")
            								},
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("url(\"theme://btn_POP_Btn_D.png\") 5px 9px"),
            									"color" : nexacro.ColorObject("#acacac")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GrdPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev_O.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev_O.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev_O.png\")")
            								},
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev_D.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GrdPrev2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev2.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev2.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev2_O.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev2_O.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev2_O.png\")")
            								},
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdPrev2_D.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GrdNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext_O.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext_O.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext_O.png\")")
            								},
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext_D.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GrdNext2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext2.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d8d8d8"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext2.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext2_O.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext2_O.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d14221"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext2_O.png\")")
            								},
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"icon" : nexacro.UrlObject("url(\"theme://btn_WF_GrdNext2_D.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GrdPage" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#444444"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#444444"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"edge" : nexacro.EdgeImageObject("none")
            								},
            								"pushed" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221")
            								},
            								"selected" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221")
            								},
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#b1b1b1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_GrdPageS" :
            						{
            							"self" :
            							{
            								"disabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#b1b1b1")
            								},
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"mouseover" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"focused" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"pushed" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"selected" :
            								{
            									"edge" : nexacro.EdgeImageObject("none"),
            									"color" : nexacro.ColorObject("#d14221"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekDropButton" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekPrevButton" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekNextButton" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_gantt01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #005ebd")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #005ebd")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #005ebd")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #005ebd")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #004a96")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #005ebd")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_gantt02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"border" : nexacro.BorderObject("1px solid #dcbf39")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"border" : nexacro.BorderObject("1px solid #dcbf39")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"border" : nexacro.BorderObject("1px solid #dcbf39")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"border" : nexacro.BorderObject("1px solid #dcbf39")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"border" : nexacro.BorderObject("1px solid #f3b01f")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"border" : nexacro.BorderObject("1px solid #dcbf39")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_gantt03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #d61e1e")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #d61e1e")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #d61e1e")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #d61e1e")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #ab0000")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #d61e1e")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_sendMsg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #aaaaaa"),
            									"color" : nexacro.ColorObject("#aaaaaa"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic")
            								}
            							}
            						}
            					}
            				]
            			},
            			"ButtonControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            					}
            				}
            			},
            			"CalendarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					}
            				}
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            							},
            							"nulltext" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"focused" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"readonly" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"nulltext" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnN.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnN.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnD.png\")")
            							}
            						}
            					},
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnN.png\")"),
            								"iconPosition" : "left"
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnM.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnD.png\")")
            							}
            						},
            						"class" :
            						[
            							{
            								"cmb_LOGIN_Language" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"icon" : nexacro.UrlObject("url(\"theme://cmb_LOGIN_Drop.png\")")
            										},
            										"mouseover" :
            										{
            											"icon" : nexacro.UrlObject("url(\"theme://cmb_LOGIN_Drop_O.png\")")
            										},
            										"focused" :
            										{
            											"icon" : nexacro.UrlObject("url(\"theme://cmb_LOGIN_Drop_O.png\")")
            										},
            										"pushed" :
            										{
            											"icon" : nexacro.UrlObject("url(\"theme://cmb_LOGIN_Drop_O.png\")")
            										},
            										"disabled" :
            										{
            										}
            									}
            								}
            							}
            						]
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnN.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnN.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnP.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_btnD.png\")")
            									}
            								}
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnN.png\")"),
            										"iconPosition" : "left"
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnM.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnM.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_WF_btnD.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnD.png\")")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnD.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnD.png\")")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnD.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageN.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageM.png')")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageD.png')")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageS.png')")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageD.png')")
            					},
            					"disabled_selected" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageDS.png')")
            					}
            				}
            			},
            			"CheckBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageN.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageM.png')")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageD.png')")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageS.png')")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageD.png')")
            					},
            					"disabled_selected" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageDS.png')")
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"cbo_LOGIN_Language" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd")
            								}
            							}
            						}
            					},
            					{
            						"cmb_LOGIN_Language" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dfdfdf")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1e81e6")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1e81e6")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #eaeaea")
            								}
            							}
            						}
            					}
            				]
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"nulltext" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							}
            						},
            						"class" :
            						[
            							{
            								"cbo_LOGIN_Language" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"font" : nexacro.FontObject("13px \"Gulim\"")
            										},
            										"nulltext" :
            										{
            											"color" : nexacro.ColorObject("#cbcbcb"),
            											"font" : nexacro.FontObject("13px \"Gulim\"")
            										}
            									}
            								}
            							},
            							{
            								"cmb_LOGIN_Language" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"padding" : nexacro.PaddingObject("0px 10px 0px 15px"),
            											"color" : nexacro.ColorObject("#555555")
            										},
            										"mouseover" :
            										{
            											"padding" : nexacro.PaddingObject("0px 10px 0px 15px"),
            											"color" : nexacro.ColorObject("#555555")
            										},
            										"focused" :
            										{
            											"padding" : nexacro.PaddingObject("0px 10px 0px 15px"),
            											"color" : nexacro.ColorObject("#555555")
            										},
            										"disabled" :
            										{
            											"color" : nexacro.ColorObject("#d6d6d6")
            										},
            										"nulltext" :
            										{
            											"color" : nexacro.ColorObject("#aaaaaa")
            										}
            									}
            								}
            							}
            						]
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"focused" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"readonly" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"nulltext" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#909090")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a")
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("12px Gulim"),
            										"color" : nexacro.ColorObject("#555555")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"combolist" :
            					{
            						"parent" :
            						{
            							"Combo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px 3px 5px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px 3px 5px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"readonly" :
            									{
            										"padding" : nexacro.PaddingObject("5px 3px 5px 8px"),
            										"font" : nexacro.FontObject("12px \"Gulim\"")
            									},
            									"mouseover" :
            									{
            									},
            									"focused" :
            									{
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									}
            								}
            							},
            							"cellcombo" :
            							{
            								"parent" :
            								{
            									"ListViewCellControl" :
            									{
            										"self" :
            										{
            											"mouseover" :
            											{
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 3px 5px 8px")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("5px 3px 5px 8px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("5px 3px 5px 8px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#333333")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							}
            						}
            					},
            					"ListBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Gulim\"")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Gulim\"")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Gulim\"")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#333333")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							}
            						}
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					}
            				}
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            							}
            						}
            					},
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d6d5d2, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d6d5d2, 0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d6d5d2, 0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d6d5d2, 0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d6d5d2, 0px none")
            							}
            						},
            						"class" :
            						[
            							{
            								"grd_WF_chatList" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_preN.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_preM.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_preM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_preP.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_preP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_preD.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnUpBtnN.png\")"),
            								"padding" : nexacro.PaddingObject("4px 5px 6px 5px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnUpBtnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnUpBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnUpBtnP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnUpBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnUpBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_nxtN.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_nxtM.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_nxtM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_nxtP.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_nxtP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_nxtD.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnDnBtnN.png\")"),
            								"padding" : nexacro.PaddingObject("4px 5px 6px 5px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnDnBtnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnDnBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnDnBtnP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnDnBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_spnDnBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"yearspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											},
            											"mouseover" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											},
            											"focused" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											},
            											"disabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											},
            											"mouseover" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											},
            											"focused" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											},
            											"disabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 4px 0px 4px"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("11px \"Dotum\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"nulltext" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            											},
            											"focused" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            											},
            											"selected" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            											},
            											"focused" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            											},
            											"selected" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_upBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            											},
            											"focused" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            											},
            											"selected" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            											},
            											"focused" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            											},
            											"selected" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_dnBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"monthspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"color" : nexacro.ColorObject("#333333"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"disabled" :
            							{
            							},
            							"readonly" :
            							{
            							}
            						}
            					},
            					"Grid" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"disabled" :
            							{
            							},
            							"readonly" :
            							{
            							}
            						},
            						"class" :
            						[
            							{
            								"grd_TF_Search" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"readonly" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_LF_Menu" :
            								{
            									"self" :
            									{
            										"mouseover" :
            										{
            										},
            										"focused" :
            										{
            										},
            										"disabled" :
            										{
            										},
            										"readonly" :
            										{
            										}
            									}
            								}
            							},
            							{
            								"grd_LF_MyMenu" :
            								{
            									"self" :
            									{
            										"mouseover" :
            										{
            										},
            										"focused" :
            										{
            										},
            										"disabled" :
            										{
            										},
            										"readonly" :
            										{
            										}
            									}
            								}
            							},
            							{
            								"grd_WF_chatList" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					},
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("12px Gulim")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("12px Gulim")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("12px Gulim")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("12px Gulim")
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"weekband" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #455060, 0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"readonly" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#13b6fc")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#fd6881")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"disabled" :
            									{
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"readonly" :
            									{
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"day" :
            									{
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("11px \"Dotum\"")
            									},
            									"mouseover_sunday" :
            									{
            										"color" : nexacro.ColorObject("#fd6881")
            									},
            									"mouseover_saturday" :
            									{
            										"color" : nexacro.ColorObject("#13b6fc")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 11px \"Dotum\"")
            									},
            									"today" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#096eb1")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ff6d55")
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#bfbfbf")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Div" :
            			{
            				"self" :
            				{
            					"disabled" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"div_WF_SearchBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c3c3c3")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_SearchBgp" :
            						{
            							"self" :
            							{
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c3c3c3")
            								}
            							}
            						}
            					},
            					{
            						"div_LOGIN_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d9d9d9")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_chatBg01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            						"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#aaaaaa")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"edi_TF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#7b8ca3"),
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								}
            							}
            						}
            					},
            					{
            						"edi_LOGIN_ID" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 38px"),
            									"font" : nexacro.FontObject("13px \"Gulim\"")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"color" : nexacro.ColorObject("#cbcbcb"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 38px"),
            									"font" : nexacro.FontObject("13px \"Gulim\"")
            								}
            							}
            						}
            					},
            					{
            						"edi_LOGIN_PW" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 38px"),
            									"font" : nexacro.FontObject("13px \"Gulim\"")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddddd"),
            									"color" : nexacro.ColorObject("#cbcbcb"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 38px"),
            									"font" : nexacro.FontObject("13px \"Gulim\"")
            								}
            							}
            						}
            					},
            					{
            						"edt_LOGIN_ID" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dfdfdf"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 15px"),
            									"color" : nexacro.ColorObject("#555555")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1e81e6")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1e81e6")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #eaeaea"),
            									"color" : nexacro.ColorObject("#d6d6d6")
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#8c8c8c")
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekEdit" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"readonly" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"ed_WF_chartText" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic"),
            									"padding" : nexacro.PaddingObject("7px 12px 7px 12px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic"),
            									"padding" : nexacro.PaddingObject("7px 12px 7px 12px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic"),
            									"padding" : nexacro.PaddingObject("7px 12px 7px 12px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic"),
            									"padding" : nexacro.PaddingObject("7px 12px 7px 12px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #777777")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #404040")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #404040")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #404040"),
            						"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					}
            				}
            			},
            			"FileUpload" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"focused" :
            					{
            					},
            					"selected" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #777777"),
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_AddFile.png\")"),
            										"iconPosition" : "left"
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #404040")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #404040")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #404040"),
            										"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("1px solid #404040"),
            										"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#909090")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            									},
            									"nulltext" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 8px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"GoogleMap" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"focused" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #838383, 1px solid #c9c6c3, 1px solid #c9c6c3, 1px solid #c9c6c3")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #838383, 1px solid #c9c6c3, 1px solid #c9c6c3, 1px solid #c9c6c3")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #838383, 1px solid #c9c6c3, 1px solid #c9c6c3, 1px solid #c9c6c3")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #838383, 1px solid #c9c6c3, 1px solid #c9c6c3, 1px solid #c9c6c3")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #838383, 1px solid #c9c6c3, 1px solid #c9c6c3, 1px solid #c9c6c3")
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_TF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								}
            							}
            						}
            					},
            					{
            						"grd_LF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#383838")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#383838")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#383838")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#383838")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#383838")
            								}
            							}
            						}
            					},
            					{
            						"grd_LF_MyMenu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#383838")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#383838")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#383838")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#383838")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#383838")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_Detail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cecccd")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cecccd")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cecccd")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cecccd")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_chatList" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222")
            								}
            							}
            						}
            					}
            				]
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e1e0de"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e1e0de"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            											},
            											"selected" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e1e0de"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e1e0de"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            											},
            											"readonly" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e1e0de"),
            												"color" : nexacro.ColorObject("#333333"),
            												"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            											},
            											"focused" :
            											{
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_WF_chatList" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("9pt Arial,Malgun Gothic"),
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"mouseover" :
            														{
            															"font" : nexacro.FontObject("9pt Arial,Malgun Gothic"),
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"focused" :
            														{
            															"font" : nexacro.FontObject("9pt Arial,Malgun Gothic"),
            															"border" : nexacro.BorderObject("0px none")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df"),
            												"color" : nexacro.ColorObject("#333333"),
            												"padding" : nexacro.PaddingObject("4px 6px 4px 6px")
            											},
            											"focused" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df"),
            												"color" : nexacro.ColorObject("#333333"),
            												"padding" : nexacro.PaddingObject("4px 6px 4px 6px")
            											},
            											"readonly" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df"),
            												"color" : nexacro.ColorObject("#333333"),
            												"padding" : nexacro.PaddingObject("4px 6px 4px 6px")
            											},
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            												"font" : nexacro.FontObject("12px \"Gulim\"")
            											},
            											"disabled" :
            											{
            												"color" : nexacro.ColorObject("#777777")
            											},
            											"disabled_selected" :
            											{
            												"color" : nexacro.ColorObject("#777777")
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_TF_Search" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														},
            														"readonly" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            														}
            													}
            												}
            											},
            											{
            												"grd_LF_Menu" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#383838"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#383838"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"readonly" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#383838"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"mouseover" :
            														{
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#095db3"),
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#808080")
            														},
            														"disabled_selected" :
            														{
            															"color" : nexacro.ColorObject("#808080")
            														}
            													}
            												}
            											},
            											{
            												"grd_LF_MyMenu" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#383838"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#383838"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"readonly" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#383838"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#383838"),
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#383838"),
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#808080")
            														},
            														"disabled_selected" :
            														{
            															"color" : nexacro.ColorObject("#808080")
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_chatList" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("3px 5px 3px 5px")
            														},
            														"focused" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("3px 5px 3px 5px")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("3px 5px 3px 5px")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("3px 5px 3px 5px")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"focused_selected" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"mouseover_selected" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"disabled_selected" :
            														{
            															"color" : nexacro.ColorObject("#222222"),
            															"border" : nexacro.BorderObject("0px none")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df")
            											},
            											"focused" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df")
            											},
            											"selected" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df")
            											},
            											"readonly" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e2e0df")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c9cf")
            									}
            								}
            							}
            						}
            					},
            					"detail" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c9cf")
            									}
            								}
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"cellOutUser" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#ffffff")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#ffffff")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cellInUser" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#ffffff")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#ffffff")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lev0" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#383838"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"disabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e1e1, 0px none"),
            															"color" : nexacro.ColorObject("#383838"),
            															"padding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            															"font" : nexacro.FontObject("12px \"Dotum\"")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#383838"),
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														},
            														"focused" :
            														{
            															"color" : nexacro.ColorObject("#383838"),
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#383838"),
            															"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Cell_WF_Fixed" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #cacaca, 1px solid #cacaca, 2px solid black, 1px solid #cacaca")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"Cell_WF_NoBorder_Bottom" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #e2e0df,1px solid #e2e0df,0px solid")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekWeekColor" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#115fac")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekGrayColor" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#cccccc")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekDayColor" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#333333")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekSunColor" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#d40009")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekSatColor" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#d40009")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekTodayColor" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("red")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"summary" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #eed196, 0px none, 0px none, 0px none"),
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #eed196, 0px none, 0px none, 0px none"),
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #eed196, 0px none, 0px none, 0px none"),
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #eed196, 0px none, 0px none, 0px none"),
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("1px solid #eed196, 0px none, 0px none, 0px none"),
            								"color" : nexacro.ColorObject("#333333"),
            								"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            							}
            						}
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #8a8a8a")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #404040")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #404040")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #404040"),
            								"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #404040"),
            								"padding" : nexacro.PaddingObject("1px 0px 0px 0px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #777777"),
            								"color" : nexacro.ColorObject("#909090")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px Gulim"),
            								"color" : nexacro.ColorObject("#555555"),
            								"border" : nexacro.BorderObject("1px solid #c2c2c2")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#bbbbbb"),
            								"border" : nexacro.BorderObject("1px solid #d9d9d9")
            							}
            						}
            					}
            				}
            			},
            			"cellcalendar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							},
            							"readonly" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px Gulim")
            							}
            						}
            					}
            				}
            			},
            			"cellcheckbox" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageN.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageM.png')")
            							},
            							"readonly" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageD.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageS.png')")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageD.png')")
            							},
            							"disabled_selected" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_btnImageDS.png')")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px Gulim")
            							}
            						}
            					}
            				}
            			},
            			"cellcombo" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							},
            							"readonly" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px Gulim")
            							}
            						}
            					}
            				}
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Gulim\"")
            							},
            							"nulltext" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Gulim\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							},
            							"readonly" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px Gulim"),
            								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_schN.png\")")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Grdexpand.png')")
            							}
            						}
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Gulim\"")
            							},
            							"nulltext" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            								"font" : nexacro.FontObject("12px \"Gulim\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							},
            							"readonly" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px Gulim"),
            								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5a86cd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"celltextarea" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            								"padding" : nexacro.PaddingObject("10px 10px 0px 10px"),
            								"font" : nexacro.FontObject("12px \"Gulim\"")
            							},
            							"nulltext" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            								"padding" : nexacro.PaddingObject("10px 10px 0px 10px"),
            								"font" : nexacro.FontObject("12px \"Gulim\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0082dd")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							},
            							"readonly" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px Gulim")
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeClose.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeClose.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeClose.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeClose.png\")")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeClose.png\")")
            									},
            									"leaf" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeClose.png\")")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeOpen.png\")")
            									}
            								}
            							},
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"class" :
            														[
            															{
            																"grd_LF_Menu" :
            																{
            																	"self" :
            																	{
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_MenuCollapse.png\")")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_MenuExpand.png\")")
            																		}
            																	}
            																}
            															},
            															{
            																"grd_WF_chatList" :
            																{
            																	"self" :
            																	{
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("URL('imagerc::img_TreeCollapse.png')")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("URL('imagerc::img_TreeExpand.png')")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"leaf" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_treeItem.png\")")
            									}
            								}
            							},
            							"cell" :
            							{
            								"class" :
            								[
            									{
            										"lev1" :
            										{
            											"parent" :
            											{
            												"row" :
            												{
            													"parent" :
            													{
            														"body" :
            														{
            															"parent" :
            															{
            																"Grid" :
            																{
            																	"self" :
            																	{
            																		"leaf" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_MenuItem.png\")")
            																		}
            																	}
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								],
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"class" :
            														[
            															{
            																"grd_LF_MyMenu" :
            																{
            																	"self" :
            																	{
            																		"leaf" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_MenuItem.png\")")
            																		}
            																	}
            																}
            															},
            															{
            																"grd_WF_chatList" :
            																{
            																	"self" :
            																	{
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("URL('imagerc::img_TreeClose.png')")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("URL('imagerc::img_TreeOpen.png')")
            																		},
            																		"enabled" :
            																		{
            																			"icon" : nexacro.UrlObject("URL('imagerc::img_TreeItem.png')")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"celltreeline" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"GroupBox" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9a9a9a")
            							}
            						}
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            						"padding" : nexacro.PaddingObject("0px 8px 0px 3px")
            					},
            					"nulltext" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            						"padding" : nexacro.PaddingObject("0px 8px 0px 3px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            					}
            				}
            			},
            			"Menu" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"focused" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 35px 0px 30px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 16px \"Gulim\"")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#f2b443"),
            								"font" : nexacro.FontObject("bold 16px \"Gulim\"")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#f2b443"),
            								"font" : nexacro.FontObject("bold 16px \"Gulim\"")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#f2b443"),
            								"font" : nexacro.FontObject("bold 16px \"Gulim\"")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#949aa2"),
            								"font" : nexacro.FontObject("bold 16px \"Gulim\"")
            							}
            						}
            					}
            				}
            			},
            			"menupopupmenu" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #313948")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #313948")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #313948")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"menupopupmenu" :
            					{
            						"parent" :
            						{
            							"Menu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #393838, 0px none"),
            										"padding" : nexacro.PaddingObject("8px 10ox 8px 20px"),
            										"color" : nexacro.ColorObject("#fdfeff")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #393838, 0px none"),
            										"padding" : nexacro.PaddingObject("8px 10ox 8px 20px"),
            										"color" : nexacro.ColorObject("#fdfeff")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#434f5f")
            									}
            								}
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px 8px 8px 8px"),
            								"color" : nexacro.ColorObject("#46463d"),
            								"font" : nexacro.FontObject("12px \"Dotum\"")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#fdfeff")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#fdfeff")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#fdfeff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px 8px 8px 8px"),
            								"color" : nexacro.ColorObject("#46463d")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#fdfeff")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#fdfeff")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#fdfeff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#909090")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"menupopupmenu" :
            							{
            								"parent" :
            								{
            									"Menu" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 30px 0px 10px")
            											},
            											"mouseover" :
            											{
            												"padding" : nexacro.PaddingObject("0px 30px 0px 10px")
            											},
            											"disabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 30px 0px 10px")
            											}
            										}
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"disabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"menupopupmenu" :
            							{
            								"parent" :
            								{
            									"Menu" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Popupexpand.png\")")
            											}
            										}
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_expand.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_expand.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_expandS.png\")")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_expand.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_expand.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_expandS.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					}
            				}
            			},
            			"popupmenuitemcheckbox" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImage.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImage.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImage.png\")")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImage.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImage.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_btnImage.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b2b2b2"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px"),
            						"color" : nexacro.ColorObject("#ffffff")
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"progressstartcap" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_BF_pgb.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_BF_pgb.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_BF_pgbD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"progressendcap" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_BF_pgb.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_BF_pgb.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_BF_pgbD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"Radio" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"focused" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_N.png\")"),
            								"iconPosition" : "left",
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            							},
            							"readonly" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_N.png\")"),
            								"iconPosition" : "left",
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_M.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_S.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_S.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_D.png\")")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_Radio_DS.png\")")
            							}
            						}
            					}
            				}
            			},
            			"Sketch" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            					}
            				}
            			},
            			"Static" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#777777")
            					}
            				},
            				"class" :
            				[
            					{
            						"sta_TF_Welcome" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #5c6068, 0px none, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#b0b7ba"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #5c6068, 0px none, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#b0b7ba"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Navi" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("6px 0px 0px 0px"),
            									"font" : nexacro.FontObject("11px \"Dotum\""),
            									"color" : nexacro.ColorObject("#777777")
            								},
            								"disabled" :
            								{
            									"padding" : nexacro.PaddingObject("6px 0px 0px 0px"),
            									"font" : nexacro.FontObject("11px \"Dotum\""),
            									"color" : nexacro.ColorObject("#777777")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_FileupdownBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c3c3c3")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Fileupload" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px dashed #d6d6d6"),
            									"color" : nexacro.ColorObject("#999999")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_SearchLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								},
            								"disabled" :
            								{
            									"font" : nexacro.FontObject("bold 12px \"Gulim\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta_LF_Bg01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbe1e5, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#828894"),
            									"font" : nexacro.FontObject("bold 11px \"Tahoma\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbe1e5, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#828894"),
            									"font" : nexacro.FontObject("bold 11px \"Tahoma\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_BT_Bg01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbe1e5, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#828894"),
            									"font" : nexacro.FontObject("bold 11px \"Tahoma\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbe1e5, 1px solid #bfbdbd, 0px none, 0px none"),
            									"color" : nexacro.ColorObject("#828894"),
            									"font" : nexacro.FontObject("bold 11px \"Tahoma\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_BT_Bg02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbe1e5, 0px none, 0px none, 0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dbe1e5, 0px none, 0px none, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_BF_Section" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								},
            								"disabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("11px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_LOGIN_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1b202b")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"padding" : nexacro.PaddingObject("10px 0px 0px 15px"),
            									"border" : nexacro.BorderObject("1px solid #f4b97a")
            								},
            								"mouseover" :
            								{
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"padding" : nexacro.PaddingObject("10px 0px 0px 15px"),
            									"border" : nexacro.BorderObject("1px solid #f4b97a")
            								},
            								"disabled" :
            								{
            									"font" : nexacro.FontObject("bold 12px \"Gulim\""),
            									"padding" : nexacro.PaddingObject("10px 0px 0px 15px"),
            									"border" : nexacro.BorderObject("1px solid #f4b97a")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_Legend2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#919191")
            								},
            								"mouseover" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#919191")
            								},
            								"disabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#919191")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_box01L" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c7c7c7"),
            									"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_box02L" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c7c7c7"),
            									"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_box03L" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c7c7c7"),
            									"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
            									"color" : nexacro.ColorObject("black")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_chatTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 13px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_chatBg02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("bold 9pt Malgun Gothic"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_chatBg03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cbcbcb, 1px solid #cbcbcb, 1px solid #cbcbcb, 1px solid #ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_chatMember" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 9pt Malgun Gothic")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_chatIcon01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 22px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_chatIcon02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_chatIcon03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_chatIcon04" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_chatIcon05" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("9pt Malgun Gothic")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_chatBox01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("url('imagerc::img_WF_chatBox01.png') 20px 20px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("8pt Malgun Gothic"),
            									"padding" : nexacro.PaddingObject("5px 20px 5px 20px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_chatBox02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("url('imagerc::img_WF_chatBox02.png') 20px 20px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("8pt Malgun Gothic"),
            									"padding" : nexacro.PaddingObject("5px 20px 5px 20px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
            					}
            				}
            			},
            			"stepitem" :
            			{
            				"parent" :
            				{
            					"StepControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							}
            						}
            					}
            				}
            			},
            			"Tab" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            					},
            					"focused" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #777f8b"),
            								"padding" : nexacro.PaddingObject("7px 10px 7px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #777f8b"),
            								"padding" : nexacro.PaddingObject("7px 10px 7px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #777f8b"),
            								"padding" : nexacro.PaddingObject("7px 10px 7px 10px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #6b7078"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#9e9d9d")
            							}
            						}
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_POP_Close.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_POP_Close.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_POP_Close.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_POP_Close.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_POP_Close.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_POP_Close.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitemtext" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #6b7078, 0px none, 0px none, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #6b7078, 0px none, 0px none, 0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #6b7078, 0px none, 0px none, 0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #6b7078, 0px none, 0px none, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            						"padding" : nexacro.PaddingObject("5px 0px 0px 5px")
            					},
            					"nulltext" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9a9a9a"),
            						"padding" : nexacro.PaddingObject("5px 0px 0px 5px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0082dd")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#909090")
            					},
            					"readonly" :
            					{
            					}
            				}
            			},
            			"WebBrowser" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					}
            				}
            			},
            			"PopupDiv" :
            			{
            				"class" :
            				[
            					{
            						"pdv_WF_MonthCalBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #455060")
            								}
            							}
            						}
            					},
            					{
            						"pdiv_WF_MultiCombo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cacaca")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cacaca")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cacaca")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cacaca")
            								}
            							}
            						}
            					},
            					{
            						"CalendarWeekDatePicker" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c7c7c7")
            								}
            							}
            						}
            					}
            				]
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #aeaeae, 1px solid #d2d0d1, 1px solid #d2d0d1, 1px solid #d2d0d1")
            					}
            				}
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            						"color" : nexacro.ColorObject("#666666")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            						"color" : nexacro.ColorObject("#666666")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a86cd")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"detail" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("12px Gulim")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("12px Gulim")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("12px Gulim")
            							},
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("12px Gulim")
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"cellprogressbar" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12px Gulim")
            							}
            						}
            					}
            				}
            			},
            			"expandbar" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c2c2c2")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #a0a0a0")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #a0a0a0")
            									},
            									"pushed" :
            									{
            									},
            									"selected" :
            									{
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#bbbbbb"),
            										"border" : nexacro.BorderObject("1px solid #d9d9d9")
            									}
            								}
            							}
            						}
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_D.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:25, height:25 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_D.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_D.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_O.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_D.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_decN.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_decM.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_decP.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_decD.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_incN.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_incM.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_incP.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Hscl_WF_incD.png")] = { width:3, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_decN.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_decM.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_decP.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_decD.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_incN.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_incM.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_incP.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/Vscl_WF_incD.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_btnN.png")] = { width:13, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_btnM.png")] = { width:13, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_btnP.png")] = { width:13, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_btnD.png")] = { width:13, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_upBtnN.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_upBtnM.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_upBtnP.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_upBtnD.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_dnBtnN.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_dnBtnM.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_dnBtnP.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_dnBtnD.png")] = { width:6, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageN.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageM.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageDS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_btnN.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_btnM.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_btnP.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_btnD.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_preN.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_preM.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_preP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_preD.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_nxtN.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_nxtM.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_nxtP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_nxtD.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_AddFile.png")] = { width:18, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_hscDec.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_hscInc.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_hsclTrackbarImg.png")] = { width:10, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_vscDec.png")] = { width:5, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_vscInc.png")] = { width:5, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_vsclTrackbarImg.png")] = { width:3, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_schN.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_treeClose.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_treeOpen.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_treeItem.png")] = { width:9, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_MenuBar.png")] = { width:2, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImage.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_expand.png")] = { width:5, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_expandS.png")] = { width:5, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_BF_pgb.png")] = { width:1, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_BF_pgbD.png")] = { width:1, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_N.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_M.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_S.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_D.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_DS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem_S.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_POP_Close.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnUpBtnN.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnUpBtnM.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnUpBtnP.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnUpBtnD.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnDnBtnN.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnDnBtnM.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnDnBtnP.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_spnDnBtnD.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_PreN.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_PreP.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NxtN.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NxtP.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Search.png")] = { width:12, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TF_Logo.png")] = { width:225, height:75 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TF_Logo_TOBE.png")] = { width:224, height:75 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TF_TitleBg.png")] = { width:1, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TF_MenuBg.png")] = { width:1, height:49 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_homeN.png")] = { width:38, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_homeD.png")] = { width:38, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/img_MDI_BtnBg.png")] = { width:1, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_XN.png")] = { width:30, height:33 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_XP.png")] = { width:30, height:33 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_preN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_preM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_preD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_nxtN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_nxtM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_nxtD.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_maxN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_maxM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_maxD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_minN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_minM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_minD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_vN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_vM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_vD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_hN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_hM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_hD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_allxN.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_allxM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_allxD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/img_MDI_Bg.png")] = { width:1, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Input.png")] = { width:21, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Input_O.png")] = { width:21, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Copy.png")] = { width:19, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Copy_O.png")] = { width:19, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Delete.png")] = { width:20, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Delete_O.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cancel.png")] = { width:19, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Cancel_O.png")] = { width:19, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Save2.png")] = { width:20, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Save2_O.png")] = { width:20, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Print.png")] = { width:21, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Print_O.png")] = { width:21, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Excel.png")] = { width:21, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Excel_O.png")] = { width:21, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Request.png")] = { width:21, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Request_O.png")] = { width:21, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Present.png")] = { width:22, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Present_O.png")] = { width:22, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Draft.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Draft_O.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Help.png")] = { width:21, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Help_O.png")] = { width:21, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Favorit.png")] = { width:20, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Favorit_O.png")] = { width:20, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Guide.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Guide_O.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Rule.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Rule_O.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Close.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Close_O.png")] = { width:20, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLN.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLM.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLP.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLD.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRN.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRM.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRP.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRD.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTN.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTM.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTP.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTD.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleBN.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleBM.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleBP.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleBD.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_DelAll.png")] = { width:17, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Save.png")] = { width:18, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Add.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Del.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_schAreaN.png")] = { width:21, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_schAreaD.png")] = { width:21, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_schM.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_schP.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_schD.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_schTitle.png")] = { width:2, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Open.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_OpenP.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Close.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_CloseP.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_MenuCollapse.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_MenuExpand.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_MenuItem.png")] = { width:5, height:1 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_MenuBg.png")] = { width:225, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LOGIN_Login.png")] = { width:242, height:43 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LOGIN_Login_O.png")] = { width:242, height:43 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LOGIN_Login_P.png")] = { width:242, height:43 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LOGIN_Close.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_ID.png")] = { width:24, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_PW.png")] = { width:24, height:15 };
        		imgcache[nexacro._getImageLocation("theme://btn_LOGIN_Login.png")] = { width:110, height:32 };
        		imgcache[nexacro._getImageLocation("theme://img_MF_Legend2.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://cmb_LOGIN_Drop.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://cmb_LOGIN_Drop_O.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://cmb_WF_Drop.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://cmb_WF_Drop_O.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://cmb_WF_Drop_D.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://btn_POP_Btn_N.png")] = { width:14, height:20 };
        		imgcache[nexacro._getImageLocation("theme://btn_POP_Btn_O.png")] = { width:14, height:20 };
        		imgcache[nexacro._getImageLocation("theme://btn_POP_Btn_P.png")] = { width:14, height:20 };
        		imgcache[nexacro._getImageLocation("theme://btn_POP_Btn_D.png")] = { width:14, height:20 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdPrev.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdPrev_O.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdPrev_D.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdPrev2.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdPrev2_O.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdPrev2_D.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdNext.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdNext_O.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdNext_D.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdNext2.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdNext2_O.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://btn_WF_GrdNext2_D.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Grdexpand.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://btn_del.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://file_btn_AddFiles.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://file_btn_DeleteAll.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://file_btn_Save.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_DOC.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_ETC.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_IMG.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_PDF.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_PPT.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_TXT.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_XLS.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://file_icon_ZIP.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Noraml.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_D_EN.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_SearchO.png")] = { width:12, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_D.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_O.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_D.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_O.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_D.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_O.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_D.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_O.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_D.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_O.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_D.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_O.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageEN.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageES.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_btnImageSM.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_Ci.png")] = { width:500, height:105 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_Logo.png")] = { width:240, height:57 };
        		imgcache[nexacro._getImageLocation("theme://images/img_main_banner01.png")] = { width:1080, height:346 };
        		imgcache[nexacro._getImageLocation("theme://images/img_main_banner02.png")] = { width:1080, height:346 };
        		imgcache[nexacro._getImageLocation("theme://images/img_main_banner03.png")] = { width:1080, height:346 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TF_TitleIcon.png")] = { width:14, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Grdimg.png")] = { width:12, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_HSplitter.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar_D.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menuimage.png")] = { width:210, height:50 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Nexacro.png")] = { width:108, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck2.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_VSplitter.png")] = { width:5, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar.png")] = { width:5, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar_D.png")] = { width:5, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/miplatform.png")] = { width:1009, height:365 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PopItemImg.png")] = { width:8, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/nexacro14.png")] = { width:1009, height:365 };
        		imgcache[nexacro._getImageLocation("theme://images/nexacro17.png")] = { width:1009, height:365 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_EN.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_ES.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_MDI_XM.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_nexacro17.ico")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/tobewin_logo.png")] = { width:130, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/xplatform.png")] = { width:1009, height:365 };
        		imgcache[nexacro._getImageLocation("theme://img_file.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://img_LOGIN_Ci.png")] = { width:500, height:105 };
        		imgcache[nexacro._getImageLocation("theme://img_WF_SubTitle.png")] = { width:10, height:7 };
        		imgcache[nexacro._getImageLocation("theme://loading.gif")] = { width:200, height:60 };
        		imgcache[nexacro._getImageLocation("theme://theme.map.js")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://theme_chrome.css")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://theme_ie10.css")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://theme_ie11.css")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://theme_runtime.css")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://theme_safari.css")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://마마무.PNG")] = { width:352, height:353 };
        		imgcache[nexacro._getImageLocation("theme://방탄소년단.PNG")] = { width:353, height:353 };
        		imgcache[nexacro._getImageLocation("theme://선미.PNG")] = { width:351, height:353 };
        		imgcache[nexacro._getImageLocation("theme://트와이스.PNG")] = { width:352, height:352 };
	};
}
)();
