# dotcom

My website, built in jekyll. Has a basic blog section and some demos of work I've done. Needs to be cleaned up and have a ton added to it.

## Deployments

In the root, there's a script ./deploy. This script will kick off an ansible playbook that will provision and deploy the site. This should bootstrap the entire domain.

## Posting

You can update posts by creating a compatible jekyll/_posts/*.markdown file. Please look at other posts for usages. When committed to the master branch, the site will automatically deploy and build the latest version. You can manage posts from github. 
