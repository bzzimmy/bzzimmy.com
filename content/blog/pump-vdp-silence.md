---
title: "A YC-Backed Startup Left Production AWS Keys Public for 5 Months. Their VDP Was Silent."
date: "2026-03-23"
summary: "Pump.co's full production environment file was publicly exposed for 5 months. They silently fixed it and never responded to the disclosure."
tags: ["security-research", "disclosure", "aws", "credential-exposure", "vdp"]
draft: false
cover: /images/blog/pump-vdp-cover.png
---

[Pump.co](https://pump.co) is a YC-backed startup that optimizes AWS cloud costs for over 1,000 startups. Customers grant Pump cross-account IAM roles for billing access. The company displays SOC 2 and ISO 27001:2022 certifications on its website, claims least-privilege IAM practices, conducts regular third-party penetration testing, and offers its own AWS misconfiguration scanner called Pump Secure.

In February 2026, as part of my research, I found their full production environment file exposed on a public code sharing platform. It had been there since October 2025.

## What was exposed

The environment file contained working credentials for multiple production services including AWS, Auth0, ClickHouse, SendGrid, Datadog, and PostHog. I verified the following with read-only operations and stopped immediately after confirming access.

![Redacted production environment file](/images/blog/pump-env-redacted.png)

The exposed AWS credentials belonged to an IAM user called `pump-backend`. The user had access to list 57 S3 buckets containing customer invoices, tax documents, Terraform state, security compliance reports, and cost data. A second dev account exposed 28 additional buckets.

| Bucket | Contents |
|--------|----------|
| `pump-invoices-prod` | Customer invoices with company names |
| `pump-terraform-state-production` | Live Terraform state files |
| `pump-secure-reports-prod` | WAF security compliance reports |

The S3 listing below shows the `pump-invoices-prod` bucket. Each entry is a customer invoice — file names, timestamps, and sizes are visible. `IsTruncated: true` indicates more objects exist beyond what was returned.

![Redacted S3 bucket listing from pump-invoices-prod](/images/blog/pump-s3-invoices-redacted.png)

The Auth0 management API credentials were also valid. The token granted full user CRUD permissions including read, create, update, and delete users, along with the ability to delete authentication methods and create new clients. A single API call returned 1,000 total users.

This is a company that asks customers for cross-account IAM access to their AWS environments. Anyone who found this file could have downloaded customer invoices and tax documents, mapped Pump's infrastructure through the Terraform state, or modified user accounts through the Auth0 management API. These credentials were live and publicly accessible for months.

## Lack of response

Pump's [VDP](https://www.pump.co/vulnerability-disclosure-policy) commits to responding promptly, working with the researcher to validate the report, and keeping them informed as the vulnerability is processed. I reported through the exact channels they list: `eng@pump.co` and `spndn@pump.co`. The `spndn@` address appears to belong to founder and CEO Spandana Nakka.

- **February 22** — Initial report with full details and verification evidence
- **March 8** — Follow-up email noting no response had been received
- **As of today** — No response to either email

The exposed file has since been taken down, confirming the report was seen and acted on. Despite that, there has been no acknowledgment, no status update, no confirmation from Pump that credentials were rotated, and no indication of whether the exposure was exploited by others during the 5 months it was public.

## What should have happened

A company that displays SOC 2 and ISO 27001 badges, conducts regular penetration testing, and offers an AWS security scanner should not have a full production environment file exposed on a public code sharing platform for 5 months. When a researcher reports it through your own VDP, a response confirming remediation and credential rotation is the bare minimum.

Pump silently fixed the issue and went quiet. That is exactly the kind of response a VDP is supposed to prevent. If you publish one, follow it.
