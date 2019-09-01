var config = {};

config.pep_port = 80;

config.https = {
    enabled: false
};

config.idm = {
    host: 'account.fiware.org',
    port: 443,
    ssl: true
};

config.app = {
    host: 'shopfloor-orion',
    port: '1026',
    ssl: false
};

config.pep = {
	app_id: 'cb56294a-7a8f-4958-a1d7-d00d3a3d6eff',
	username: 'pep_proxy_d68e0916-2305-4e9c-881d-fb7d7962b3de',
	password: 'pep_proxy_63517af5-afe2-44bf-b543-2e4549786bc5',
	trusted_apps : []
};

config.authorization = {
	enabled: false
}

config.cache_time = 300;

config.public_paths = [];

config.magic_key = undefined;

module.exports = config;
