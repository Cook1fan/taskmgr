import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (
    mdIconRegistry: MdIconRegistry,
    domSanitizer: DomSanitizer
) => {
    const imgDir = 'assets/img';
    const sidebarDir = `${imgDir}/sidebar`;
    const dayDir = `${imgDir}/days`;
    const avatarDir = `${imgDir}/avatar`;
    const iconDir = `${imgDir}/icons`;
    mdIconRegistry.addSvgIconSetInNamespace('avatars', domSanitizer.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    mdIconRegistry.addSvgIconSetInNamespace('unassigned', domSanitizer.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`));
    mdIconRegistry.addSvgIcon('day', domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`));
    mdIconRegistry.addSvgIcon('week', domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`));
    mdIconRegistry.addSvgIcon('month', domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`));
    mdIconRegistry.addSvgIcon('project', domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`));
    mdIconRegistry.addSvgIcon('projects', domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`));
    mdIconRegistry.addSvgIcon('move', domSanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
    mdIconRegistry.addSvgIcon('add', domSanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`));
    mdIconRegistry.addSvgIcon('delete', domSanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    days.forEach(day => mdIconRegistry.addSvgIcon(`day${day}`, domSanitizer.bypassSecurityTrustResourceUrl(`${dayDir}/day${day}.svg`)));
};
