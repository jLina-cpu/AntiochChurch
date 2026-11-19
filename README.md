# AntiochChurch

## WhatsApp push notifications

The `WhatsApp push notification` GitHub Actions workflow sends an approved WhatsApp
message template when commits are pushed to any branch or tag. It can also be run
manually from the Actions tab. The intended recipient must have opted in to receive
messages.

### Meta setup

1. Set up a Meta WhatsApp Business Cloud API sender and create an approved message
   template in WhatsApp Manager. For example, use the template name
   `git_push_notification`, language `en_US`, and this body:

   `New Git push to {{1}} in {{2}}. Commit {{3}}: {{4}}`

   The workflow fills the parameters with the ref name, repository, short commit
   SHA, and commit message, respectively.
2. In the GitHub repository, open **Settings → Secrets and variables → Actions**.
   Add these **repository secrets**:
   - `WHATSAPP_ACCESS_TOKEN` — a Meta access token with WhatsApp messaging access.
   - `WHATSAPP_PHONE_NUMBER_ID` — the sender's WhatsApp phone number ID.
   - `WHATSAPP_TO` — recipient phone number in international format, digits only
     (for example, country code followed by the number; omit `+` and spaces).
3. Add these **repository variables**:
   - `WHATSAPP_GRAPH_API_VERSION` — an active Graph API version (for example, `v24.0`).
   - `WHATSAPP_TEMPLATE_NAME` — the approved template name, such as
     `git_push_notification`.
   - `WHATSAPP_TEMPLATE_LANGUAGE` — the approved template language code, such as
     `en_US`.

The workflow skips sending and displays a warning when configuration is missing.
Once configured, pushes send a template message through the Cloud API. Commit
messages are limited to 500 characters in the notification.
