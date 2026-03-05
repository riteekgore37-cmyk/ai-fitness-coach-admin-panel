"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import DataViewComponent from "@/components/large/DataViewComponent/DataViewComponent";
import { getWorkouts } from "@/app/Actions/GetActions";
import { WorkoutDelete } from "@/app/Actions/DeleteActions";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getWorkouts();
      setWorkouts(data || []);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.Workouts}>
      <DataViewComponent
        data={workouts}
        keysToDisplay={[
          "id",
          "name",
          "image",
          "description",
          "type",
          "fitness_level",
          "fitness_goal",
          "place",
          "min_per_day",
          "total_number_days",
        ]}
        title="Workouts Programs"
        path="./add/workout"
        buttonTitle="Add Program"
        onDelete={WorkoutDelete}
        viewPath="./Workouts/SingleElement"
      />
    </div>
  );
};

export default Workouts;