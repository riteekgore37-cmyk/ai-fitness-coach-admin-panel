"use client";

import { useEffect, useState } from "react";
import { getWorkoutByID } from "@/app/Actions/GetActions";
import ProgramDetails from "../../../../../../components/large/WorkoutProgramsComponent/ProgramDetails/ProgramDetails";

const SingleWorkout = ({ params }: { params: { id: string } }) => {
  const [workout, setWorkout] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getWorkoutByID(params.id);
      setWorkout(data);
    };

    fetchData();
  }, [params.id]);

  if (!workout) return <div>Loading...</div>;

  return (
    <div>
      <ProgramDetails program={workout} />
    </div>
  );
};

export default SingleWorkout;