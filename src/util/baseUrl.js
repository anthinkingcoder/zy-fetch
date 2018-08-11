export function isAbsoluteURL(url) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}

export function buildAbsoluteURL(baseUrl, relativeUrl) {
  return relativeUrl ? `${baseUrl.replace(/\/+$/, '')}/${relativeUrl.replace(/^\/+/, '')}` : baseUrl
}