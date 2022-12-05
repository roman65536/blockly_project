

print(file_name)

--package.cpath = package.cpath .. ";/usr/lib/lua/5.1/"
--package.cpath = "/usr/lib/lua/5.1/luasql/mysql.so"
--require("luasql.mysql")

--m_sql=require "luasql.mysql"

--print(luasql)

--env = assert (m_sql.mysql())
--con = assert (env:connect("Project","root","tdc"))
--cur = assert (con:execute("SHOW TABLES"))
--

-- load driver
local driver = require "luasql.postgres"
-- create environment object
env = assert (driver.postgres())
-- connect to data source
con = assert (env:connect("host=127.0.0.1 port=5432 user=roman password=roman dbname=project"))

--row = cur:fetch ({}, "a")
--while row do
--  print(string.format("Name: %s", row.Tables_in_doc_admin ))
--  print(row)
--  row = cur:fetch (row, "a")
--end

rp_order=1


function project(prj_name,date, id)
update=0
print("Project "..prj_name.." ID: "..id)
cur=con:execute('select p_id from project where name=\''..prj_name..'\';') 
if cur ~= nil then
row = cur:fetch ({}, "a")
 if row ~= nil then
  update =1
 end
end
cur=con:execute('select p_id from project where id=\''..id..'\';') 
if cur ~= nil then
row = cur:fetch ({}, "a")
 if row ~= nil then
  update =1
 end
end
 if update == 1 then
  -- update
 print("update")
 
 query='update project set tt=\''..date..'\', name= \''..prj_name..'\' where id=\''..id..'\' ;'
 print(query)
 con:execute(query)


 return(row['p_id'])
 else
 print("insert")
 query='insert into project (name,ct,tt,id) values(\''..prj_name..'\',now(),\''..date..'\',\''..id..'\');'
 print(query)
 con:execute(query)
end
 query='select p_id  from project where name =\''..prj_name..'\';'
 print(query)
 cur=con:execute(query)
 --if cur ~= nil then
 print(cur)
 row1 = cur:fetch ({}, "a")
 print(row1['p_id'])
 return (row1['p_id']) 
 --end
end


--[[function data_migration(prj_id, type, nr, src, date,id)
--update=0
--print("Data Migration " .. prj_id.. " Type: "..type.. " ID: "..id.. " Order :" ..rp_order)
--cur=con:execute('select p_id,s_id from steps where p_id="'..prj_id..'" and id="'..id..'" ;') 
--row = cur:fetch ({}, "a")
-- if row ~= nil then
  update =1
 end


if update == 1 then
--UPDATE
query='update steps set tt=\''..date..'\', cnt= \''..nr..'\',name=\''..src..'\', st_add=\''..type..'\'  where id=\''..id..'\' ;'
 print(query)
 con:execute(query)

else
--INSERT
print("insert")
 query='insert into steps (p_id,st_name,name,st_add,dt,tt,cnt,id) values(\''..prj_id..'\',\'MIG\',\''..src..'\',\''..type..'\',now(),\''..date..'\',\''..nr..'\',\''..id..'\');'
 print(query)
 con:execute(query)

end
rp_order=rp_order +1 
end

--]]

function install(prj_id,siteid,date,id)
update=0
print("Installation "..prj_id.." "..date.." "..id.. "ORDER "..rp_order)
cur=con:execute('select p_id,s_id from steps where p_id=\''..prj_id..'\' and id=\''..id..'\' ;') 
row = cur:fetch ({}, "a")
 if row ~= nil then
  update =1
 end


if update == 1 then
--UPDATE
query='update steps set tt=\''..date..'\', name=\''..siteid..'\' ,ord =\''..rp_order..'\' where id=\''..id..'\' ;'
 print(query)
 con:execute(query)

else
--INSERT
print("insert")
 query='insert into steps (p_id,st_name,dt,tt,id,name, ord) values(\''..prj_id..'\',\'INS\',now(),\''..date..'\',\''..id..'\',\''..siteid..'\',\''..rp_order..'\');'
 print(query)
 con:execute(query)

end
rp_order=rp_order +1 
end


function gen_ins_upd(prj_id,id,what)
update=0
print("**GEN inst upg "..prj_id.." "..id.. " Order :" .. rp_order)
cur=con:execute('select p_id,s_id from steps where p_id=\''..prj_id..'\' and id=\''..id..'\' ;') 
row = cur:fetch ({}, "a")
 if row ~= nil then
  update =1
 end

if update == 0 then
print("insert")
sep=""
txt=""
for a,v in pairs(what) do txt=txt..sep..a sep="," end
sep=""
txt1=""
for a,v in pairs(what) do txt1=txt1..sep..'\''..what[a]..'\'' sep="," end

query='insert into steps (p_id,'..txt..',dt,id) values(\''..prj_id..'\','..txt1..',now(),\''..id..'\' ) returning s_id;'
print(query)
cur=con:execute(query)
row = cur:fetch ({}, "a")
print(row['s_id'])
return (row['s_id'])
else

