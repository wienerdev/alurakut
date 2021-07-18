import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    if (request.method === 'POST') {
        const TOKEN = '1051988c3b02640e031711f4c8a06c';
        const client = new SiteClient(TOKEN);

        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "976442", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
            // title: "Comunidade de teste",
            // imageUrl: "https://github.com/wienerdev.png",
            // creatorSlug: "wienerdev"
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })

        return;
    }

    response.status(404).json({
        message: "Ainda não temos nada no GET, mas no POST tem!"
    })
}
