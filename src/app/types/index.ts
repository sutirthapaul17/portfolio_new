// export interface NavItem {
//   href: string;
//   label: string;
// }

// export interface Skill {
//   name: string;
// }

// export interface SocialLink {
//   href: string;
//   icon: React.ComponentType<any>;
//   label: string;
// }


export interface NavItem {
  href: string;
  label: string;
}

export interface Skill {
  name: string;
}

export interface SocialLink {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}