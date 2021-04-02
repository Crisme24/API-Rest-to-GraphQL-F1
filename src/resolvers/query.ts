import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        //seasonList primero la defini en el schema.graphql
        async seasonsList(_: void, __: any, { dataSources } ) {
            //Aqui retornamos la respuesta
            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons
            )
        },

        async racesByYear(_: void, { year }, { dataSources } ) {
            return await dataSources.races.getYear(year).then(
                (data: any) => data.MRData.RaceTable.Races)
        },

        async raceSelect(_: void, { year, round }, { dataSources } ) {
            return await dataSources.races.getYearRound(year, round).then(
                (data: any) => data.MRData.RaceTable.Races[0])
        },

        async historyDrivers(_: void, { pageElements, page }, { dataSources } ) {
            //Aqui retornamos la respuesta
            return await dataSources.drivers.getDrivers(pageElements, page).then(
                (data: any) => data.MRData.DriverTable.Drivers
            )
        },
    }
};

export default query;