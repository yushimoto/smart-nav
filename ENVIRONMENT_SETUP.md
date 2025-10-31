# Environment Setup for SmartNav

## Base URL Configuration

To ensure the logo displays correctly in emails for both development and production, you need to set up environment variables.

### Development Setup

Create a `.env.local` file in the root directory with:

```bash
# For development
NEXT_PUBLIC_BASE_URL=http://localhost:3002
```

### Production Setup

For production deployment (Vercel, Netlify, etc.), set the environment variable:

```bash
# For production
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### Automatic Detection

The system will automatically detect the URL in this order:

1. `NEXT_PUBLIC_BASE_URL` environment variable
2. `VERCEL_URL` (if deployed on Vercel)
3. Falls back to `http://localhost:3002` for development

### How It Works

- **Development**: Uses `http://localhost:3002/assets/img_placeholder/logo-light.png`
- **Production**: Uses `https://your-domain.com/assets/img_placeholder/logo-light.png`
- **Vercel**: Automatically uses `https://your-app.vercel.app/assets/img_placeholder/logo-light.png`

### Testing

You can test the logo URL by checking the console logs when submitting the contact form. The API will log the `baseUrl` and `logoUrl` being used.

## Email Template

The email template now dynamically uses the correct base URL for the logo image, ensuring it displays properly in both development and production environments.
