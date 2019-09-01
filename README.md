![FIWARE Banner](https://nexus.lab.fiware.org/content/images/fiware-logo1.png)

# ZeroDefects showcase

## Overview
This project is part of [FIWARE](https://fiware.org) OPS infrastructure.
It has a recipe to redeploy a showcase.

## Requirements
  + Server
    + Ubuntu18+
    + Ansible 2.3+
    + `python 2.7` and `setuptools` should be installed, use `sudo apt-get install -y python python-setuptools`
  + Ansible
    + `config.json` with docker credentials should be put to `docker/`
    + `ansible_host` in `hosts` should be filled in with the external ip of the target host
    + admin password for Grafana should be put in secrets.yml
  + DNS
    + zerod.lab.fiware.org should point to a server

## How to run
```console
$ ansible-playbook main.yml
```
