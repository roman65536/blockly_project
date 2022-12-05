Blockly.Blocks['start_project'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start New Project");
    this.appendValueInput("NAME")
        .setCheck("String");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Create a new Project ');
    this.setHelpUrl('');
  }
};

/*
Blockly.Blocks['new_project'] = {
  init: function() {
    this.appendValueInput("PRJ_NAMR")
        .setCheck(null)
        .appendField("Project name ");
    this.appendStatementInput("Steps")
        .setCheck("prj")
        .appendField("Project Steps");
     this.appendDummyInput()
        .appendField('End Date')
        .appendField(new Blockly.FieldDate(''), 'DATE');
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
*/



Blockly.Blocks['new_project'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Project Name")
        .appendField(new Blockly.FieldTextInput("name"), "PRJ_NAME");
    this.appendStatementInput("desc")
        .setCheck("desc")
        .appendField("Project description");
    this.appendStatementInput("party")
        .setCheck("party")
        .appendField("Project Participent");
    this.appendStatementInput("steps")
        .setCheck("prj")
          .appendField("Project Steps");
     this.appendDummyInput()
        .appendField('End Date')
        .appendField(new Blockly.FieldDate(''), 'DATE');
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};




Blockly.Blocks['customer_name'] = {
  init: function() {
     this.appendDummyInput()
        .appendField("New Customer")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "New");
    this.appendDummyInput()
        .appendField("Customer Name");
    this.appendValueInput("NAME")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "prj");
    this.setNextStatement(true, "prj");
    this.setColour(230);
    this.setTooltip('Customer Name as Master Record shows');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['site_id'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Site ID");
    this.appendDummyInput()
        .appendField("New Site ID")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "New");
    this.appendValueInput("SiteID")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Site ID of the System');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nparc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("NPARC");
    this.appendValueInput("Source System Site ID")
        .setCheck("String")
        .appendField("Source Site ID");
    this.appendDummyInput()
	.appendField('date')
        .appendField(new Blockly.FieldDate(''), 'DATE'); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, "install");
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Data Migration Service');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['installation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("System Installation");
    this.appendValueInput("SiteID")
        .setCheck("String");

    this.appendDummyInput()
        .appendField('date')
        .appendField(new Blockly.FieldDate(''), 'DATE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('System installation');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['data_migration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Data Migration");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["BAR","B"], ["NPARC","N"]]), "Type");
    this.appendDummyInput()
        .appendField("Migration ")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "Count");
    this.appendValueInput("src_name")
        .setCheck("String")
        .appendField("Source Site ID");
     this.appendDummyInput()
        .appendField('date')
        .appendField(new Blockly.FieldDate(''), 'DATE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Data Migration Service');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("End");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip('Closing');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['system_installation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("System Installation");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('System installation');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['bar_installation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Bar Installation");
    this.appendValueInput("bar_name")
        .setCheck("String")
        .appendField("Bar Site ID");
    this.appendDummyInput()
        .appendField('date')
        .appendField(new Blockly.FieldDate(''), 'DATE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Bar Installation');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['decomision'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("System Decomision");
    this.appendValueInput("sys_name")
        .setCheck("String")
        .appendField("Decomision Site ID");
    this.appendDummyInput()
        .appendField('date')
        .appendField(new Blockly.FieldDate(''), 'DATE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('System Decomision');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['example_date'] = {
  init: function() {
	this.setOutput(true, null);
	this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.appendDummyInput()
        .appendField('Target date:')
        .appendField(new Blockly.FieldDate(''), 'FIELDNAME');
 }
};




Blockly.Blocks['upgrade'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Upgrade (patch)");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Teradata","td"], ["Aster","ast"], ["Hadoop","hdp"], ["BAR","bar"], ["Viewpoint","VP"], ["Unity","UN"], ["Datamover","DP"], ["CMIC","CMIC"],["SWS","SWS"]]), "type");
  this.appendDummyInput()
        .appendField('Implementation Date')
        .appendField(new Blockly.FieldDate(''), 'DATE'); 
 this.appendValueInput("siteID")
        .setCheck(null)
        .appendField("Site ID");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



