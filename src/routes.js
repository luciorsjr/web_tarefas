import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Logout = React.lazy(() => import('./views/Logout'));
const Trabalhadores = React.lazy(() => import('./views/Trabalhadores'));
const Lotacoes = React.lazy(() => import('./views/Lotacoes'));
const Wall = React.lazy(() => import('./views/Wall'));
const Documents = React.lazy(() => import('./views/Documents'));
const Reservations = React.lazy(() => import('./views/Reservations'));
const Warnings = React.lazy(() => import('./views/Warnings'));
const FoundAndLost = React.lazy(() => import('./views/FoundAndLost'));
const Users = React.lazy(() => import('./views/Users'));
const CommonAreas = React.lazy(() => import('./views/CommonAreas'));
const Units = React.lazy(() => import('./views/Units'));
const Fin_Pagar_Receber = React.lazy(() => import('./views/Fin_Pagar_Receber'));
const Fin_Plano = React.lazy(() => import('./views/Fin_Plano'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/trabalhadores', name: 'Trabalhadores', component: Trabalhadores },
  { path: '/lotacoes', name: 'Lotacoes', component: Lotacoes},
  { path: '/wall', name: 'Wall', component: Wall },
  { path: '/documents', name: 'Documents', component: Documents },
  { path: '/reservations', name: 'Reservations', component: Reservations },
  { path: '/warnings', name: 'Warnings', component: Warnings },
  { path: '/foundandlost', name: 'FoundAndLost', component: FoundAndLost },
  { path: '/users', name: 'Users', component: Users },
  { path: '/commonareas', name: 'CommonAreas', component: CommonAreas },
  { path: '/units', name: 'Units', component: Units },
  { path: '/fin_pagar_receber', name: 'Fin_Pagar_Receber', component: Fin_Pagar_Receber },  
  { path: '/fin_plano', name: 'Fin_Plano', component: Fin_Plano },  
];

export default routes;
