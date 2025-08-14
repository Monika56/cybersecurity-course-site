export type Week = { id: number; title: string; track: string; outcomes: string[]; lab: string; deliverable: string };
export const weeks: Week[] = [
  { id: 1,  title: "Networking Fundamentals", track: "Foundations", outcomes: ["TCP/IP, DNS, TLS basics", "nmap intro", "pcap reading"], lab: "Parse DNS/HTTP/TLS from sample pcaps in Colab; map open ports (GCP VM only).", deliverable: "Packet flow diagram + nmap report." },
  { id: 2,  title: "Linux & Python for Security", track: "Foundations", outcomes: ["Users/Perms", "bash & cron", "Python tooling"], lab: "Write log rotation script + Python miniscan; schedule with cron.", deliverable: "miniscan.py + README." },
  { id: 3,  title: "Linux Hardening", track: "Blue Team", outcomes: ["CIS mindset", "SSH hardening", "auditd"], lab: "Disable password SSH, enable ufw, add audit rules.", deliverable: "Build Book with before/after." },
  { id: 4,  title: "Web Security 101 (OWASP)", track: "AppSec", outcomes: ["Auth/Access", "XSS/SSRF", "Headers"], lab: "Run Juice Shop (GCP VM) and triage beginner challenges; ZAP in passive mode.", deliverable: "Risk report + mitigations." },
  { id: 5,  title: "Logging & SIEM Intro", track: "Blue Team", outcomes: ["Syslog", "Normalization", "ATT&CK"], lab: "Deploy Wazuh/ELK; forward logs; 3 detection rules.", deliverable: "Dashboard screenshots + rules." },
  { id: 6,  title: "Network Security & Hunt", track: "Blue Team", outcomes: ["IDS/IPS", "Zeek", "PCAP workflow"], lab: "Run Zeek/Suricata on LABNET (GCP VM); analyze in Colab.", deliverable: "Hunt report (what/evidence/action)." },
  { id: 7,  title: "Endpoint & EDR", track: "Blue Team", outcomes: ["Process trees", "Win logs", "Detections"], lab: "Enable logging; 3 detections for suspicious chains.", deliverable: "PowerShell triage playbook." },
  { id: 8,  title: "Disk & Memory Forensics", track: "Blue Team", outcomes: ["Acquisition", "Timelines", "IOCs"], lab: "Analyze sample memory dump in Colab with Volatility.", deliverable: "Forensics worksheet + STIX JSON." },
  { id: 9,  title: "Recon & VA (Ethical)", track: "Offense (Lab)", outcomes: ["ROE", "Kill chain", "Vuln scanning"], lab: "Scan Metasploitable (GCP); create findings list.", deliverable: "VA report (severity/evidence/fix)." },
  { id: 10, title: "Exploitation → Fix", track: "Purple", outcomes: ["Misconfig exploit", "Lateral move basics", "Mitigations"], lab: "Run known‑vuln exploit in lab, then harden + detections.", deliverable: "Purple-team write‑up." },
  { id: 11, title: "AuthN/Z & Secrets", track: "AppSec", outcomes: ["OIDC", "Session mgmt", "Secret mgmt"], lab: "Run Keycloak; secure demo app; pre-commit secret scan.", deliverable: "SECURITY.md + STRIDE model." },
  { id: 12, title: "SAST/DAST/SCA & CI/CD", track: "DevSecOps", outcomes: ["Pipelines", "SBOM", "Signing"], lab: "Add SAST+SCA to CI; generate SBOM; sign image.", deliverable: "Fail build on highs." },
  { id: 13, title: "GCP IAM & VPC", track: "Cloud", outcomes: ["IAM", "Svc Accounts", "VPC"], lab: "Two projects dev/prod; bastion; least-privilege matrix.", deliverable: "IAM matrix + diagram." },
  { id: 14, title: "GCP SCC & Perimeter", track: "Cloud", outcomes: ["SCC triage", "VPC-SC", "Cloud Armor"], lab: "Enable SCC; WAF policy; perimeter test.", deliverable: "Runbook: triage→fix." },
  { id: 15, title: "Container Security", track: "Containers", outcomes: ["Non-root", "RO FS", "Scanning"], lab: "Harden Dockerfile; scan + attest.", deliverable: "SBOM + notes." },
  { id: 16, title: "Kubernetes/GKE Security", track: "Containers", outcomes: ["RBAC", "Pod Security", "NetPolicies"], lab: "GKE + Workload Identity; apply policies.", deliverable: "Hardening checklist." },
  { id: 17, title: "Threat Modeling & ATT&CK", track: "Blue Team", outcomes: ["DFDs", "Mapping", "Priorities"], lab: "Build threat model; map 5 techniques + detections.", deliverable: "Traceability matrix." },
  { id: 18, title: "Detection Engineering", track: "Blue Team", outcomes: ["Rule lifecycle", "Tuning", "Tests"], lab: "3 SIEM rules + test generator; runbooks.", deliverable: "Detection pack." },
  { id: 19, title: "Capstone Build", track: "Capstone", outcomes: ["Architecture", "Runbooks", "IaC"], lab: "Assemble project (SOC-in-a-box/AppSec/Cloud).", deliverable: "Demo plan + artifacts." },
  { id: 20, title: "Capstone Demo", track: "Capstone", outcomes: ["Demo video", "Docs polish", "Portfolio"], lab: "Record 10‑min demo; finalize repo.", deliverable: "Capstone package." },
];

