const { rismaClient } = require('@prisma/client');

const risma = new PrismaClient();
async function printTopics() {
  try {
    const topics = await prisma.topic.findMany({
      select: {
        id: true,
        name: true
      }
    });

    console.log('Topics:', topics);
  } catch (error) {
    console.error('Error fetching topics:', error);
  } finally {
    await prisma.$disconnect();
  }
}

printTopics();
