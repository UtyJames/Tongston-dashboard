export type SupportRequest = {
  id: string;
  title: string;
  category: string;
  priority: string;
  status: string;
  owner: string;
  dueDate: string;
  riskLevel: string;
  description: string;
  approvalNeeded?: string;
  evidenceRequired?: string;
};

const requests: SupportRequest[] = [
  {
    id: "REQ-001",
    title: "Onboard New Joiner A",
    category: "Onboarding",
    priority: "Medium",
    status: "To Do",
    owner: "IT / HR",
    dueDate: "48 hours",
    riskLevel: "Medium",
    description:
      "Create Google Workspace, Bitrix, Drive, GitHub if approved, communication groups, and onboarding note.",
    approvalNeeded: "HR / Line Manager",
    evidenceRequired:
      "Account created, access register updated, onboarding confirmation sent.",
  },
  {
    id: "REQ-002",
    title: "Offboard Outgoing User B",
    category: "Offboarding",
    priority: "High",
    status: "To Do",
    owner: "IT",
    dueDate: "Same day",
    riskLevel: "High",
    description:
      "Remove Workspace, GitHub, Bitrix, Drive and password manager access. Check whether ownership transfer or password rotation is needed.",
    approvalNeeded: "HR / Technology Senior Officer",
    evidenceRequired: "Access removed, register updated, completion confirmed.",
  },
  {
    id: "REQ-003",
    title: "Password requested by WhatsApp",
    category: "Security",
    priority: "High",
    status: "To Do",
    owner: "IT",
    dueDate: "Immediate",
    riskLevel: "High",
    description:
      "A team member asked for a shared website/admin password on WhatsApp.",
    approvalNeeded: "Technology Senior Officer",
    evidenceRequired:
      "Safe password manager process followed; no password shared insecurely.",
  },
  {
    id: "REQ-004",
    title: "Developer GitHub access request",
    category: "GitHub Access",
    priority: "High",
    status: "Pending Approval",
    owner: "Technology Senior Officer / IT",
    dueDate: "24 hours",
    riskLevel: "High",
    description:
      "Developer requests write access to T-World frontend repository but assigned issue and PM approval are unclear.",
    approvalNeeded: "Technology Senior Officer and PM/Product",
    evidenceRequired:
      "Approved role, linked issue, access level, and register entry.",
  },
  {
    id: "REQ-005",
    title: "Bitrix renewal due",
    category: "Subscription",
    priority: "High",
    status: "To Do",
    owner: "Finance / IT",
    dueDate: "9 days",
    riskLevel: "Medium",
    description: "Bitrix subscription renewal is due in 9 days.",
    approvalNeeded: "Finance",
    evidenceRequired: "Renewal status confirmed and tracker updated.",
  },
  {
    id: "REQ-006",
    title: "Website page update: Campus Ambassador Programme",
    category: "Website Update",
    priority: "Medium",
    status: "To Do",
    owner: "Media / IT",
    dueDate: "1 week",
    riskLevel: "Medium",
    description:
      "Create or update website page using rough content. Final copy and images not yet approved.",
    approvalNeeded: "Media / Information Approver",
    evidenceRequired:
      "Page QA complete, approval received, change log updated.",
  },
  {
    id: "REQ-007",
    title: "Careers page broken link on mobile",
    category: "Website Issue",
    priority: "Medium",
    status: "To Do",
    owner: "Website / IT",
    dueDate: "48 hours",
    riskLevel: "Medium",
    description:
      "Careers page link works on desktop but appears broken on mobile.",
    approvalNeeded: "Website owner",
    evidenceRequired: "Issue reproduced, fixed, tested on mobile and desktop.",
  },
  {
    id: "REQ-008",
    title: "Junior Tester C laptop update overdue",
    category: "Hardware",
    priority: "Medium",
    status: "To Do",
    owner: "IT Support",
    dueDate: "This week",
    riskLevel: "Medium",
    description:
      "Laptop has not been updated in over 30 days. OS and antivirus/security status unclear.",
    approvalNeeded: "IT",
    evidenceRequired: "Device maintenance register updated.",
  },
  {
    id: "REQ-009",
    title: "COO cannot access Bitrix on laptop",
    category: "Support Ticket",
    priority: "High",
    status: "To Do",
    owner: "IT Support",
    dueDate: "Today",
    riskLevel: "Medium",
    description:
      "Bitrix works on mobile but not laptop. Internet works. Cache/password reset not yet checked.",
    approvalNeeded: "None initially",
    evidenceRequired:
      "Troubleshooting steps logged and issue resolved or escalated.",
  },
  {
    id: "REQ-010",
    title: "T-World staging review support",
    category: "T-World Delivery",
    priority: "High",
    status: "At Risk",
    owner: "Technology / QA",
    dueDate: "Next week",
    riskLevel: "High",
    description:
      "Feature has failed check, no final QA checklist, no release note, no handover note, and one PR still using mock data.",
    approvalNeeded: "Technology Senior Officer / PM",
    evidenceRequired:
      "QA checklist, release note, failed check owner, handover note.",
  },
];

export default requests;
