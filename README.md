This is a [Next.js](https://nextjs.org/) starter template.

## Included

- basic harness
- markdown pages (see mdpage.tsx)
- emailing a form
- color theming
- owl carousel
- typescript
- git-based deployment


## Environment variables

For emails:

MAIL_HOST
MAIL_PORT
MAIL_USER
MAIL_PASS

## Options

SiteProperties.sidePadding - set to `true` if you want a padded site (central strip).

## Getting Started

Clone, `npm i`, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## Deployment configuration

1. Procure a server with node, npm, nginx and supervisor (or install them on a server of your choice)
2. ssh into the server (preferrably set up ssh keys auth as shown here: https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2)
3. Create a deployment folder, e.g. `mkdir /var/site`
4. Create a bare git repo, e.g. `git init --bare ~/site.git`
5. Copy the post-receive hook from the root of the repo over to the repo. On local machine: `scp post-receive root@YOURDOMAN:site.git/hooks/post-receive` (you may choose to tune it to your needs before that)
6. On your local machine add the new remote `git remote add prod root@YOURDOMAIN:site.git`
7. On the server make the post-receive hook executable: `chmod +x ~/site.git/hooks/post-receive`
8. On the local machine make a push to the server with `git push prod master`. It will show you an error from supervisor - that's ok
8. Copy the `service.conf` to the server (supervisor must be installed by this moment): `scp service.conf /etc/supervisor/conf.d/site.conf`
9. Make supervisor reread the config and update services: `supervisorctl reread && supervisorctl update`
10. Now your site must have started and should be available at http://YOURDOMAIN:3000
11. If you now change something and push it to the repo on the prod server (like in step 8), the site will get rebuilt and restarted
12. Throw in an nginx site configuration. On local machine: `scp nginx.conf root@YOURDOMAIN:/etc/nginx/sites-enabled/default`
13. On the server make nginx reload config: `nginx -s reload`
14. Check that your site is now available under http://YOURDOMAIN (without a port)
15. Use certbot to configure ssl, as described here: https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx 
16. Once done, add auto-renewal for certificates using cron:
 - do `crontab -e`
 - add a line like this: `3 8,20 * * * certbot renew --renew-hook "systemctl reload nginx"` (it says: run certbot renew every day at 8.03 and 20.03; reload nginx if renew happennde)
17. Enjoy your site!
