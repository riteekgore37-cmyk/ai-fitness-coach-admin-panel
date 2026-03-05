'use server'
import { revalidateTag } from "next/cache";

const authToken = process.env.ADMIN_TOKEN;

interface RequestOptions {
    headers?: Record<string, string>;
    cache?: RequestCache;
    next?: {
        tags: string[];
    };
    method?: string;
}

export async function fetchData(url: string, options: RequestOptions = {}) {
    options.headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
        ...options.headers,
    };

    console.log("========== FETCH DEBUG ==========");
    console.log("Token Being Used:", authToken ? "YES" : "NO");
    console.log("Request URL:", url);

    const res = await fetch(url, options);

    console.log("Response Status:", res.status);

    if (!res.ok) {
        const errorText = await res.text();
        console.log("Error Response From Backend:", errorText);
        console.log("=================================");
        throw new Error("Could not fetch data");
    }

    console.log("=================================");

    if (options.next && options.next.tags) {
        options.next.tags.forEach(tag => revalidateTag(tag));
    }

    return res.json();
}

/* ============================= */
/* ========= MEAL PLANS ========= */
/* ============================= */

export async function getmealPlans() {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/mealplans`, {
        cache: 'no-cache',
        next: { tags: ['mealplans'] }
    });
}

export async function getmealplansById(mealplanId: String) {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/mealplans/${mealplanId}`, {
        cache: 'no-cache',
        next: { tags: ['mealplans'] }
    });
}

/* ============================= */
/* ============ MEALS ========== */
/* ============================= */

export async function getmeals() {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/meals`, {
        cache: 'no-cache',
        next: { tags: ['meals'] }
    });
}

export async function getmealsById(mealId: String) {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/meals/${mealId}`, {
        cache: 'no-cache',
        next: { tags: ['meals'] }
    });
}

/* ============================= */
/* ========= INGREDIENTS ======= */
/* ============================= */

export async function getIngradients() {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/Ingredients`, {
        cache: 'no-cache',
        next: { tags: ['ingradients'] }
    });
}

export async function getIngradientsById(IngradientId: string) {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/Ingredients/${IngradientId}`, {
        cache: 'no-cache',
        next: { tags: ['ingradients'] }
    });
}

/* ============================= */
/* ========= WORKOUTS ========== */
/* ============================= */

export async function getWorkouts() {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/workouts`, {
        cache: 'no-cache',
        next: { tags: ['Workouts'] }
    });
}

export async function getWorkoutByID(WorkoutId: String) {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/workouts/${WorkoutId}`, {
        cache: 'no-cache',
        next: { tags: ['Workouts'] }
    });
}

/* ============================= */
/* ========= MUSCLES =========== */
/* ============================= */

export async function getMuscles() {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/muscles`, {
        cache: 'no-cache',
        next: { tags: ['muscles'] }
    });
}

export async function getMusclesById(muscleId: String) {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/muscles/${muscleId}`, {
        cache: 'no-cache',
        next: { tags: ['muscle'] }
    });
}

/* ============================= */
/* ========= EXERCISES ========= */
/* ============================= */

export async function getExercises() {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/exercises`, {
        cache: 'no-cache',
        next: { tags: ['exercises'] }
    });
}

export async function getExerciseById(exerciseId: String) {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/exercises/${exerciseId}`, {
        cache: 'no-cache',
        next: { tags: ['exercises'] }
    });
}

/* ============================= */
/* ========= EQUIPMENTS ======== */
/* ============================= */

export async function getEquipments() {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/equipments`, {
        cache: 'no-cache',
        next: { tags: ['equipments'] }
    });
}

export async function getEquipmentById(equipmentId: String) {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/equipments/${equipmentId}`, {
        cache: 'no-cache',
        next: { tags: ['equipment'] }
    });
}

/* ============================= */
/* ========= ADMINS ============ */
/* ============================= */

export async function getAdmins() {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/console/admins`, {
        cache: 'no-cache',
        next: { tags: ['admins'] }
    });
}