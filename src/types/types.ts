export interface HeaderNavbarItem {
    name: string;
    icon: string;
    path: string;
}

export interface FooterNavbarLink {
    name: string;
    path: string;
}

export interface FooterNavbarItem {
    title: string;
    links: FooterNavbarLink[];
}