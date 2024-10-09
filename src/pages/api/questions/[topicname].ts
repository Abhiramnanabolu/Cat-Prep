import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { topicname } = req.query;
  topicname = topicname+" Questions"

  if (typeof topicname !== 'string') {
      return res.status(400).json({ error: 'Invalid topic name' });
  }

  try {
      const topic = await prisma.topic.findFirst({
          where: {
              name: topicname,
          },
          include: {
              questions: true,
          },
      });

      if (!topic) {
          return res.status(404).json({ error: 'Topic not found' });
      }
      if(topic.questions.length >= 10){
        return res.status(200).json(shuffleArray(topic.questions).slice(0,10))
      }
      return res.status(200).json(shuffleArray(topic.questions));
  } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
  }
}