I wanted to put together a little walkthrough to get this laptop working well in Linux. I've been very happy with it so far, but I had to put in a few nights of research to really get it working as I want.

##Provisioning 

You can get this to work with UEFI, but I ended up going Legacy boot since I was having problems getting standby and hibernate to work when booting through EFI. Also, make sure you set up a swap partion at least the size of your memory so hibernation will work. 

##Bumblebee/Nvidia Optimus

The XPS 15 comes with both an Intel and Nvidia graphics controllers. The Intel GPU does the desktop stuff fine, but if you want to do any gaming you'll want to switch over to the Nvidia. This isn't hard to do, but it seems to render everything to a virtual framebuffer and probably isn't as perforamnt as just using the nvidia card. It's easy to setup though: 

(Bumblebee Indicator Gnome Extension)[https://extensions.gnome.org/extension/843/bumblebee-indicator/]
(Bumblebee Installation Guide for Fedora)[https://fedoraproject.org/wiki/Bumblebee]

The two above worked perfectly, took me a few minutes to setup. When you want to render through the Nvidia GPU, you need to 

```bash
optirun glxspheres64
```
