import postgres from 'postgres';

async function listInvoices() {
	if (!process.env.POSTGRES_URL) {
		throw new Error('POSTGRES_URL is not set');
	}

  const sql = postgres(process.env.POSTGRES_URL, {
    ssl: 'require',
    prepare: false,
  });

	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data;
}

export async function GET() {
  try {
    const invoices = await listInvoices();
    return Response.json(invoices);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}
