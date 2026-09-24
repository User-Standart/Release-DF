import type { SiteLinks } from '../../application';

/**
 * External destinations.
 *
 * `download` is the latest GitHub Release asset of the public repo: the
 * browser downloads the APK directly, with no GitHub page and no login.
 * `support` is email until there is a support WhatsApp number — then
 * switch it to `https://wa.me/55DDDNUMERO` and relabel in the content.
 */
export const siteLinks: SiteLinks = {
  download: 'https://github.com/User-Standart/Release-DF/releases/latest/download/DirigeFacil.apk',
  support: 'mailto:usercaio.business@gmail.com?subject=DirigeF%C3%A1cil%20-%20ajuda',
};
