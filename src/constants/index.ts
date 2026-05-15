import { Skill, Tool, TestCase, MaintenanceTip } from '../types';

export const SKILLS: Skill[] = [
  {
    id: 'troubleshooting',
    title: 'Dépannage Méthodique',
    description: 'Capacité à isoler les variables d\'un problème complexe de manière logique et méthodique.',
    details: [
      'Isolation des variables (Approche scientifique)',
      'Analyse du modèle OSI (Couches 1 à 7)',
      'Utilisation des journaux d\'événements (Event Viewer/Syslog)',
      'Reproduction de l\'incident en environnement contrôlé'
    ],
    flow: {
      title: 'Cycle de Diagnostic',
      steps: ['Observation', 'Hypothèse', 'Test', 'Vérification', 'Documentation']
    },
    icon: 'Search',
    category: 'hard'
  },
  {
    id: 'networking',
    title: 'Réseaux & Connectivité',
    description: 'Diagnostic des protocoles et configuration des équipements critiques.',
    details: [
      'Diagnostic TCP/IP : ping, tracert, netstat, arp -a',
      'Services IP : DNS (nslookup, flushdns), DHCP (processus DORA, baux)',
      'VPN & Accès Distant : Protocoles IPsec/SSL, troubleshooting tunnels',
      'Équipements : VLANs (Trunk/Access), configuration Bornes Wi-Fi (canaux, PoE)',
      'Outils de scan : Nmap, Advanced IP Scanner'
    ],
    flow: {
      title: 'Flux de Résolution Connectivité',
      steps: ['Câble/Wi-Fi', 'DHCP (IP)', 'Passerelle', 'DNS', 'Internet']
    },
    icon: 'Network',
    category: 'network'
  },
  {
    id: 'os-mastery',
    title: 'Maîtrise des OS',
    description: 'Administration avancée et gestion des terminaux multi-plateformes.',
    details: [
      'Windows : Active Directory (IAM), Group Policy (GPO), Registre',
      'macOS : Gestion via MDM (Jamf, Kandji), Terminal zsh, Permissions TCC',
      'Linux : Gestion des paquets, Shell scripting, Droits fichiers (chmod/chown)',
      'Déploiement : Création d\'images OS et déploiement automatisé'
    ],
    flow: {
      title: 'Hiérarchie Active Directory',
      steps: ['Forêt', 'Domaine', 'OU (Unité Orga)', 'GPO', 'Utilisateur/PC']
    },
    icon: 'Terminal',
    category: 'os'
  },
  {
    id: 'hardware',
    title: 'Hardware & Maintenance',
    description: 'Diagnostic matériel, maintenance préventive et gestion des périphériques.',
    details: [
      'Diagnostic POST : Interprétation des bips et codes d\'erreur BIOS/UEFI',
      'Maintenance préventive : Nettoyage, changement pâte thermique, test batterie',
      'Gestion périphériques : Imprimantes (spouleur, drivers), scanners, onduleurs',
      'Stockage : SMART monitoring, reconstruction RAID, clonage SSD'
    ],
    flow: {
      title: 'Chaîne de Démarrage (Boot)',
      steps: ['Alimentation', 'BIOS/POST', 'Bootloader', 'Noyau OS', 'Session']
    },
    icon: 'cpu',
    category: 'hardware'
  },
  {
    id: 'security',
    title: 'Sécurité Informatique',
    description: 'Gestion des accès, déploiement de correctifs et sensibilisation.',
    details: [
      'Gestion des accès (IAM) : RBAC, provisionnement de comptes',
      'Patch Management : Déploiement de correctifs via WSUS/SCCM/Intune',
      'Sensibilisation au phishing : Campagnes de test et formation utilisateurs',
      'Hygiène MFA : Troubleshooting et enforcement des politiques 2FA'
    ],
    flow: {
      title: 'Processus de Patching',
      steps: ['Scan', 'Test (Groupe Pilote)', 'Approbation', 'Déploiement', 'Audit']
    },
    icon: 'Shield',
    category: 'security'
  },
  {
    id: 'priority-management',
    title: 'Gestion des Priorités',
    description: 'Évaluation de la criticité des incidents pour optimiser le flux de travail (SLA).',
    details: [
      'Matrice d\'Urgence et d\'Impact (P1 à P4)',
      'Respect des SLAs (Service Level Agreements) et délais de résolution',
      'Gestion du backlog de tickets et escalades fonctionnelles',
      'Optimisation du flux de travail via la méthode Kanban/ITIL'
    ],
    flow: {
      title: 'Triage d\'Incident',
      steps: ['Réception', 'Qualification', 'Priorisation', 'Assignation', 'Résolution']
    },
    icon: 'book',
    category: 'management'
  },
  {
    id: 'customer-service',
    title: 'Communication Vulgarisée',
    description: 'Traduire des concepts techniques en instructions simples pour des non-experts.',
    details: [
      'Vulgarisation technique : Adapter le discours au niveau de l\'interlocuteur',
      'Écoute active et reformulation des besoins',
      'Rédaction de guides utilisateurs et bases de connaissances (FAQ)',
      'Communication de crise lors d\'interruptions de service majeures'
    ],
    icon: 'Users',
    category: 'soft'
  }
];

