// eslint-disable-next-line no-undef
module.exports = {
  '{apps,libs,tools}/**/*.{ts,tsx,js,json,html,css}': [
    'nx affected --target lint --uncommitted --fix true',
    'nx affected --target lint --uncommitted',
    'nx format:write --uncommitted',
  ],
}
