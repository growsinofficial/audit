/**
 * =========================================================================
 * GROWSIN MARKETING LEADS - GOOGLE APPS SCRIPT
 * =========================================================================
 * 
 * HOW TO SET UP IN 2 MINUTES:
 * 1. Open Google Sheets (https://sheets.new) and name it "Growsin Marketing Leads".
 * 2. In Google Sheets, click menu: Extensions -> Apps Script.
 * 3. Delete any existing code in the editor, paste this entire script, and click the Save icon.
 * 4. Click the blue "Deploy" button (top right) -> "New deployment".
 * 5. Select type: "Web app" (click the gear icon next to "Select type").
 * 6. Configuration:
 *    - Description: Growsin Lead Webhook
 *    - Execute as: "Me (your email / growsinofficial@gmail.com)"
 *    - Who has access: "Anyone" (important for web form submissions)
 * 7. Click "Deploy" and authorize access when prompted.
 * 8. Copy the generated "Web app URL" (ends in /exec).
 * 9. Add it to your project's .env.local file:
 *    NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
 * 
 * =========================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);

    // Auto-create styled header row if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp (IST)",
        "Full Name",
        "Mobile Number",
        "Email Address",
        "Goal Horizon",
        "Risk Comfort"
      ]);
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#1f9a32").setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    var timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var name = data["Full Name"] || data.name || "";
    var phone = data["Mobile Number"] || data.phone || "";
    var email = data["Email Address"] || data.email || "";
    var horizon = data["Primary Goal Horizon"] || data.horizon || "";
    var risk = data["Risk Comfort"] || data.riskComfort || "";

    // Prevent Google Sheets formula parse error: prefix with ' to treat as plain text
    var safePhone = "'" + phone.toString().replace(/^'+/, "");

    // 1. Append lead row to Google Sheet
    sheet.appendRow([timestamp, name, safePhone, email, horizon, risk]);

    // 2. Send instant email notification to growsinofficial@gmail.com
    var recipient = "growsinofficial@gmail.com";
    var subject = "🚀 New Goal-Mapping Lead: " + name + " (" + phone + ")";
    
    var cleanPhone = phone.replace(/[^0-9]/g, "");
    var waLink = "https://wa.me/" + cleanPhone + "?text=" + encodeURIComponent("Hi " + name + ", thank you for reaching out to Growsin regarding your goal-mapping session.");

    var htmlBody = 
      '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">' +
        '<div style="background: #072e14; color: #ffffff; padding: 22px 24px;">' +
          '<h2 style="margin: 0; font-size: 20px; color: #ffffff;">New Growsin Marketing Lead Received</h2>' +
          '<p style="margin: 6px 0 0; font-size: 13px; color: #bbf7d0;">Recorded in Google Sheets &bull; ' + timestamp + '</p>' +
        '</div>' +
        '<div style="padding: 24px; background: #ffffff;">' +
          '<table style="width: 100%; border-collapse: collapse; font-size: 14px;">' +
            '<tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; width: 40%;">Full Name:</td><td style="padding: 10px 0; font-weight: bold; color: #0f172a;">' + name + '</td></tr>' +
            '<tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b;">Mobile Number:</td><td style="padding: 10px 0; font-weight: bold; color: #167a27;"><a href="tel:' + phone.replace(/[^0-9+]/g, "") + '" style="color: #167a27; text-decoration: none;">' + phone + '</a></td></tr>' +
            '<tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b;">Email Address:</td><td style="padding: 10px 0; font-weight: bold; color: #0f172a;"><a href="mailto:' + email + '" style="color: #1f9a32; text-decoration: none;">' + email + '</a></td></tr>' +
            '<tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b;">Primary Goal Horizon:</td><td style="padding: 10px 0; font-weight: bold; color: #0f172a;">' + horizon + '</td></tr>' +
            '<tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b;">Risk Comfort:</td><td style="padding: 10px 0; font-weight: bold; color: #0f172a;">' + risk + '</td></tr>' +
          '</table>' +
          '<div style="margin-top: 24px; text-align: center;">' +
            '<a href="' + waLink + '" style="background: #25d366; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">💬 Chat with Lead on WhatsApp</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: htmlBody
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
