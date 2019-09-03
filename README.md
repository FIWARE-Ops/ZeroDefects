![FIWARE Banner](https://nexus.lab.fiware.org/content/images/fiware-logo1.png)

# ZeroDefects showcase

## Overview
This project is part of [FIWARE](https://fiware.org) OPS infrastructure.
It has a recipe to redeploy a showcase.

## Requirements
  + Server
    + Ubuntu18+
    + Ansible 2.3+
    + `python 2.7` and `setuptools` must be installed, use `sudo apt-get install -y python python-setuptools`
  + Ansible
    + `config.json` with docker credentials must be put to `docker/`
    + `ansible_host` in `hosts` must be filled in with the external ip of the target host
    + admin password for Grafana must be defined in secrets.yml
    + please, verify the value of `MTU` parameter in `docker.yml` and `docker/daemon.json`
   + DNS
    + zerod.lab.fiware.org should point to a server

## How to run
When you use this scenario for the first time, execute it with the environment variable `prepare`
```console
$ ansible-playbook -e prepare=True main.yml
```
When this variable is not defined, the scenario executes only `showcase.yml`, i.e. it only redeploys showcase itself
```console
$ ansible-playbook main.yml
```
