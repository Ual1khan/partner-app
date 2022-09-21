export const parseProfile = (raw) => ({
  name: raw.name,
  email: raw.contacts.email,
  phones: raw.contacts.phone.split(";"),
  website: raw.contacts.website || "https://1fit.app",
  description: raw.description,
  qr: raw.qrcode,
});
