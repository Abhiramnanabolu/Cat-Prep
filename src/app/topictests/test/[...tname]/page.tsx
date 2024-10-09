'use client'

import { useEffect, useState } from 'react';
import Test from "@/components/ui/test";
import { useParams } from 'next/navigation';

export default function Testpage() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  //@ts-ignore
  console.log(params,params.tname[0])
  useEffect(() => {
    const fetchQuestions = async () => {
      if (params && typeof params.tname[0] === 'string') {
        try {
          const response = await fetch(`/api/questions/${decodeURIComponent(params.tname[0])}`);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setQuestions(data);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        } finally {
          setLoading(false);
        }
      } else {
        setError('Invalid topic name');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [params]);

  if (loading) {
    return <main className='mt-16'>Loading...</main>;
  }

  if (error) {
    return <div className='mt-16'>Error: {error}</div>;
  }

  return (
    <main>
      <Test questions={questions} />
    </main>
  );
}
