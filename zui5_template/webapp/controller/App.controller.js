sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/resource/ResourceModel"
	
], function (Controller, ResourceModel) {
	"use strict";
	return Controller.extend("zui5_template.controller.App", {

		onInit: function () {
			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "zui5_template.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
			
		}
	
	});
});