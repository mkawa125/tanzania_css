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
    icon: 'fa fa-dashboard',
  },
  {
    title: true,
    name: 'MANAGEMENT'
  },
  {
    name: 'School',
    url: '/base',
    icon: 'fa fa-university',
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
    icon: 'fa fa-graduation-cap',
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
    icon: 'fa fa-user',
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
    icon: 'fa fa-book',
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
    icon: 'fa fa-tasks',
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
    name: 'OTHERS',
  },
  {
    name: 'About tcss',
    url: '/about',
    icon: 'fa fa-history'
  },
  {
    name: 'Contacts',
    url: '/contacts',
    icon: 'fa fa-phone'
  },
  {
    name: 'Setting',
    url: '/charts',
    icon: 'fa fa-cog'
  },
  {
    name: 'my profile',
    url: '/charts',
    icon: 'fa fa-user-circle-o'
  },
  {
    name: 'Logout',
    url: '/charts',
    icon: 'fa fa-sign-out'
  },
];
