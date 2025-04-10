import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function ScheduleSection() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        Papa.parse(
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8ksBE8X5UU8udXQzPQnty5cvfuHY38-GLgAiv-nV_N1hFad3-fQ-ytjFRypEYNhOQWZtQrtPcQo41/pub?output=csv',
            {
                download: true,
                header: true,
                complete: (results) => {
                    const filteredData = results.data.filter(row => row.Курс && row.Дата && row.Время);
                    setCourses(filteredData);
                },
            }
        );
    }, []);

    return (
        <div
            id="schedule"
            className="py-20 bg-gradient-to-b from-black to-gray-900"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-16">
                    Расписание <span className="text-gold">курсов</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-white">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-black border border-gold/20 rounded-lg p-6"
                        >
                            <h3 className="text-xl font-semibold text-gold mb-2">
                                {course.Курс}
                            </h3>
                            <p>
                                {course.Дата} | {course.Время}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