sep=""
txt=""
for a,v in pairs(what) do txt=txt..sep..a..'=\''..what[a]..'\'' sep="," end
query='update steps set '..txt..' where id=\''..id..'\' returning s_id;' 

print(query)
cur=con:execute(query)
row = cur:fetch ({}, "a")
print(row['s_id'])
return (row['s_id'])
end

print("Order : ".. rp_order)

end






function milestone(prj_id,sys,date,id)
tbl={}
tbl["st_name"]="MIL"
tbl["name"]=sys
tbl["tt"]=date
tbl["ord"]=rp_order

ret=gen_ins_upd(prj_id,id,tbl)
rp_order=rp_order + 1
return (ret)
end

--  add(prj,'inc','123','2018-07-08','|K#n8TL9}h5]8PBtqe{R'  ).

function add(prj_id,type_a,add,date,id)
tbl={}
tbl["st_name"]="ADD"
tbl["st_add"]=type_a
tbl["name"]=add
tbl["tt"]=date
tbl["ord"]=rp_order
ret=gen_ins_upd(prj_id,id,tbl)
rp_order=rp_order + 1
return (ret)
end

--  add(prj,'inc','123','2018-07-08','|K#n8TL9}h5]8PBtqe{R'  ).

function add_ph(prj_id,type_a,date,add,id)
tbl={}
tbl["st_name"]="ADD_PH"
tbl["st_add"]=type_a
tbl["name"]=add
tbl["tt"]=date
tbl["ord"]=rp_order
ret=gen_ins_upd(prj_id,id,tbl)
rp_order=rp_order + 1
return (ret)
end

function add_met(prj_id,type_a,date,add,id)
tbl={}
tbl["st_name"]="ADD_MET"
tbl["st_add"]=add
tbl["name"]=type_a
tbl["tt"]=date
tbl["ord"]=rp_order
ret=gen_ins_upd(prj_id,id,tbl)
rp_order=rp_order + 1
return (ret)
end




function add_desc(prj_id, descr_txt)
str=string.gsub(descr_txt,'\n','\\n')
str=string.gsub(str,'\'','')
query='update project set descr=E\''.. con:escape(str) ..'\' where p_id=\''..prj_id..'\' ;'
 print(query)
 con:execute(query)
end


function add_party(prj,to, party_n, id)
print("Party "..prj.." ID: "..id)
query='select party_id from party  where p_id=\''..prj..'\' and p_func = \'' .. party_n .. '\'  and s_id = \'' .. to .. '\';'
print(query)
cur=con:execute(query) 
if cur ~= nil then
row = cur:fetch ({}, "a")
 if row == nil then
  update =1
 else
   party=row['party_id']
   return party
 end
end


 print("insert")
 query='insert into party (p_id,s_id,p_func,id) values(\''..prj..'\',\'' ..to.. '\',\''  .. party_n..'\',\''..id..'\') returning party_id;'
 print(query)
 cur=con:execute(query)

-- query='select party_id  from party where p_id =\''..prj..'\';'
-- print(query)
-- cur=con:execute(query)
 if cur ~= nil then
 print(cur)
 row1 = cur:fetch ({}, "a")
 print(row1['party_id'])
 return (row1['party_id'])
 end
end



function add_party_memb(prj, party, func_n, f_name, s_name, f_email)
print("Party Member "..prj.." party: ".. party)

query='select party_id from party_memb  where p_id=\''..prj..'\' and party_id = \''..party..  '\' and p_email = \'' .. f_email .. '\';'
print(query)
cur=con:execute(query)
 row = cur:fetch ({}, "a")
if row ~= nil then
 return
 end


 print("insert")
 query='insert into party_memb (p_id,party_id,p_func,p_fname,p_name,p_email) values(\''..prj..'\',\'' .. party..'\',\''..func_n..'\',\'' .. f_name .. '\',\'' .. s_name .. '\',\'' ..f_email .. '\' )returning party_id;'
 print(query)
cur= con:execute(query)

-- query='select party_id  from party where p_id =\''..prj..'\';'
-- print(query)
-- cur=con:execute(query)
 if cur ~= nil then
 print(cur)
 row1 = cur:fetch ({}, "a")
 print(row1['party_id'])
 return (row1['party_id'])
 end
end




function print_r ( t ) 
    local print_r_cache={}
    local function sub_print_r(t,indent)
        if (print_r_cache[tostring(t)]) then
            print(indent.."*"..tostring(t))
        else
            print_r_cache[tostring(t)]=true
            if (type(t)=="table") then
                for pos,val in pairs(t) do
                    if (type(val)=="table") then
                        print(indent.."["..pos.."] => "..tostring(t).." {")
                        sub_print_r(val,indent..string.rep(" ",string.len(pos)+8))
                        print(indent..string.rep(" ",string.len(pos)+6).."}")
                    else
                        print(indent.."["..pos.."] => "..tostring(val))
                    end
                end
            else
                print(indent..tostring(t))
            end
        end
    end
    sub_print_r(t,"  ")
end




dofile(file_name)
new_project()




