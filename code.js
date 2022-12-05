

Blockly.Lua['start_project'] = function(block) {
  var value_name = Blockly.Lua.valueToCode(block, 'NAME', Blockly.Lua.ORDER_ATOMIC);
  
  // TODO: Assemble Lua into code variable.
  var code = 'function create_project( ) ' + value_name + '\n end\n';
  return code;
};

Blockly.Lua['customer_name'] = function(block) {
  var value_name = Blockly.Lua.valueToCode(block, 'NAME', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'new_customer( prj, ' + value_name + ')\n';
  return code;
};

Blockly.Lua['site_id'] = function(block) {
   var id=block.id;
  var checkbox_new = block.getFieldValue('New') == 'TRUE';
  var value_siteid = Blockly.Lua.valueToCode(block, 'SiteID', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'siteID(prj , ' + value_siteid + ',' + checkbox_new + ' ,\'' + id + '\')\n';
  return code;
};

Blockly.Lua['nparc'] = function(block) {
  var value_source_system_site_id = Blockly.Lua.valueToCode(block, 'Source System Site ID', Blockly.Lua.ORDER_ATOMIC);
  var value_date = block.getFieldValue('DATE');

  // TODO: Assemble Lua into code variable.
  var code = 'function nparc( ' + value_date +',' + value_source_system_site_id +') ...\n';
  return code;
};

Blockly.Lua['installation'] = function(block) {
  // TODO: Assemble Lua into code variable.
   var id=block.id;
  var value_siteid = Blockly.Lua.valueToCode(block, 'SiteID', Blockly.Lua.ORDER_ATOMIC);
   var value_date = block.getFieldValue('DATE');
  var code = 'install( prj,'+value_siteid+', \'' + value_date + '\',\'' + id + '\')\n';
  return code;
};

Blockly.Lua['new_project'] = function(block) {
//  var value_prj_namr = Blockly.Lua.valueToCode(block, 'PRJ_NAMR', Blockly.Lua.ORDER_ATOMIC);
  var statements_steps = Blockly.Lua.statementToCode(block, 'steps');
    var value_date = block.getFieldValue('DATE');
    var value_prj_name = block.getFieldValue('PRJ_NAME');
    var prj_desc = Blockly.Lua.statementToCode(block, 'desc');
    var prj_party = Blockly.Lua.statementToCode(block, 'party');
   var id=block.id;
  // TODO: Assemble JavaScript into code variable.
    var code = 'function new_project( ) \n prj=project( \''  + value_prj_name + '\',\'' + value_date +'\',\'' + id +'\'  )\n'
        +  'to=0 \n'
        +  'add_desc( prj, [[' + prj_desc + ']]);\n '
        +  prj_party
	+  statements_steps +  'end\n ';
  return code;
};

Blockly.Lua['data_migration'] = function(block) {
  var dropdown_type = block.getFieldValue('Type');
  var dropdown_count = block.getFieldValue('Count');
  var value_src_name = Blockly.Lua.valueToCode(block, 'src_name', Blockly.Lua.ORDER_ATOMIC);
  var value_date = block.getFieldValue('DATE');
   var id=block.id;
  // TODO: Assemble Lua into code variable.
  var code = 'data_migration( prj, \'' + dropdown_type + '\',' + dropdown_count + ',' + value_src_name + ',\'' + value_date + '\',\'' + id + '\')\n';
  return code;
};

Blockly.Lua['end'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = '...\n';
  return code;
};

Blockly.Lua['system_installation'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = '...\n';
  return code;
};

Blockly.Lua['bar_installation'] = function(block) {
  // TODO: Assemble Lua into code variable.
 var date_date = block.getFieldValue('DATE');
  var value_siteid = Blockly.Lua.valueToCode(block, 'bar_name', Blockly.Lua.ORDER_ATOMIC);
   var id=block.id;

  var code = 'bar( prj, ' + value_siteid + ',\'' + date_date + '\',\'' + id + '\') \n';
  return code;
};

Blockly.Lua['decomision'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var value_date = block.getFieldValue('DATE');
  var value_sys_name = Blockly.Lua.valueToCode(block, 'sys_name', Blockly.Lua.ORDER_ATOMIC);
   var id=block.id;
  var code = 'decom(prj , ' + value_sys_name + ',\'' + value_date + '\',\'' + id + '\' )\n';
  return code;
};



Blockly.Lua['upgrade'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var date_date = block.getFieldValue('DATE');
  var value_siteid = Blockly.Lua.valueToCode(block, 'siteID', Blockly.Lua.ORDER_ATOMIC);
   var id=block.id;
  // TODO: Assemble Lua into code variable.
  var code = 'upgrade( prj,  \'' + dropdown_type + '\',' + value_siteid + ',\'' + date_date +'\',\'' + id + '\') \n';
  return code;
};



Blockly.Lua['milestone'] = function(block) {
  var date_date = block.getFieldValue('DATE');
  var value_name = Blockly.Lua.valueToCode(block, 'NAME', Blockly.Lua.ORDER_ATOMIC);
   var id=block.id;
  // TODO: Assemble Lua into code variable.
  var code = 'milestone( prj, ' + value_name + ',\'' + date_date +'\',\'' + id + '\' )\n';
  return code;
};




Blockly.Lua['add_tsk'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var date_date = block.getFieldValue('DATE'); 
  var value_incident = Blockly.Lua.valueToCode(block, 'Incident', Blockly.Lua.ORDER_ATOMIC);
  var id=block.id;
  // TODO: Assemble Lua into code variable.
  var code = 'add(prj,\'' + dropdown_name + '\',' + value_incident + ',\'' + date_date + '\',\'' + id + '\'  )\n';
  return code;
};


Blockly.Lua['tsk'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var date_date = block.getFieldValue('DATE'); 
  var value_incident = Blockly.Lua.valueToCode(block, 'other', Blockly.Lua.ORDER_ATOMIC);
  var id=block.id;
  // TODO: Assemble Lua into code variable.
  var code = 'add(prj,\'' + dropdown_name + '\',' + value_incident + ',\'' + date_date + '\',\'' + id + '\'  )\n';
  return code;
};


Blockly.Lua['phase'] = function(block) {
    var dropdown_phase_nr = block.getFieldValue('phase_nr');
     var date_date = block.getFieldValue('DATE'); 
    var value_phase_rem = Blockly.Lua.valueToCode(block, 'phase_rem', Blockly.Lua.ORDER_ATOMIC);
    var id=block.id;
  // TODO: Assemble Lua into code variable.
  var code = 'add_ph(prj,\'' + dropdown_phase_nr + '\',\'' + date_date + '\',' + value_phase_rem + ',\'' + id + '\' )\n';
  return code;
};

Blockly.Lua['phase_mil'] = function(block) {
    var dropdown_phase_nr = block.getFieldValue('phase_nr');
     var date_date = block.getFieldValue('DATE');
    var value_phase_rem = Blockly.Lua.valueToCode(block, 'phase_rem', Blockly.Lua.ORDER_ATOMIC);
    var id=block.id;
  // TODO: Assemble Lua into code variable.
  var code = 'add_ph(prj,\'' + dropdown_phase_nr + '\',\'' + date_date + '\',' + value_phase_rem + ',\'' + id + '\' )\n';
  return code;
};



Blockly.Lua['project_party'] = function(block) {
    var statements_names = Blockly.Lua.statementToCode(block, 'names');
    var party_func = block.getFieldValue('party_func');
     var id=block.id;
  // TODO: Assemble Lua into code variable.
    var code = 'party=add_party(prj,to, \''+ party_func +'\',\'' + id + '\')\n'+ statements_names + '\n';      

  return code;
};

Blockly.Lua['party'] = function(block) {
  var func = block.getFieldValue('func');
  var text_fname = block.getFieldValue('fname');
  var text_name = block.getFieldValue('name');
  var text_email = block.getFieldValue('email');
  // TODO: Assemble Lua into code variable.
  var code = 'add_party_memb(prj, party, \'' + func + '\',\'' + text_fname + '\',\'' + text_name + '\',\'' + text_email + '\')\n';
  return code;
};


Blockly.Lua['project_desc'] = function(block) {
  var text_val = block.getFieldValue('text');
  // TODO: Assemble Lua into code variable.
  var code =  text_val + ' \n';
  return code;
};



Blockly.Lua['project_meeting'] = function(block) {
    var text_sub = block.getFieldValue('sub');
     var date_date = block.getFieldValue('DATE'); 
  var statements_party = Blockly.Lua.statementToCode(block, 'party');
    var statements_summary = Blockly.Lua.statementToCode(block, 'summary');
     var id=block.id;
  // TODO: Assemble Lua into code variable.
    var code = 'do\n to=add_met( prj, \'' + text_sub + '\',\' ' + date_date + '\',[[ ' + statements_summary + ']], \'' + id + '\')\n'
        + statements_party + '\n'
        + 'end \n' ;
  return code;
};

Blockly.Lua['logic_timevalue'] = function(block) {
  // Text value.
  var code = Blockly.Lua.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.Lua.ORDER_ATOMIC];
};

