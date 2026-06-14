/**
 * Soumission Netlify Forms pour formulaires rendus en JS.
 * Cible le formulaire statique détecté dans /public/__forms.html.
 *
 * TODO intégrations : Netlify déclenche les notifications (email, webhook).
 * Brancher ici un CRM (HubSpot) ou un envoi transactionnel (Resend / SendGrid)
 * via un webhook Netlify Forms si besoin d'un traitement avancé.
 */
export async function submitNetlifyForm(
  formName: string,
  data: Record<string, string>,
): Promise<void> {
  const body = new URLSearchParams({ "form-name": formName, ...data }).toString();

  const response = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    throw new Error(`Échec de soumission Netlify (${response.status})`);
  }
}
