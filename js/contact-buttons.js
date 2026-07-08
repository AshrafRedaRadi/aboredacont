/**
 * contact-buttons.js — أبو رضا للمقاولات
 * Manages the floating phone and WhatsApp buttons.
 * They are static HTML on every page; this module adds
 * subtle pulse behavior and tooltip hints on desktop.
 */

const PHONE = '+966547341260';
const WHATSAPP_URL = 'https://wa.me/966547341260';
const PHONE_URL = `tel:${PHONE}`;

export function initContactButtons() {
  const phoneBtn = document.getElementById('fab-phone');
  const waBtn = document.getElementById('fab-whatsapp');

  if (phoneBtn) {
    phoneBtn.setAttribute('href', PHONE_URL);
    phoneBtn.setAttribute('aria-label', `اتصل بأبو رضا للمقاولات: ${PHONE}`);
  }

  if (waBtn) {
    waBtn.setAttribute('href', WHATSAPP_URL);
    waBtn.setAttribute('aria-label', `تواصل عبر واتساب مع أبو رضا للمقاولات: ${PHONE}`);
  }
}
