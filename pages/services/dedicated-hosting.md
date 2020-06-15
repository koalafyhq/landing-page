---
title: Dedicated Hosting
description: We are very enthusiastic and highly interested on making internet faster, safer, and more accessible.
layout: service
---

To make it **faster**, by using Open Technologies, we're building a CDN with Indonesia as a first-class citizen.

Your user don't need to visit your server on San Francisco, or Singapore, or even Australia. Our edge (and origin) server are located in Indonesia and always will be the default location. And when your user is not from Indonesia (probably they're physically traveling or virtually by using VPN), we'll route the traffic to the closest region from Indonesia.

To make it **safer**, we also participating on running Tor Relay. Tor or The Onion Router defend internet users (including you) against tracking, surveillance, and censorship. This doesn't mean that we support "the bad actor", because the bad actor will use anything they want.

For the last, to make it more **accessible**, we need to achieve both point that we've mentioned above. By having faster & safer internet, internet will be accessible by anyone regardless their geographic location; ISP they are using, or even website they like to visit.

Some open source technologies we're using for building Dedicated Hosting are:

- HAProxy as load balancer & defend against DDoS attacks
- Varnish as http accelerator to caching the web at the edge
- Etcd as our source of in-house "dns resolver" to route the request

Beside that, we're developing our in-house solution to empowering the dedicated hosting
services, such as:

- edgy as "reverse proxy" to handle all incoming request to the specific "build version" that hosted
  on S3-compatible server, written in Go
- koalaCI as "simple builder" to build your project on CI, written in Rust
- acme as "TLS certificate provisioner" to make your website more secure (and SEO friendly), powered
  by Let's Encrypt and written in Go

All our projects are released under Open Source principles and always will be. You're never
vendor-locked under our services beside our platform are open source and also it's just an abstraction
of our current (and regular) workflow on how we build & deploy the website.
