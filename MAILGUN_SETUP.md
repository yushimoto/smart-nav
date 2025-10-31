# Mailgun Setup Instructions

## 1. Install Dependencies
First, install the required packages:
```bash
npm install mailgun.js form-data
```

## 2. Create Mailgun Account
1. Go to [mailgun.com](https://mailgun.com)
2. Sign up for a free account
3. Verify your email address

## 3. Get Your API Credentials
1. In your Mailgun dashboard, go to "API Keys"
2. Copy your "Private API Key" (starts with `key-`)
3. Go to "Domains" and note your domain:
   - For testing: Use the sandbox domain (e.g., `your-sandbox-domain.mailgun.org`)
   - For production: Use your custom domain (e.g., `mg.yourdomain.com`)

## 4. Environment Variables
Create a `.env.local` file in the root directory with:

```env
MAILGUN_API_KEY=your_private_api_key_here
MAILGUN_DOMAIN=your_mailgun_domain_here
```

**Example for testing:**
```env
MAILGUN_API_KEY=your-api-key-from-mailgun-dashboard
MAILGUN_DOMAIN=your-sandbox-domain.mailgun.org
```

## 5. Free Tier Limits
- **10,000 emails/month** for free
- **100 emails/day** limit
- Perfect for contact forms!

## 6. Domain Setup
- **Testing**: Use the sandbox domain (already provided)
- **Production**: Add your own domain to Mailgun for better deliverability

## 7. Testing
1. Install dependencies: `npm install`
2. Start your development server: `npm run dev`
3. Fill out the contact form
4. Check your email at `tommy@fr8relay.com`

## 8. Deployment
Make sure to add the environment variables to your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Other platforms: Add to their environment variable section

## 9. EU Domains
If you're using an EU Mailgun domain, uncomment this line in the API route:
```typescript
// url: "https://api.eu.mailgun.net"
```
