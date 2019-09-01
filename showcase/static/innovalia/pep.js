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
    host: 'innovalia-orion',
    port: '1026',
    ssl: false
};

config.pep = {
	app_id: '207d2922-0aa3-4ff5-b2f7-84698415a8e3',
	username: 'pep_proxy_b7b8a9b3-c739-4cf2-8377-a5c2cb21a214',
	password: 'pep_proxy_5756f71a-fdc9-43c6-9e47-b7897a38c443',
	trusted_apps : []
};


config.authorization = {
	enabled: false
}

config.cache_time = 300;

config.public_paths = [];

config.magic_key = undefined;

module.exports = config;
