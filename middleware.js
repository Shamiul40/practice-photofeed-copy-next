// import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
// import { NextResponse } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";


// const locales = ["en", "bn"];
// const defaultLocale = "en";

// const getLocale = (request) => {
//   const acceptLanguage = request.headers.get("accept-language");
//   const headers = { "accept-language": acceptLanguage };
//   const languages = new Negotiator({ headers }).languages();

//   return match(languages, locales, defaultLocale);
// };

// export async function middleware(request) {
//   const pathName = request.nextUrl.pathname;

//   const missingPathnameInLocale = locales.every(
//     (locale) =>
//       !pathName.startsWith(`/${locale}`) && !pathName.startsWith(`/${locale}/`),
//   );

//   if (missingPathnameInLocale) {
//     const locale = getLocale(request);

//     return NextResponse.redirect(
//       new URL(`/${locale}/${pathName}`, request.url)
      
//     )

//   }
// }

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     "/((?!_next).*)",
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// };






const locals = ["en, bn"];
const defaultLocale = "en";

const  getLocale=(request)=>{

  const acceptLanguage = request.headers.get("accept-language");
  const headers = {"accept-language" : acceptLanguage};
  const languages = new Negotiator({headers}).languages();

  return match(languages, locals, defaultLocale)

}

export async function middleware (request) {
const pathName = request.nextUrl.pathname;

const pathNameHasLocale = locals.every(locale=>
  !pathName.startsWith(`/${locale}`) &&
  !pathName.startsWith(`/${locale}/`)
)

  if(pathNameHasLocale) {

    const local = getLocale(request);

  }

}