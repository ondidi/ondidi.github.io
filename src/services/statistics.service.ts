export type StatisticsOverview = {
    rides: number;
    distance: number;
    hours: number;
    calories: number;
    elevation: number;
    states: number;
    adventures: number;
};

class StatisticsService {

    async getOverview(): Promise<StatisticsOverview> {

        return {

            rides: 412,

            distance: 26847,

            hours: 1648,

            calories: 580000,

            elevation: 328000,

            states: 6,

            adventures: 29

        };

    }

}

export default new StatisticsService();