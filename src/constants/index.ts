import { Skill, Tool, TestCase, MaintenanceTip } from './types';

export const SKILLS: Skill[] = [
  {
    id: 'troubleshooting',
    title: 'Dépannage Méthodique',
    description: 'Isolation des pannes par élimination (modèle OSI, approche bottom-up).',
    icon: 'Search',
    category: 'hard'
  },
  {
    id: 'networking',
    title: 'Réseaux & Protocoles',
    description: 'Configuration DHCP, DNS, VLANs et dépannage de connectivité.',
    icon: 'Network',
    category: 'network'
  },
  {
    id: 'customer-service',
    title: 'Service Client (Soft Skills)',
    description: 'Gestion de crise, empathie et vulgarisation technique.',
    icon: 'Users',
    category: 'soft'
  },
  {
    id: 'security',
    title: 'Hygiène Informatique',
    description: 'Gestion des droits, MFA, protection contre le phishing et malwares.',
    icon: 'Shield',
    category: 'security'
  }
];

export const TOOLS: Tool[] = [
  {
    id: 'jira',
    name: 'Jira Service Management',
    category: 'Ticketing',
    usage: 'Suivi des incidents et SLAs.',
    description: 'Outil standard pour la gestion des tickets et du backlog support.'
  },
  {
    id: 'powershell',
    name: 'PowerShell / Bash',
    category: 'CLI',
    usage: 'Automatisation de tâches administratives.',
    description: 'Indispensable pour manipuler Active Directory ou automatiser des déploiements.'
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    category: 'Network Diagnostic',
    usage: 'Analyse de paquets réseau.',
    description: 'Utilisé pour identifier les latences ou les échecs de poignées de main protocolaires.'
  },
  {
    id: 'teamviewer',
    name: 'AnyDesk / TeamViewer',
    category: 'Remote Support',
    usage: 'Contrôle à distance sécurisé.',
    description: 'Permet d\'intervenir sur les postes utilisateurs sans se déplacer.'
  }
];

export const CASES: TestCase[] = [
  {
    id: 'case-1',
    title: 'Écran bleu (BSOD) récurrent',
    problem: 'Un poste utilisateur crash aléatoirement avec le code WHEA_UNCORRECTABLE_ERROR.',
    diagnosis: [
      'Vérification des journaux d\'événements Windows',
      'Test de la RAM avec MemTest86',
      'Contrôle des températures CPU'
    ],
    resolution: 'Identification d\'une barrette de RAM défectueuse. Remplacement du hardware et mise à jour BIOS.',
    category: 'hardware',
    difficulty: 'medium'
  },
  {
    id: 'case-2',
    title: 'Inaccessibilité WiFi sur un étage',
    problem: 'Plusieurs utilisateurs signalent une déconnexion totale du WiFi sur l\'aile Sud.',
    diagnosis: [
      'Vérification de l\'alimentation du switch PoE',
      'Scan des canaux WiFi pour interférences',
      'Vérification de la configuration du contrôleur'
    ],
    resolution: 'Le switch PoE de l\'étage avait grillé suite à une surtension. Remplacement du switch et configuration du VLAN.',
    category: 'network',
    difficulty: 'medium'
  },
  {
    id: 'case-3',
    title: 'Fichiers chiffrés suspects',
    problem: 'Un utilisateur ne peut plus ouvrir ses documents Excel, nommés .locked.',
    diagnosis: [
      'Isolation immédiate du poste du réseau',
      'Identification du type de ransomware via ID Ransomware',
      'Scan complet des partitions réseaux'
    ],
    resolution: 'Restauration à partir d\'une sauvegarde hors-ligne. Formation de l\'utilisateur sur les pièces jointes suspectes.',
    category: 'software',
    difficulty: 'hard'
  }
];

export const MAINTENANCE: MaintenanceTip[] = [
  {
    id: 'm-1',
    title: 'Mises à jour critiques',
    frequency: 'weekly',
    tasks: [
      'Déployer les patchs de sécurité OS',
      'Mettre à jour les navigateurs (Chrome/Edge)',
      'Vérifier les définitions antivirus'
    ]
  },
  {
    id: 'm-2',
    title: 'Nettoyage Physique',
    frequency: 'monthly',
    tasks: [
      'Dépoussiérage des ventilateurs serveurs',
      'Vérification des onduleurs (batteries)',
      'Réorganisation du brassage (cabling)'
    ]
  }
];
