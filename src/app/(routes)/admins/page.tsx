"use client";

import { useEffect, useState } from "react";
import DataViewTable from "@/components/large/DataViewTable/DataViewTable";

export default function Admins() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/admins`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const result = await res.json();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching admins:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <DataViewTable
        data={data}
        keysToDisplay={["id", "name", "email", "role", "gender", "age"]}
      />
    </div>
  );
}