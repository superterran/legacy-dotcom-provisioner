# dotcom

This is a basic little framework that lets me manage my domain. It includes an apache vhost that will serve everything
in the repo. submodules are checked out at the base of the repo, and the submodule directory name becomes the subdomain
that's being served. There's a www directory, and I've symlinked the webroot to my jekyll blog's _site. The vhost will
also serve files out of the submodules webroot/ directory as a subdirectory. Using this scheme, I described
my entire domain in this repository.

# deployments

There's a ./deploy script in the root of the repo, you can use this to stand up the server. If you run it with no options,
you will see some usage instructions. Basically, run the following to install all dependancies and get everything running:

 ```
    $ ./deploy all
 ```

 If you want to fire off just one submodule...

 ```
    $ ./deploy **ansbile**
 ```