Blockly.Blocks['milestone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mile Stone");
    this.appendDummyInput()
        .appendField('Due Date')
        .appendField(new Blockly.FieldDate(''), 'DATE');

    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Description");
     

    this.setInputsInline(true);
    this.setPreviousStatement(true, "prj");
    this.setNextStatement(true, "prj");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



Blockly.Blocks['add_tsk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Addition Task");
    this.appendDummyInput()
        .appendField('Due Date')
        .appendField(new Blockly.FieldDate(''), 'DATE');
    this.appendDummyInput()
        .appendField("  ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Incident","inc"], ["Change Control","cc"], ["Other","oth"]]), "NAME");
    this.appendDummyInput()
        .appendField("  ");
    this.appendValueInput("Incident")
        .setCheck(null)
        .appendField("Nr.");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['tsk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Task");
    this.appendDummyInput()
        .appendField('Due Date')
        .appendField(new Blockly.FieldDate(''), 'DATE');
    this.appendDummyInput()
        .appendField("  ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Implementing","inpl"], ["Documentaion","doc"], ["Other","oth"]]), "NAME");
    this.appendDummyInput()
        .appendField("  ");
    this.appendValueInput("other")
        .setCheck(null)
        .appendField("Nr.");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "prj");
    this.setNextStatement(true, "prj");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['phase'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Project Phase");
    this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["Inittiation","1"], ["Planning","2"], ["Execution","3"], ["Monitoring and Controlling","4"], ["Closing","5"],["Mission Definition Review (MDR)","6"],["Preliminary Requirement Review (PRR)","7"],["System Definition Review (SDR)","8"],["Preliminary Design Review (PDR)","9"]]), "phase_nr");
    this.appendDummyInput()
        .appendField('Date')
        .appendField(new Blockly.FieldDate(''), 'DATE');
    this.appendValueInput("phase_rem")
        .setCheck("String")
        .appendField("Remarks");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "prj");
    this.setNextStatement(true, "prj");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['phase_mil'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mil/Space Project Phase");
    this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["Mission Analysis","6"],["Mission Definition Review (MDR)","7"],["Feasibility/Conception","8"],["Preliminary Requirement Review (PRR)","9"],["Preliminary Definition phase","10"],["System Definition Review (SDR)","11"],["Preliminary Design","12"],["Preliminary Design Review (PDR)","13"],["Final Design","14"],["Critical Design Review (CDR)","15"],["Qualification Review (QR)","16"],["Acceptance Review (AR)","17"],["Utilization","18"],["Operational Readiness Review (ORR)","19"],["Flight Readiness Review (FRR)","20"],["Launch Readiness Review (LRR)","21"],["Flight Qualification Review (FQR)","22"],["End of Life Review (EOLR)","23"],["Disposal","24"]]), "phase_nr");
    this.appendDummyInput()
        .appendField('Date')
        .appendField(new Blockly.FieldDate(''), 'DATE');
    this.appendValueInput("phase_rem")
        .setCheck("String")
        .appendField("Remarks");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "prj");
    this.setNextStatement(true, "prj");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['project_party'] = {
  init: function() {
    this.appendDummyInput()
          .appendField("Participant Members");
    this.appendDummyInput()
        .appendField("Function")
        .appendField(new Blockly.FieldTextInput("name"), "party_func");
    this.appendStatementInput("names")
        .setCheck("party_mem")
        .appendField("Names");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "party");
      this.setNextStatement(true, "party");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['party'] = {
    init: function() {
       this.appendDummyInput()
          .appendField("Function")
        .appendField(new Blockly.FieldTextInput("Function"), "func");
      this.appendDummyInput()
          .appendField("First Name")
        .appendField(new Blockly.FieldTextInput("first name"), "fname");
      this.appendDummyInput()
      .appendField("Surname")
        .appendField(new Blockly.FieldTextInput("surname"), "name");
      this.appendDummyInput()
      .appendField("Email ")
        .appendField(new Blockly.FieldTextInput("email@here"), "email");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "party_mem");
    this.setNextStatement(true, "party_mem");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*
Blockly.Blocks['project_desc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("multiline text input:")
        .appendField(new Blockly.FieldMultilineInput('default text\n with newline character'),
            'text');
  }
};

*/



Blockly.Blocks['project_desc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Notes ")
          .appendField(new Blockly.FieldMultilineInput('default text\n with newline character'), "text");
      this.setPreviousStatement(true, "desc");
      this.setColour(230);
      this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['project_meeting'] = {
  init: function() {
    this.appendDummyInput()
          .appendField("Meeting ")
        
          .appendField(new Blockly.FieldTextInput("Meeting Subject"), "sub")
 //   this.appendDummyInput()
        .appendField('Meeting Date')
          .appendField(new Blockly.FieldDate(''), 'DATE');
    this.appendStatementInput("party")
        .setCheck("party")
        .appendField("Participants");
    this.appendStatementInput("summary")
        .setCheck("desc")
        .appendField("Meeting Summary");
    this.setPreviousStatement(true, "prj");
    this.setNextStatement(true, "prj");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['logic_timevalue'] = {
	init: function () {
//		this.setColour(Blockly.Blocks.math.HUE);
		this.appendDummyInput()
			.appendField(new Blockly.FieldTextInput('00:00',
				this.TimeValidator), 'TEXT');
		this.setOutput(true, 'String');
	}
};

Blockly.Blocks['logic_timevalue.TimeValidator'] = function (text) {
	if (text.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]/)) return text;
	return "00:00";
};

