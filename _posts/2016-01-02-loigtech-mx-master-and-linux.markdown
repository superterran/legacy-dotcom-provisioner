---
layout: post
title: Some kind of update
date:  2015-12-06 00:22:00 -0500
categories: Hardware Logitech
---

Logitech's MX Master is perhaps one of the best mice available at the moment. Supporting both Bluetooth and the Unifying Receiver, loads of buttons, a vertical scroll wheel and micro-usb rechargable battery, it's hard to go wrong with this thing. Unfortunately, the default key mappings on my linux desktop (Gnome 3) are terrible. The thumb button doesn't do anything, and the vertical scroll does god knows what.


![Keyboard Setting to Change to get Expose Thumb](./images/logitech_thumbbutton.png)

The vertical scroll button is a little harder to configure. Personally, I want the vertical scroll to do page zooming. This is a little harder to setup.

In Fedora 23, I install the following packages:

```
$ sudo dnf install xautomation xbindkeys xorg-x11-xinit-session
```

and give xbindkeys the following config:

in the ~/.xbindkeysrc
```
``
```
