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
    host: 'gf-orion',
    port: '1026',
    ssl: false
};

config.pep = {
	app_id: 'c18ae842-38ac-42ba-b09c-630e57b9da83',
	username: 'pep_proxy_f66c6eb6-cbd8-4ee3-9d1a-d9014659664e',
	password: 'pep_proxy_802fc450-956b-47ae-bdce-c52b7ef505cd',
	trusted_apps : []
};

config.authorization = {
	enabled: false
}

config.cache_time = 300;

config.public_paths = [];

config.magic_key = undefined;

module.exports = config;