export type Challenge = { title: string; category: string; difficulty: "Easy"|"Medium"|"Hard" };
export const baseChallenges: Challenge[] = [
  { title: "Parse Zeek conn.log and list top 10 dest ports.", category: "Logs", difficulty: "Easy" },
  { title: "Find world-writable files on Linux and export to CSV.", category: "Linux", difficulty: "Easy" },
  { title: "Reassemble an HTTP response body from a PCAP.", category: "Networking", difficulty: "Medium" },
  { title: "Draft ufw rules for SSH/HTTPS only; log drops.", category: "Blue Team", difficulty: "Easy" },
  { title: "Generate an SBOM and identify highest CVE severity.", category: "DevSecOps", difficulty: "Medium" },
  { title: "Model a tiny web app with STRIDE and mitigations.", category: "Threat Modeling", difficulty: "Medium" },
  { title: "Create a Suricata rule for /admin; test in lab.", category: "Detection", difficulty: "Medium" },
  { title: "List processes from a sample memory image (Volatility3).", category: "Forensics", difficulty: "Easy" },
  { title: "Harden an Nginx container (non-root, read-only).", category: "Containers", difficulty: "Medium" },
  { title: "Implement OIDC login to a demo app using Keycloak.", category: "AppSec", difficulty: "Hard" },
  { title: "Pre-commit hook to block committing secrets.", category: "DevSecOps", difficulty: "Easy" },
  { title: "Map an incident to 5 ATT&CK techniques.", category: "Blue Team", difficulty: "Medium" },
  { title: "jq filter to extract failed SSH logins from JSON.", category: "Logs", difficulty: "Easy" },
  { title: "Benchmark bcrypt vs argon2; record times.", category: "AppSec", difficulty: "Medium" },
  { title: "Design a GCP VPC with private subnets and restricted egress.", category: "Cloud", difficulty: "Medium" },
  { title: "Create a Cloud Armor rule to block traversal patterns.", category: "Cloud", difficulty: "Medium" },
  { title: "Build a Python port scanner; compare vs nmap.", category: "Networking", difficulty: "Easy" },
  { title: "Detection for repeated sudo failures in SIEM.", category: "Detection", difficulty: "Easy" },
  { title: "Run Zeek locally and export a 5‑min conn.log.", category: "Networking", difficulty: "Medium" },
  { title: "Threat model a GKE deployment; propose RBAC.", category: "Containers", difficulty: "Hard" },
  { title: "Incident runbook for suspicious PowerShell.", category: "Blue Team", difficulty: "Medium" },
  { title: "Scan a lab host and write a VA finding entry.", category: "Offense (Lab)", difficulty: "Medium" },
  { title: "Dashboard showing auth anomalies from syslog.", category: "Logs", difficulty: "Medium" },
  { title: "Regex to find AWS access keys in commits.", category: "DevSecOps", difficulty: "Medium" },
  { title: "K8s NetworkPolicy isolating a namespace.", category: "Containers", difficulty: "Medium" },
  { title: "Enable VPC Service Controls around a sensitive API.", category: "Cloud", difficulty: "Hard" },
];

export function dailyIndex(max: number, seed = new Date()) {
  const d = new Date(seed.getFullYear(), seed.getMonth(), seed.getDate());
  const n = d.getTime() / 86400000; // days since epoch
  const phi = (Math.sqrt(5) - 1) / 2; // golden ratio conjugate
  return Math.floor((((n * phi) % 1) * max));
}