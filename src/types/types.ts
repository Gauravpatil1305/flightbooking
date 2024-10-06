export interface HeaderNavbarItem {
    name: string;
    icon: string;
    path: string;
}

export type AlertItem = {
    id: number;
    title: string;
    content: string;
    headerShow: number;
    link: string;
    date: string;
};

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

export interface HeroWallpaper {
    id: number;
    imagePath: string;
    country: string;
    countryFlagIcon: string;
}

export interface ExtraServiceItem {
    id: number;
    title: string;
    description: string;
    icon: string;
}