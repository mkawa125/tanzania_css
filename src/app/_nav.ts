interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'MANAGEMENT'
  },
  {
    name: 'School',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Primary Schools',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Secondary Schools',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Advanced Schools',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
    ],
  },
  {
    name: 'Students',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Primary Students',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Secondary Students',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Advanced Students',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Staffs',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Non-Teachers',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
      },
      {
        name: 'Teachers',
        url: '/icons/flags',
        icon: 'icon-star'
      },
    ]
  },
  {
    name: 'Exam Results',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Primary',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'O-level',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'A-level',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Admissions',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Primary',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'O-level',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'PROFILE',
  },
  {
    name: 'Setting',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'my profile',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Logout',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
];
