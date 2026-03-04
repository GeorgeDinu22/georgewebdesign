export const ContactNotificationEmail = ({
  name,
  business,
  phone,
  email,
  message
}) => {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" 
    style="font-family: Arial, Helvetica, sans-serif; background:#f4f4f4; padding:40px 0;">
    <tr>
      <td align="center">

        <table width="100%" cellpadding="0" cellspacing="0" 
          style="max-width:600px; background:#ffffff; border-radius:20px; overflow:hidden;">

          <tr>
            <td style="padding:32px; font-size:18px; color:#333;">
              <strong>Ai primit o nouă solicitare din formularul de contact.</strong>
            </td>
          </tr>

          <tr>
            <td style="padding:0 32px 32px 32px; font-size:16px; line-height:1.7; color:#444;">

              <p><strong>Nume:</strong> ${name}</p>
              <p><strong>Nume afacere:</strong> ${business}</p>
              <p><strong>Telefon:</strong> 
                <a href="tel:${phone}" style="color:#555; text-decoration:none;">
                  ${phone}
                </a>
              </p>
              <p><strong>Email:</strong> 
                <a href="mailto:${email}" style="color:#555; text-decoration:none;">
                  ${email}
                </a>
              </p>

              <p><strong>Mesaj:</strong></p>
              <p style="background:#f9f9f9; padding:16px; border-radius:8px;">
                ${message}
              </p>

            </td>
          </tr>

          <tr>
            <td align="center" style="padding:20px; font-size:13px; color:#777;">
              Email generat automat de formularul site-ului.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
  `;
};