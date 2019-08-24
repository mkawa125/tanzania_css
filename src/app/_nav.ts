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
    url: '/schools',
    icon: 'fa fa-university',
    children: [
      {
        name: 'Primary Schools',
        url: '/schools/primary',
        icon: 'icon-puzzle'
      },
      {
        name: 'Secondary Schools',
        url: '/schools/secondary',
        icon: 'icon-puzzle'
      },
      {
        name: 'Advanced Schools',
        url: '/schools/advanced',
        icon: 'icon-puzzle'
      },
    ],
  },
  {
    name: 'Students',
    url: '/buttons',
    icon: 'fa fa-graduation-cap',
  },
  {
    name: 'Staffs',
    url: '/icons',
    icon: 'fa fa-user',
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
    name: 'Logout',
    url: '/login',
    class: 'text-danger',
    icon: 'fa fa-sign-out'
  },
];
