*** Settings ***
Resource        robot/Cumulus/resources/NPSP.robot
Library         cumulusci.robotframework.PageObjects
...             robot/Cumulus/resources/GiftEntryPageObject.py
...             robot/Cumulus/resources/NPSP.py
Suite Setup     Run keywords
...             Open Test Browser
...             Setup Test Data
...             API Check And Enable Gift Entry
Suite Teardown  Run Keywords
...             Capture Screenshot and Delete Records and Close Browser

*** Variables ***
${profile_name} =   NPSP_Standard_User
${perm_set_name} =  Gift_Entry
${user_alias} =     0000User

*** Keywords ***

Get Field ID
  [Arguments]             ${profile_name}       ${object_name}       ${field_name}
  &{result} =             Soql Query  SELECT Id, PermissionsRead, PermissionsEdit FROM FieldPermissions WHERE parentId IN ( SELECT id FROM permissionset WHERE PermissionSet.Profile.Name = '${profile_name}') AND SobjectType='${object_name}' AND Field='${field_name}'         
  ${Id} =                 Get From List  ${result}[records]  0
  Set Suite Variable  ${Id}

Get Permission Set Field ID
  [Arguments]             ${perm_set_name}       ${object_name}       ${field_name}
  &{result} =             Soql Query  SELECT Id, PermissionsRead, PermissionsEdit FROM FieldPermissions WHERE parentId IN ( SELECT id FROM permissionset WHERE PermissionSet.Name = '${perm_set_name}') AND SobjectType='${object_name}' AND Field='${field_name}'         
  ${Id} =                 Get From List  ${result}[records]  0
  Set Suite Variable  ${Id}


Setup Test Data

  ${PROF_FORM_TEMPLATE_DESCRIPTION_ID} =  Get Field ID  ${profile_name}  Form_Template__c  Form_Template__c.Description__c
  Set Suite Variable  ${PROF_FORM_TEMPLATE_DESCRIPTION_ID}

  ${PROF_DI_BATCH_DESCRIPTION_ID} =  Get Field ID  ${profile_name}  DataImportBatch__c  DataImportBatch__c.Batch_Description__c
  Set Suite Variable  ${PROF_DI_BATCH_DESCRIPTION_ID}

  ${PERM_FORM_TEMPLATE_DESCRIPTION_ID} =  Get Permission Set Field ID  ${perm_set_name}  Form_Template__c  Form_Template__c.Description__c
  Set Suite Variable  ${PERM_FORM_TEMPLATE_DESCRIPTION_ID}

  ${PERM_DI_BATCH_DESCRIPTION_ID} =  Get Permission Set Field ID  ${perm_set_name}  DataImportBatch__c  DataImportBatch__c.Batch_Description__c
  Set Suite Variable  ${PERM_DI_BATCH_DESCRIPTION_ID}

  Create Test User  QA,Gift_Entry  0000User

*** Test Cases ***

# Verify Permissions Error When Missing NPSP DI Batch Object Access




# Verify Permissions Error When Missing Form Template Object Access


Verify Permissions Error When DI Batch Description is Revoked

  ${ns} =                  Get Npsp Namespace Prefix
  Salesforce Update         ${ns}FieldPermissions  ${PROF_DI_BATCH_DESCRIPTION_ID}
  ...                       PermissionsRead=false
  ...                       PermissionsEdit=false
  Salesforce Update         ${ns}FieldPermissions  ${PERM_DI_BATCH_DESCRIPTION_ID}
  ...                       PermissionsRead=false
  ...                       PermissionsEdit=false
  Open Test Browser         useralias=${user_alias}
  Go to Page                Landing    GE_Gift_Entry
  # Validate Error Message    error
  # # ...                   
  Salesforce Update         ${NS}FieldPermissions  ${PROF_DI_BATCH_DESCRIPTION_ID}
  ...                       PermissionsRead=true
  ...                       PermissionsEdit=true
  Salesforce Update         ${NS}FieldPermissions  ${PERM_PROF_DI_BATCH_DESCRIPTION_ID}
  ...                       PermissionsRead=true
  ...                       PermissionsEdit=true     


#Verify Permissions Error When Form Template Description is Revoked




