# Gmail App Password Setup Instructions for Pear Tree Dental

## 🎯 Objective
Enable automated email confirmations for membership applications by configuring Gmail App Password authentication.

## 📧 Current Email System Status
- **Email Service**: Configured with Nodemailer + Gmail SMTP
- **Recipients**: 3 practice email addresses for internal notifications
- **Patient Confirmations**: Professional HTML emails with practice branding
- **Backup System**: ✅ Active (applications saved even if email fails)
- **Status**: Requires Gmail App Password to go live

## 🔧 Setup Steps

### Step 1: Enable 2-Factor Authentication
1. **Sign in to Google Account**: Use the main practice Gmail account (hello@peartree.dental)
2. **Go to Security Settings**: https://myaccount.google.com/security
3. **Enable 2-Step Verification**: If not already enabled
4. **Verify your phone number** and complete the setup

### Step 2: Generate App Password
1. **Return to Security Settings**: https://myaccount.google.com/security
2. **Find "App Passwords"**: Under "Signing in to Google" section
3. **Select App**: Choose "Mail"
4. **Select Device**: Choose "Other (Custom name)"
5. **Enter Name**: "Pear Tree Dental Website"
6. **Generate Password**: Google will provide a 16-character password
7. **Copy the Password**: Save it securely (you won't see it again)

### Step 3: Configure Environment Variables
The website needs these environment variables set in Netlify:

```bash
# Email Configuration
EMAIL_USER=hello@peartree.dental
EMAIL_PASS=[16-character-app-password-from-step-2]
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_FROM_NAME=Pear Tree Dental Centre
```

### Step 4: Update Netlify Environment Variables
1. **Log in to Netlify**: https://app.netlify.com
2. **Select the site**: same-f22m1i6mlsh-latest
3. **Go to Site Settings** → **Environment Variables**
4. **Add the following variables**:
   - `EMAIL_USER`: hello@peartree.dental
   - `EMAIL_PASS`: [paste the 16-character app password]
   - `EMAIL_HOST`: smtp.gmail.com
   - `EMAIL_PORT`: 587
   - `EMAIL_SECURE`: false
   - `EMAIL_FROM_NAME`: Pear Tree Dental Centre

### Step 5: Test the Email System
1. **Redeploy the site** (environment variables require a new build)
2. **Test email endpoint**: Visit `/api/test-email`
3. **Submit a test membership application**
4. **Check all email inboxes**:
   - hello@peartree.dental
   - reception@peartree.dental
   - practice@peartree.dental

## 📋 Email Templates Overview

### Patient Confirmation Email
- **Subject**: "Welcome to Pear Tree Dental - Membership Application Received"
- **Content**: Professional HTML template with:
  - Practice logo and branding
  - Application confirmation details
  - Next steps information
  - Contact information for questions
  - Professional signature

### Internal Notification Email
- **Subject**: "New Membership Application - [Patient Name]"
- **Content**: Complete application details including:
  - Patient personal information
  - Selected plan and pricing
  - Payment details (account numbers masked)
  - Partner information (if applicable)
  - Family members (if applicable)
  - Backup confirmation notice

## 🔒 Security Notes

### App Password Security
- **App passwords bypass 2FA**: Treat them like account passwords
- **Unique per application**: Each app should have its own password
- **Revocable**: Can be revoked individually if compromised
- **Limited scope**: Only for SMTP, not full account access

### Best Practices
- **Store securely**: Don't save in plain text files
- **Monitor usage**: Check for unauthorized email sending
- **Regular rotation**: Consider changing annually
- **Backup access**: Ensure multiple staff can manage if needed

## 🚨 Troubleshooting

### Common Issues
1. **"Invalid credentials" error**
   - ✅ Verify 2FA is enabled
   - ✅ Check app password is correct (no spaces)
   - ✅ Confirm EMAIL_USER matches the Google account

2. **"Less secure app access" error**
   - ✅ Use App Password, not regular password
   - ✅ Ensure account has 2FA enabled

3. **Emails not sending**
   - ✅ Check Netlify environment variables
   - ✅ Verify EMAIL_PORT=587 and EMAIL_SECURE=false
   - ✅ Test with `/api/test-email` endpoint

4. **Emails going to spam**
   - ✅ Check sender reputation
   - ✅ Verify SPF/DKIM records (advanced)
   - ✅ Use practice domain email for best delivery

## 📊 Testing Checklist

### Before Going Live
- [ ] App password generated and saved securely
- [ ] Environment variables set in Netlify
- [ ] Site redeployed with new variables
- [ ] Test email endpoint returns success
- [ ] Test membership application sends emails
- [ ] All recipient addresses receive emails
- [ ] Patient confirmation email looks professional
- [ ] Internal notification includes all details
- [ ] Backup system still saves applications

### Post-Setup Monitoring
- [ ] Check email delivery daily for first week
- [ ] Monitor spam folders for delivered emails
- [ ] Verify backup system continues working
- [ ] Test emergency email contact process
- [ ] Review email template formatting on mobile

## 🎉 Expected Results

Once configured correctly:

### For Patients
- ✅ Instant confirmation email after application submission
- ✅ Professional, branded communication
- ✅ Clear next steps and contact information
- ✅ Peace of mind that application was received

### For Practice
- ✅ Immediate notification of new applications
- ✅ Complete application details in organized format
- ✅ No lost applications (backup system + email)
- ✅ Professional patient communication
- ✅ Streamlined application processing

## 📞 Support Contacts

### Technical Support
- **Website Issues**: Contact development team
- **Email Problems**: Check this guide first, then contact dev team
- **Netlify Access**: Practice manager credentials required

### Google Support
- **App Password Issues**: https://support.google.com/accounts/answer/185833
- **2FA Problems**: https://support.google.com/accounts/answer/1064203

## 📅 Maintenance Schedule

### Weekly
- Monitor email delivery success rates
- Check spam folders for practice emails

### Monthly
- Review backup application storage
- Clean up old test emails

### Annually
- Consider rotating app password
- Review email template design
- Update contact information if changed

---

**Last Updated**: Version 318 - December 2024
**Status**: Ready for Gmail App Password activation
**Priority**: High - Required for live email functionality
