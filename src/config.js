let baseUrl = 'http://localhost:5000/api';

if (window.location.host === 'salespro-dev.falconweb.app') {
  baseUrl = 'https://salespro-api-dev.falconweb.app/api';
} else if (window.location.host === 'salespro-qa.falconweb.app') {
  baseUrl = 'https://salespro-api-qa.falconweb.app/api';
} else if (window.location.host === 'salespro-staging.falconweb.app') {
  baseUrl = 'https://salespro-api-staging.falconweb.app/api';
} else if (window.location.host === 'salespro-prod.falconweb.app/') {
  baseUrl = 'https://salespro-api-prod.falconweb.app/api';
}

module.exports = { baseUrl };
