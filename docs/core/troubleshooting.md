CatJS
==============

## Troubleshooting 

### PhantomJS Support

CatJS has support for phantomjs, but it's not being installed as part of the catjs package.
Run: <code>catcli -t</code> And catjs will install phantom, or install it manually.

### Npm Installation Failure

In case an error occurs on the installation process you might need to upgrade the NodeJS/NPM.

Example of an error that you might get:


    ERR! Error: No compatible version found: colors@'^0.6.2'
    npm ERR! Valid install targets:
    npm ERR! ["0.3.0","0.5.0","0.5.1","0.6.0","0.6.0-1","0.6.1","0.6.2"]
    npm ERR! ...

