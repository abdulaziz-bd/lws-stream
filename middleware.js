import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let defaultLocale = "en";
let locales = ["bn", "en"];

// Function to get the preferred locale
function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();

  console.log(languages);

  return match(languages, locales, defaultLocale);
}

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Access cookies from the request
  const cookieLocale = request.cookies.get("locale")?.value;

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If there is a cookie with a locale, use it
  if (cookieLocale && !pathnameIsMissingLocale) {
    const currentLocale = pathname.split("/")[1];

    // If the cookie locale is already in the URL, continue
    if (currentLocale === cookieLocale) {
      return NextResponse.next();
    }

    const pathWithoutLocale = pathname.slice(4);
    // Otherwise, redirect to the URL with the cookie locale
    return NextResponse.redirect(
      new URL(`/${cookieLocale}/${pathWithoutLocale}`, request.url)
    );
  }

  // If no locale cookie exists or pathname is missing a locale, determine locale
  if (pathnameIsMissingLocale) {
    const locale = cookieLocale ?? getLocale(request);

    const response = NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );

    // Set the locale cookie
    response.cookies.set("locale", locale);

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
  ],
};
