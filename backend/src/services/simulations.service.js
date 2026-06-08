/* Busca o banco de dados */
const dataBase =  require("../db/prisma");

/* Função de leitura do banco de simulados  */
const listPublishedSimulations = async () => {
    return await dataBase.simulation.findMany({
        where: {
            isPublished: true
        },
        select:{
            publicId: true,
            title: true,
            description: true,
            subject: true,
            originCode: true,
            requiredPlan: true,
            timePerQuestion: true, 
            isPublished: true,
            createdAt: true
        }, orderBy: {
            createdAt: "desc",
        }
    })
}

module.exports = {
    listPublishedSimulations,
}