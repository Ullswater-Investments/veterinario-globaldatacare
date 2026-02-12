import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { clinicName, cif, email, contactName, contactEmail, contactPhone, referenceId } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const htmlContent = `
      <h2>Nueva Inscripción Kit Espacio de Datos</h2>
      <p><strong>Referencia:</strong> ${referenceId}</p>
      <hr/>
      <h3>Datos de la Clínica</h3>
      <ul>
        <li><strong>Nombre:</strong> ${clinicName}</li>
        <li><strong>CIF:</strong> ${cif}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
      <h3>Datos del Responsable</h3>
      <ul>
        <li><strong>Nombre:</strong> ${contactName}</li>
        <li><strong>Email:</strong> ${contactEmail}</li>
        <li><strong>Teléfono:</strong> ${contactPhone}</li>
      </ul>
      <p style="margin-top:20px;color:#666;">Este email ha sido generado automáticamente por Global Data Care.</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Global Data Care <onboarding@resend.dev>",
        to: ["emilio.emulet@accuro.es"],
        subject: `Nueva inscripción Kit Espacio de Datos - ${clinicName}`,
        html: htmlContent,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      throw new Error(data.message || "Failed to send email");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});