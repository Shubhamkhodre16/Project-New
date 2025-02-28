import CustomDevelopment from "../../../components/services/reactservices/CustomDevelopment"
import IntegrationMigration from '../../../components/services/reactservices/IntegrationMigration'
import MaintenanceUpgradation from '../../../components/services/reactservices/MaintenanceUpgradation'
import UiuxDevelopment from '../../../components/services/reactservices/UiuxDevelopment'
import React from 'react'

const page = ({params}) => {
  console.log(params,"params");
 if(params?.slug=="custom"){
    return <CustomDevelopment/>
 }else if(params?.slug=="uidevelop"){
    return <UiuxDevelopment/>
 }else if(params?.slug=="integration"){
   return <IntegrationMigration/>
 }else if(params?.slug=="maintenance"){
   return <MaintenanceUpgradation/>
 }
}

export default page