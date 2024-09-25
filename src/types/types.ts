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

export interface SocialMediaItem {
    name: string;
    url: string;
    icon: string;
}

export interface MarketLink {
    name: string;
    icon: string;
    url: string;
}