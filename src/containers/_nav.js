const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Painel Geral",
    to: "/dashboard",
    icon: "cil-speedometer",
  },

  {
    _tag: "CSidebarNavTitle",
    _children: ["Gestão de RH"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Trabalhadores",
    to: "/trabalhadores",
    icon: "cil-people",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Lotações",
    to: "/lotacoes",
    icon: "cil-people",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Cargos",
    to: "/cargos",
    icon: "cil-warning",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Horários",
    to: "/horarios",
    icon: "cil-file",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Jornadas",
    to: "/jornadas",
    icon: "cil-calendar",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Itinerários",
    to: "/itinerarios",
    icon: "cil-bell",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Centros de Custos",
    to: "/centro_custos",
    icon: "cil-lock-locked",
  },
  
  {
    _tag: "CSidebarNavTitle",
    _children: ["Gestão Financeira"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Contas a Pagar e Receber",
    to: "/fin_pagar_receber",
    icon: "cil-money",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Plano de Contas",
    to: "/fin_plano",
    icon: "cil-money",
  },

  {
    _tag: "CSidebarNavTitle",
    _children: ["Dados"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Usuários",
    to: "/users",
    icon: "cil-people",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Unidades",
    to: "/units",
    icon: "cil-home",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Áreas Comuns",
    to: "/commonareas",
    icon: "cil-paperclip",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Configurações"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Meu Perfil",
    to: "/profile",
    icon: "cil-user",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Sair",
    to: "/logout",
    icon: "cil-drop",
  },
];

export default _nav;
