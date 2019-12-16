# mvc-test

Testing the development of an mvc in express / ts

## Configuring the dev environment

```bash
cp .env.example .env
vagrant up --provision
```

You can then connect to the mongo server through `192.168.10.10:27017`

To access the api:

```bash
curl -X 'GET' '192.168.10.10:3000/people'
```

You can view the node output through:

```bash
vagrant ssh
# in vagrant
sudo screen -R dev
```