export const TOOLS: Tool[] = [
  {
    id: 'jira',
    name: 'Jira Service Management',
    category: 'Ticketing',
    usage: 'Suivi des incidents et SLAs.',
    description: 'Outil standard pour la gestion des tickets et du backlog support.',
    details: [
      'Gestion des files d\'attente (Queues)',
      'Respect des SLAs (Service Level Agreements)',
      'Automatisation des réponses types',
      'Liaison avec la base de connaissances (Confluence)'
    ],
    schematic: {
      title: 'Cycle de vie d\'un Ticket',
      steps: ['Ouverture', 'Triage', 'En cours', 'Test', 'Clôture']
    }
  },
  {
    id: 'aduc',
    name: 'Active Directory (ADUC)',
    category: 'IAM',
    usage: 'Gestion des identités et accès.',
    description: 'Console d\'administration pour les objets Active Directory.',
    details: [
      'Réinitialisation de mots de passe',
      'Gestion des groupes de sécurité',
      'Provisionnement de nouveaux comptes',
      'Audit des dernières connexions'
    ],
    schematic: {
      title: 'Flux de Provisionnement',
      steps: ['RH Request', 'Création AD', 'Attribution Groupes', 'Activation MFA']
    }
  },
  {
    id: 'powershell',
    name: 'PowerShell / Bash',
    category: 'CLI',
    usage: 'Automatisation de tâches administratives.',
    description: 'Indispensable pour manipuler Active Directory ou automatiser des déploiements.',
    details: [
      'Manipulation de fichiers CSV pour imports massifs',
      'Audit des configurations système',
      'Gestion des modules (ActiveDirectory, AzureAD)',
      'Remédiation à distance via WinRM'
    ],
    schematic: {
      title: 'Logique de Scripting',
      steps: ['Import CSV', 'Loop ($user)', 'Set-ADUser', 'Export Log']
    }
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    category: 'Network Diagnostic',
    usage: 'Analyse de paquets réseau.',
    description: 'Utilisé pour identifier les latences ou les échecs de poignées de main protocolaires.',
    details: [
      'Filtrage par protocole (http, tcp, dns)',
      'Analyse des "Three-way Handshake"',
      'Détection des retransmissions TCP',
      'Extraction de fichiers depuis une capture'
    ],
    schematic: {
      title: 'Analyse de Flux',
      steps: ['Capture (NIC)', 'Filtrage IP', 'Follow TCP Stream', 'Analyse Delay']
    }
  },
  {
    id: 'teamviewer',
    name: 'AnyDesk / TeamViewer',
    category: 'Remote Support',
    usage: 'Contrôle à distance sécurisé.',
    description: 'Permet d\'intervenir sur les postes utilisateurs sans se déplacer.',
    details: [
      'Accès non surveillé (Unattended access)',
      'Transfert de fichiers bidirectionnel',
      'Mode "Curtain" pour masquer l\'écran distant',
      'Enregistrement de session pour audit'
    ]
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
    id: 'm-0',
    title: 'Vérifications Matinales',
    frequency: 'daily',
    tasks: [
      'Vérifier le succès des sauvegardes (Backups)',
      'Monitorer les alertes critiques serveurs/réseau',
      'Vérifier l\'état du système de ticketing (SLA)',
      'Contrôler les logs de connexion suspects (SIEM)'
    ]
  },
  {
    id: 'm-1',
    title: 'Mises à jour critiques',
    frequency: 'weekly',
    tasks: [
      'Déployer les patchs de sécurité OS (Windows/macOS)',
      'Mettre à jour les navigateurs et logiciels tiers',
      'Vérifier les définitions antivirus et EDR',
      'Auditer les tickets "Bloqués" ou en attente'
    ]
  },
  {
    id: 'm-2',
    title: 'Nettoyage & Santé Système',
    frequency: 'monthly',
    tasks: [
      'Dépoussiérage des ventilateurs et racks serveurs',
      'Vérification des onduleurs (batteries et tests)',
      'Analyse de santé des disques (SMART)',
      'Nettoyage des fichiers temporaires et caches'
    ]
  },
  {
    id: 'm-3',
    title: 'Audit & Conformité',
    frequency: 'quarterly',
    tasks: [
      'Tester le plan de reprise d\'activité (DRP)',
      'Auditer les droits d\'accès (IAM review)',
      'Mettre à jour la documentation technique/FAQ',
      'Revue des licences logicielles actives'
    ]
  },
  {
    id: 'm-4',
    title: 'Renouvellement Infrastructure',
    frequency: 'yearly',
    tasks: [
      'Inventaire physique complet du parc',
      'Planification du remplacement hardware (EOL)',
      'Budgetisation des besoins technologiques',
      'Nettoyage logique profond des bases de données'
    ]
  }
];
