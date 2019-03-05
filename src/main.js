function cookiejar2json(data) {
  return data
    .split(/\n|\r|\r\n/)
    .filter(line => line)
    .map(line => parseCookiejarLine(line))
    .filter(line => line.length === 7)
    .map(([domain, tailmatch, path, secure, expires, name, value]) => ({
      domain,
      tailmatch: tailmatch === 'TRUE',
      path,
      secure: secure === 'TRUE',
      expires: +expires,
      name,
      value,
    }));
}

function parseCookiejarLine(line) {
  return line.split(/\t/).trim();
}

export { cookiejar2json as default };
