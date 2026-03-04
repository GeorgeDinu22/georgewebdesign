export const NoReplyEmail = () => {
    return `
<table width="100%" cellpadding="0" cellspacing="0" 
       style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#f4f4f4; padding:28px 0;">
  <tr>
    <td align="center">

      <!-- Container -->
      <table width="620" cellpadding="0" cellspacing="0" 
             style="width:600px; max-width:100%; background:#ffffff; border-radius:14px; overflow:hidden;">

        <!-- HEADER -->
        <tr>
          <td align="center" style="background:#0E0E0E; padding:24px 0;">
            <img src="https://georgeweb-design.ro/logo2.png"
                 alt="George Web Design"
                 width="160"
                 style="display:block;">
          </td>
        </tr>

        <!-- INTRO -->
        <tr>
          <td style="padding:36px 32px 20px 32px;">
            <h2 style="margin:0 0 16px 0; color:#0E0E0E; font-size:22px; font-weight:700;">
              Bună ziua,
            </h2>
            <p style="margin:0; font-size:15px; line-height:1.65; color:#444;">
              Am primit solicitarea dumneavoastră.
              <br>
              Voi reveni către dumneavoastră cu un răspuns personalizat
              în cel mai scurt timp posibil (de regulă în mai puțin de 24 de ore).
            </p>
          </td>
        </tr>


        <!-- OUTRO -->
        <tr>
          <td style="padding:0 32px 36px 32px;">
            <p style="margin:0; font-size:15px; line-height:1.65; color:#444;">
              Vă mulțumesc pentru încredere și pentru interesul acordat serviciilor mele.
              <br><br>
              <strong>Cu stimă,</strong><br>
              George Web Design
            </p>
          </td>
        </tr>

        <!-- FOOTER -->
<tr>
  <td align="center" 
      style="padding:22px 28px; font-size:11px; color:#aaa; line-height:1.6; background:#0E0E0E;">

    <p style="margin:0 0 10px 0;">
      Acest email a fost generat automat. Vă rog să nu răspundeți direct la acest mesaj.
    </p>

    <p style="margin:0 0 10px 0;">
      <a href="mailto:office@georgeweb-design.ro" 
         style="color:#FF8A00; text-decoration:none; font-weight:600;">
        office@georgeweb-design.ro
      </a>
      <span style="padding:0 8px; color:#555;">|</span>
      <a href="https://www.georgeweb-design.ro" 
         style="color:#FF8A00; text-decoration:none; font-weight:600;">
        www.georgeweb-design.ro
      </a>
    </p>

    <p style="margin:0 0 6px 0;">
      Datele dumneavoastră sunt prelucrate conform regulamentului GDPR.
    </p>

    <p style="margin:0;">
      <a href="https://www.georgeweb-design.ro/politica-de-confidentialitate"
         style="color:#aaa; text-decoration:underline;">
        Politica de Confidențialitate
      </a>
    </p>

  </td>
</tr>

      </table>

    </td>
  </tr>
</table>
    `
}