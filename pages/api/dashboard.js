export default async function handler(request, response) {
    response.status(400).json({ error: 'datasource name is mandatory' });
}