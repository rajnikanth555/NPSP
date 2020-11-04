import gsChecklistExploreNPSPTitle from '@salesforce/label/c.gsChecklistExploreNPSPTitle';
import gsChecklistExploreNPSPDesc from '@salesforce/label/c.gsChecklistExploreNPSPDesc';
import gsChecklistMakeItYourDesc from '@salesforce/label/c.gsChecklistMakeItYourDesc';
import gsChecklistMakeItYourTitle from '@salesforce/label/c.gsChecklistMakeItYourTitle';
import gsChecklistOnboardUsersTitle from '@salesforce/label/c.gsChecklistOnboardUsersTitle';
import gsChecklistOnboardUsersDesc from '@salesforce/label/c.gsChecklistOnboardUsersDesc';
import gsChecklistItemSetupContactTitle from '@salesforce/label/c.gsChecklistItemSetupContactTitle';
import gsChecklistItemSetupContactDesc from '@salesforce/label/c.gsChecklistItemSetupContactDesc';
import gsChecklistItemSetupContactLinkLabel from '@salesforce/label/c.gsChecklistItemSetupContactLinkLabel';
import gsChecklistItemSetupContactPriBtnLabel from '@salesforce/label/c.gsChecklistItemSetupContactPriBtnLabel';
import gsChecklistItemSetupContactSecBtnLabel from '@salesforce/label/c.gsChecklistItemSetupContactSecBtnLabel';
import gsChecklistItemStayTrackTitle from '@salesforce/label/c.gsChecklistItemStayTrackTitle';
import gsChecklistItemStayTrackDesc from '@salesforce/label/c.gsChecklistItemStayTrackDesc';
import gsChecklistItemStayTrackLinkLabel from '@salesforce/label/c.gsChecklistItemStayTrackLinkLabel';
import gsChecklistItemStayTrackPriBtnLabel from '@salesforce/label/c.gsChecklistItemStayTrackPriBtnLabel';
import gsChecklistItemCreateDonationTitle from '@salesforce/label/c.gsChecklistItemCreateDonationTitle';
import gsChecklistItemCreateDonationDesc from '@salesforce/label/c.gsChecklistItemCreateDonationDesc';
import gsChecklistItemCreateDonationLinkLabel from '@salesforce/label/c.gsChecklistItemCreateDonationLinkLabel';
import gsChecklistItemCreateDonationPriBtnLabel from '@salesforce/label/c.gsChecklistItemCreateDonationPriBtnLabel'; 
import gsChecklistItemExtraOneMinuteVideo from '@salesforce/label/c.gsChecklistItemExtraOneMinuteVideo';
import gsChecklistItemFundraisingProcessDesc from '@salesforce/label/c.gsChecklistItemFundraisingProcessDesc';
import gsChecklistItemFundraisingProcessTitle from '@salesforce/label/c.gsChecklistItemFundraisingProcessTitle';
import gsChecklistItemFundraisingProcessLinkLabel from '@salesforce/label/c.gsChecklistItemFundraisingProcessLinkLabel';
import gsChecklistItemFundraisingProcessPriBtnLabel from '@salesforce/label/c.gsChecklistItemFundraisingProcessPriBtnLabel';
import gsChecklistItemRunningReportsDesc from '@salesforce/label/c.gsChecklistItemRunningReportsDesc';
import gsChecklistItemRunningReportsPriBtnLabel from '@salesforce/label/c.gsChecklistItemRunningReportsPriBtnLabel';
import gsChecklistItemRunningReportsLinkLabel from '@salesforce/label/c.gsChecklistItemRunningReportsLinkLabel';
import gsChecklistItemRunningReportsTitle from '@salesforce/label/c.gsChecklistItemRunningReportsTitle';
import gsChecklistItemPrepareNPSPDesc from '@salesforce/label/c.gsChecklistItemPrepareNPSPDesc';
import gsChecklistItemPrepareNPSPPriBtnLabel from '@salesforce/label/c.gsChecklistItemPrepareNPSPPriBtnLabel';
import gsChecklistItemPrepareNPSPLinkLabel from '@salesforce/label/c.gsChecklistItemPrepareNPSPLinkLabel';
import gsChecklistItemPrepareNPSPTitle from '@salesforce/label/c.gsChecklistItemPrepareNPSPTitle';
import gsChecklistItemNPSPCloudDesc from '@salesforce/label/c.gsChecklistItemNPSPCloudDesc';
import gsChecklistItemSetupNPSPCloudPriBtnLabel from '@salesforce/label/c.gsChecklistItemSetupNPSPCloudPriBtnLabel';
import gsChecklistItemNPSPCloudLinkLabel from '@salesforce/label/c.gsChecklistItemNPSPCloudLinkLabel';
import gsChecklistItemNPSPCloudTitle from '@salesforce/label/c.gsChecklistItemNPSPCloudTitle';

/**
* @description Map of getLabelValue labels
*/
const labelMap = {
    gsChecklistExploreNPSPTitle,
    gsChecklistExploreNPSPDesc,
    gsChecklistMakeItYourDesc,
    gsChecklistMakeItYourTitle,
    gsChecklistOnboardUsersTitle,
    gsChecklistOnboardUsersDesc,
    gsChecklistItemSetupContactTitle,
    gsChecklistItemSetupContactDesc,
    gsChecklistItemSetupContactLinkLabel,
    gsChecklistItemSetupContactPriBtnLabel,
    gsChecklistItemSetupContactSecBtnLabel,
    gsChecklistItemStayTrackTitle,
    gsChecklistItemStayTrackDesc,
    gsChecklistItemStayTrackLinkLabel,
    gsChecklistItemStayTrackPriBtnLabel,
    gsChecklistItemCreateDonationTitle,
    gsChecklistItemCreateDonationDesc,
    gsChecklistItemCreateDonationLinkLabel,
    gsChecklistItemCreateDonationPriBtnLabel,
    gsChecklistItemExtraOneMinuteVideo,
    gsChecklistItemFundraisingProcessDesc,
    gsChecklistItemFundraisingProcessTitle,
    gsChecklistItemFundraisingProcessLinkLabel,
    gsChecklistItemFundraisingProcessPriBtnLabel,
    gsChecklistItemRunningReportsDesc,
    gsChecklistItemRunningReportsPriBtnLabel,
    gsChecklistItemRunningReportsLinkLabel,
    gsChecklistItemRunningReportsTitle,
    gsChecklistItemPrepareNPSPDesc,
    gsChecklistItemPrepareNPSPPriBtnLabel,
    gsChecklistItemPrepareNPSPLinkLabel,
    gsChecklistItemPrepareNPSPTitle,
    gsChecklistItemNPSPCloudDesc,
    gsChecklistItemSetupNPSPCloudPriBtnLabel,
    gsChecklistItemNPSPCloudLinkLabel,
    gsChecklistItemNPSPCloudTitle,
}

/**
*  @description This function getLabelValue the string using labelMap for that
*  @param string Name to label to getLabelValue
*  @return string
*/
export default function getLabelValue(label) {
    return labelMap[label] != undefined ? labelMap[label] : label;
}