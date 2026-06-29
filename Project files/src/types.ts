export interface SearchStrategy {
  targetPersona: string;
  industryFilters: string;
  locationFilters: string;
  companySize: string;
  booleanSearchString: string;
  proTip: string;
}

export interface GeneratorInputs {
  targetDescription: string;
}

export interface OutreachInputs {
  prospectName: string;
  prospectTitle: string;
  companyName: string;
  companyValueProp: string;
  senderName: string;
  senderCompany: string;
  senderValueProp: string;
  rawLinkedInActivity: string;
  outreachGoal: string;
}

export interface EmailVariation {
  subjectLine: string;
  emailBody: string;
  emailBodyHtml: string;
  frameworkBreakdown: {
    triggerHook: string;
    empathyBridge: string;
    valueProof: string;
    lowFrictionCta: string;
  };
}

export interface PresetItem {
  id: string;
  label: string;
  category: string;
  inputs: GeneratorInputs;
}
