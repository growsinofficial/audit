# DNS setup for growsin.com

Files created in this folder
- `dns_records.txt` — copy/paste-ready DNS provider entries.
- `acme_challenge_instructions.txt` — how to complete DNS-01 ACME validation with Certbot.
- `dns_zone_example.txt` — example BIND zone file for reference.

Quick steps to connect your domain now
1. At your DNS provider create the records from `dns_records.txt` (AAAA + CNAME `www`).
2. Wait for DNS to propagate (use `dig` or your provider's UI). Example:

   dig AAAA growsin.com +short
   dig CNAME www.growsin.com +short

3. Tell me when the records are live. I will then:
   - complete the Next.js build (if not already built),
   - configure nginx reverse-proxy, and
   - obtain TLS certificates using Certbot (HTTP-01 if ports open, or DNS-01 if you prefer).

If you want an automated DNS-01 flow, tell me your DNS provider (Cloudflare, AWS Route53, DigitalOcean, etc.) and I will generate the required certbot plugin commands and any sample credential files.
