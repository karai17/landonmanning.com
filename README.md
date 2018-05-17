# LandonManning.com

## Build Docker Image

```
docker pull ghost:latest
```

## Create Docker Container

### Development

```
docker run \
-dti \
-p 9999:2368 \
-e url="http://localhost:9999" \
-v "/home/karai/GitHub/landonmanning.com/content:/var/lib/ghost/content" \
-m 128m \
--name landonmanning.com \
ghost:latest
```

```
docker run \
-dti \
-p 9999:2368 \
-e url="http://localhost:9999" \
-v "C:\Users\karai\Documents\GitHub\landonmanning.com\content:/var/lib/ghost/content" \
-m 128m \
--name landonmanning.com \
ghost:latest
```

### Production

```
docker run \
-dti \
-p 2808:2368 \
-e url="https://landonmanning.com" \
-v "/var/www/landonmanning.com/content:/var/lib/ghost/content" \
-m 128m \
--name landonmanning.com \
ghost:latest
```

## SSL Certificates

### Production

```
sudo certbot certonly --standalone --email lmanning@citadeldesign.ca --agree-tos -d landonmanning.com -d www.landonmanning.com
```
