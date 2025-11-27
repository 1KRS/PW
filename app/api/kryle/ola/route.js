export async function GET() {
  try {
    const response = await fetch(
      'https://hellenic-delphic-maxim-of-the-day.vercel.app/api/kryle/ola',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    console.error('Σφάλμα κατά τη λήψη παραγγελμάτων:', error);

    // Επιστροφή fallback δεδομένων
    return Response.json({
      αποτελέσματα: [
        { id: 1, παράγγελμα: 'ΕΠΟΥ ΘΕΩ', επεξήγηση: 'Ακολούθα τον θεό.' },
      ],
    });
  }
}
