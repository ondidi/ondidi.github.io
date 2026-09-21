"use client";

import { useEffect, useState } from "react";

type Point = {
    lat: number;
    lon: number;
};

type Props = {
    gpx: string;
};

export default function AdventureRouteMap({ gpx }: Props) {

    const [points, setPoints] = useState<Point[]>([]);

    useEffect(() => {

        async function loadGpx() {

            const response = await fetch(gpx);
            const text = await response.text();

            const parser = new DOMParser();
            const xml = parser.parseFromString(text, "application/xml");

            const trackPoints = Array.from(
                xml.getElementsByTagName("trkpt")
            );

            const coordinates = trackPoints
                .map((point) => ({
                    lat: Number(point.getAttribute("lat")),
                    lon: Number(point.getAttribute("lon")),
                }))
                .filter(
                    (point) =>
                        Number.isFinite(point.lat) &&
                        Number.isFinite(point.lon)
                );

            setPoints(coordinates);
        }

        loadGpx();

    }, [gpx]);

    if (points.length < 2) {
        return null;
    }

    const minLat = Math.min(...points.map((p) => p.lat));
    const maxLat = Math.max(...points.map((p) => p.lat));
    const minLon = Math.min(...points.map((p) => p.lon));
    const maxLon = Math.max(...points.map((p) => p.lon));

    const width = 400;
    const height = 300;

    const padding = 28;

    const routeWidth = width - padding * 2;
    const routeHeight = height - padding * 2;

    const path = points
        .map((point, index) => {

            const x =
                padding +
                ((point.lon - minLon) /
                    (maxLon - minLon || 1)) *
                    routeWidth;

            const y =
                height -
                padding -
                ((point.lat - minLat) /
                    (maxLat - minLat || 1)) *
                    routeHeight;

            return `${index === 0 ? "M" : "L"} ${x} ${y}`;

        })
        .join(" ");

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            width="100%"
            height="100%"
            preserveAspectRatio="none"
        >

            {/* Fundo padrão */}

            <rect
                x="0"
                y="0"
                width={width}
                height={height}
                fill="#F1F3F2"
            />

            {/* Áreas verdes */}

            <path
                d="
                    M 0 0
                    H 115
                    L 95 55
                    L 125 105
                    L 80 150
                    L 105 205
                    L 55 245
                    L 0 220
                    Z
                "
                fill="#DDEBDD"
            />

            <path
                d="
                    M 285 0
                    H 400
                    V 125
                    L 350 105
                    L 320 65
                    Z
                "
                fill="#DDEBDD"
            />

            <path
                d="
                    M 255 205
                    L 315 175
                    L 400 205
                    V 300
                    H 270
                    Z
                "
                fill="#E2EFDF"
            />

            {/* Água */}

            <path
                d="
                    M 400 35
                    C 355 55 365 95 390 120
                    C 420 150 355 180 375 215
                    C 390 240 370 275 345 300
                    H 400
                    Z
                "
                fill="#D7EAF1"
            />

            {/* Ruas */}

            <g
                fill="none"
                stroke="#D5D9DA"
                strokeWidth="9"
                strokeLinecap="round"
            >
                <path d="M -20 55 L 420 55" />
                <path d="M -20 145 L 420 145" />
                <path d="M -20 235 L 420 235" />

                <path d="M 65 -20 L 65 320" />
                <path d="M 165 -20 L 165 320" />
                <path d="M 265 -20 L 265 320" />
                <path d="M 350 -20 L 350 320" />
            </g>

            {/* Ruas secundárias */}

            <g
                fill="none"
                stroke="#E1E4E5"
                strokeWidth="4"
                strokeLinecap="round"
            >
                <path d="M 0 105 L 400 105" />
                <path d="M 0 190 L 400 190" />
                <path d="M 115 0 L 115 300" />
                <path d="M 215 0 L 215 300" />
                <path d="M 305 0 L 305 300" />
            </g>

            {/* Rota real do GPX */}

            <path
                d={path}
                fill="none"
                stroke="#E53935"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

        </svg>
    );
}