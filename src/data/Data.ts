import { Point } from "../types/Point"
import { Vector } from "../types/Vector"

export let markersInv: Point[] = [
    {
      geo: {lat: 59.424594, lng: 24.793884},
      meta: {
        name: "Ülemiste Keskus",
        jobType: "Invisteeringutöö",
        startYear: 2022,
        endYear: 2025,
        budget: 300000
      }
    },
    {
      geo: {lat: 59.430112, lng: 24.766263},
      meta: {
        name: "Keskturg",
        jobType: "Invisteeringutöö",
        startYear: 2021,
        endYear: 2026,
        budget: 200000
      }
    },
    {
      geo: {lat: 59.394629, lng: 24.670068},
      meta: {
        name: "Taltech",
        jobType: "Invisteeringutöö",
        startYear: 2024,
        endYear: 2027,
        budget: 100000
      }
    },
  ]

export let markersHooldus: Point[] = [
    {
      geo: {lat: 59.419804, lng: 24.728708},
      meta: {
        name: "Kotka Tervisemaja",
        jobType: "Hooldustöö",
        startYear: 2024,
        endYear: 2024,
        budget: 25000
      }
    },
    {
      geo: {lat: 59.426349, lng: 24.724581},
      meta: {
        name: "Kristiine Keskus",
        jobType: "Hooldustöö",
        startYear: 2024,
        endYear: 2024,
        budget: 45000
      }
    },
    {
      geo: {lat: 59.436230, lng: 24.796273},
      meta: {
        name: "KUMU",
        jobType: "Hooldustöö",
        startYear: 2024,
        endYear: 2024,
        budget: 15000
      }
    },
  ]

export let vectorsLaiendamis: Vector[] = [
    {
      geo: [
        {lat: 59.427317, lng: 24.824024},
        {lat: 59.433679, lng: 24.860114},
        {lat: 59.438125, lng: 24.856531},
      ],
      meta: {
        name: "Tallinn-Narva",
        jobType: "Laiendamistöö",
        startYear: 2024,
        endYear: 2024,
        budget: 10000
      }
    },
    {
      geo: [
        {lat: 59.423082, lng: 24.782396},
        {lat: 59.423055, lng: 24.780694},
        {lat: 59.420537, lng: 24.770231},
      ],
      meta: {
        name: "Järvevana tee",
        jobType: "Laiendamistöö",
        startYear: 2024,
        endYear: 2024,
        budget: 26000
      }
    }
  ]